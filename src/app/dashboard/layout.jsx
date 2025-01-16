import "../../app/globals.css";
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
                <div className="flex max-h-screen">
                    <Sidebar />
                    <main className="flex     justify-center w-full">
                        {children}

                    </main>
                </div>
            </AuthProvider>
        </div>
    );
}
