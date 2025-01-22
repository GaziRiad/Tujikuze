"use client";

import { useEffect, useRef } from "react";

export function CursorEffect({ targetSelector }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const targetElement = document.querySelector(targetSelector);

    const updateCursor = (e) => {
      if (targetElement && targetElement.contains(e.target)) {
        document.documentElement.style.setProperty("--x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty("--x", `-9999px`);
      document.documentElement.style.setProperty("--y", `-9999px`);
    };

    if (targetElement) {
      targetElement.addEventListener("mousemove", updateCursor);
      targetElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener("mousemove", updateCursor);
        targetElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [targetSelector]);

  return null;
}
