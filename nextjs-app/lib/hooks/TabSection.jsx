"use client";

import SectionHeading from "@/components/SectionHeading";
import { useState, useRef, useEffect } from "react";

export default function TabSection({ children, title = "TAB TITLE" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
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
        className={`overflow-hidden transition-[height] duration-300 ease-in-out`}
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </section>
  );
}
