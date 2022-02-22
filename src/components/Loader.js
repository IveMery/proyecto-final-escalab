import React, { useEffect } from "react";
import herocharging from "../assets/animation/herocharging.json";
import lottie from "lottie-web";

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
console.log("me estoy renderizando")
  return (
    <div className="loader__container" style={{ width: 200, height: 200 }}>
      <div id="hero-loading"></div>
    </div>
  );
};

export default Loader;
