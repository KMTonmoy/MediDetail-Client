'use client'
import React, { useEffect } from "react";

const AdBanner = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div style={{ width: "100%", maxWidth: "1000px", minWidth: "250px" }}>
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

export default AdBanner;
