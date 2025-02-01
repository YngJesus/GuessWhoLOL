import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";

function HomePage() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <>
      <HeroSection />

      {/* Google AdSense Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client="ca-pub-9697028383298359"
        data-ad-slot="4168013160"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}

export default HomePage;
