"use client";
import React, { useState, useEffect } from 'react';
import '@styles/globals.css'

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full h-14 mt-1 scale-x-0 bar_gradient origin-left scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}>test</div>
  );
};

export default ScrollProgressIndicator;