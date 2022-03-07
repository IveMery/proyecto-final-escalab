import React, { useEffect } from "react";
import herocharging from "../assets/animation/herocharging.json";
import lottie from "lottie-web";
import ErrorBoundary from "../ErrorBoundary";

const Loader = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("hero-loading"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: herocharging,
    });
  });

  return (
    <ErrorBoundary>
      <div className="loader__container" style={{ width: 200, height: 200 }}>
        <div id="hero-loading"></div>
      </div>
    </ErrorBoundary>
  );
};

export default Loader;
