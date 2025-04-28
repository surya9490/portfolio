"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[64px] md:top-[80px] left-0 w-full h-[3px] bg-transparent z-[98]">
      <div
        className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
