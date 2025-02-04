"use client";

import SectionHeading from "@/components/SectionHeading";
import { useState, useRef, useEffect } from "react";

export default function TabSection({ children, title = "TAB TITLE" }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      const height = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
      setContentHeight(height);
    }
  }, [isOpen]);

  return (
    <section>
      <SectionHeading
        title={title}
        type="tab"
        state={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: contentHeight,
          opacity: isOpen ? 1 : 0,
          transform: `translateY(${isOpen ? 0 : -10}px)`,
        }}
      >
        {children}
      </div>
    </section>
  );
}
