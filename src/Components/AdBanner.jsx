"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const AdBanner = () => {
    useEffect(() => {
        // Safely pushing ads on the client-side
        if (typeof window !== "undefined" && window.adsbygoogle) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense error:", e);
            }
        }
    }, []);

    return (
        <div style={{ width: "100%", maxWidth: "1000px", minWidth: "250px" }}>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1157339341225906"
                crossOrigin="anonymous"
            ></script>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
                data-ad-client="ca-pub-1157339341225906"
                data-ad-slot="3962977531"
            ></ins>
        </div>
    );
};

export default dynamic(() => Promise.resolve(AdBanner), { ssr: false });
