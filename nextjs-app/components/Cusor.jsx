"use client";

import { useEffect } from "react";

export function CursorEffect() {
  useEffect(() => {
    const updateCursor = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return null;
}
