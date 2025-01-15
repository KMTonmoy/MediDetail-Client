// import React from 'react';
// import Script from 'next/script';

// const AdSense = ({ pId }) => {
//     return (
//         <div>
//             <Script
//                 async
//                 src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1157339341225906`}
//                 crossOrigin="anonymous"
//                 strategy="afterInteractive"
//             />
//         </div>
//     );
// };

// export default AdSense;

"use client"
import React, { useEffect } from "react";

const AdSense = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
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

export default AdSense;
