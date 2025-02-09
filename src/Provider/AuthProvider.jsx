'use client';
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    } finally {
      setLoading(false);     
    }
  };         
   
  
  const logOut = async () => {
    setLoading(true);
    try {
      await axios.get(`https://mediserver.vercel.app/logout`, {    
        withCredentials: true,
      });        
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (name, photo) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  const saveUser = async (user) => {
    try {
      const existingUserResponse = await axios.get(
        `https://mediserver.vercel.app/users/${user?.email}`
      );
      const existingUser = existingUserResponse.data;

      if (existingUser) {
        return existingUser;
      }

      const currentUser = {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
        role: "user",  // You can adjust the default role based on your system
      };
      const { data } = await axios.put(
        `https://mediserver.vercel.app/user`,
        currentUser
      );
      return data;
    } catch (error) {
      console.error("Error saving user:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Delay the saveUser function by 6 seconds
        setTimeout(async () => {
          try {
            await saveUser(currentUser);
          } catch (error) {
            console.error("Error handling auth state change:", error);
          }
        }, 6000); // 6 seconds delay
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
