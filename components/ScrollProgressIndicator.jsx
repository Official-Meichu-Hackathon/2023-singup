"use client";
import React, { useState, useEffect } from "react";
import "@styles/globals.css";

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollableHeight =
      document.documentElement.scrollHeight - windowHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div
      className="fixed w-full h-14 mt-1 scale-x-0 bg-[#ccc] origin-left scroll-progress z-[1000]"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    >
      test
    </div>
=======
    <div className="fixed w-full h-14 mt-1 scale-x-0 bar_gradient origin-left scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}>test</div>
>>>>>>> 6814d62bdc9594aed8c8ef848e53176e8db511a0
  );
};

export default ScrollProgressIndicator;
