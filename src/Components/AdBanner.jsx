"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const AdBanner = () => {
    useEffect(() => {
        // Check if AdSense is available and push ads
        if (typeof window !== "undefined" && window.adsbygoogle) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense error:", e);
            }
        }
    }, []);

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1000px",
                minWidth: "250px",
                margin: "0 auto", // Center the ad
            }}
        >
            {/* AdSense container */}
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="pub-1157339341225906" // Replace with your AdSense client ID
                data-ad-slot="3962977531" // Replace with your Ad slot ID
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
            ></ins>
        </div>
    );
};

 export default dynamic(() => Promise.resolve(AdBanner), { ssr: false });
