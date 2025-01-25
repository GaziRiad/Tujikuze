"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";

import imgLarge from "../../public/images/2.jpg";

export default function OurMission() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-[1720px] px-4">
        <SectionHeading
          title="Our Mission"
          type="tab"
          state={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <>
            <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">
              Tujikuze’s mission is to empower Kenyan artisan communities by
              connecting them with global markets seeking authentic, sustainable
              products. By fostering ethical production and preserving
              traditional craftsmanship, we create opportunities for growth and
              meaningful impact. Tujikuze’s mission is to empower Kenyan artisan
              communities by connecting them with global markets seeking
              authentic, sustainable products. By fostering ethical production
              and preserving traditional craftsmanship, we create opportunities
              for growth and meaningful impact.
            </p>
            <ul className="mb-14 flex flex-col divide-y divide-[#1A1A1A]/20 text-lg lg:mb-48 lg:text-4xl">
              <li className="grid grid-cols-2 py-6 lg:grid-cols-[30fr_70fr]">
                <span>5</span>
                <span>Production entities</span>
              </li>
              <li className="grid grid-cols-2 py-6 lg:grid-cols-[30fr_70fr]">
                <span>100</span>
                <span>Artisan Communities</span>
              </li>
              <li className="grid grid-cols-2 py-6 lg:grid-cols-[30fr_70fr]">
                <span>10</span>
                <span>Network of Artisans</span>
              </li>
            </ul>
          </>
        )}
      </div>
      {isOpen && (
        <Image
          src={imgLarge}
          alt="man crafting"
          className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[920px]"
        />
      )}
    </section>
  );
}
