import "../../app/globals.css";
import AdSense from "../../Components/AdSense";
import Sidebar from "../../Components/Sidebar";
import AuthProvider from "../../Provider/AuthProvider";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <div>
            <AuthProvider>
                <Head>
                    <title>Your App Title</title>
                    <meta name="description" content="Your app description here" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="flex">
                    <Sidebar />
                    <main className="flex justify-center w-full">
                        {children}
                        {/* AdSense component where appropriate */}
                        {/* <AdSense pId="pub-1157339341225906" /> */}
                    </main>
                </div>
            </AuthProvider>
        </div>
    );
}
