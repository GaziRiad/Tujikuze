"use client";

import SectionHeading from "@/components/SectionHeading";
import React, { useState } from "react";

export default function TabSection({ children, title = "TAB TITLE" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <SectionHeading
        title={title}
        type="tab"
        state={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && children}
    </section>
  );
}
