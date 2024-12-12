"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Determine whether the progress bar should be shown
  const shouldShowProgressBar = pathname?.startsWith("/post");

  useEffect(() => {
    if (!shouldShowProgressBar) return;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldShowProgressBar]);

  if (!shouldShowProgressBar) return null;

  return (
    <div className="w-full h-[4px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
