"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const AdSense = () => {
    useEffect(() => {
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
                data-ad-client="ca-pub-1157339341225906"
                data-ad-slot="6641111760"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default dynamic(() => Promise.resolve(AdSense), { ssr: false });
