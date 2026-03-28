"use client";

import dynamic from "next/dynamic";
import React from "react";

// SSR বন্ধ করে dynamic import
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  if (!animationPath) {
    return <p className="text-red-500">⚠️ Animation JSON path missing</p>;
  }

  return (
    <div style={{ width }}>
      <Lottie
        animationData={animationPath}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default AnimationLottie;
