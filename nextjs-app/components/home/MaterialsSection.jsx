"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "../../public/images/visuals.png";

import material1 from "../../public/images/cotton.png";
import material2 from "../../public/images/fibers.png";
import material3 from "../../public/images/metal.png";
import material4 from "../../public/images/textiles.png";
import SectionHeading from "../SectionHeading";
import MaterialsCarousel from "./MaterialsCarousel";

const craftsmanships = [
  {
    title: "Beading",
    text: "Showcases intricate designs and rich heritage.",
    img: material1,
  },
  {
    title: "Weaving",
    text: "Showcases intricate designs and rich heritage.",
    img: material2,
  },
  {
    title: "Screenprinting",
    text: "Showcases intricate designs and rich heritage.",
    img: material3,
  },
  {
    title: "Macrame",
    text: "Showcases intricate designs and rich heritage.",
    img: material4,
  },
  {
    title: "Beading",
    text: "Showcases intricate designs and rich heritage.",
    img: material1,
  },
  {
    title: "Weaving",
    text: "Showcases intricate designs and rich heritage.",
    img: material2,
  },
  {
    title: "Screenprinting",
    text: "Showcases intricate designs and rich heritage.",
    img: material3,
  },
];

function MaterialsSection() {
  const [hoveredImage, setHoveredImage] = useState(img1);
  const [isFading, setIsFading] = useState(false);

  const handleHover = (img) => {
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      setHoveredImage(img); // Change the image
      setIsFading(false); // Start fade-in
    }, 150); // Match the transition duration
  };

  return (
    <section className="mx-auto mb-48 max-w-[1720px] px-4">
      <SectionHeading title="Materials & Craftsmanships" />
      <h2 className="mb-11 max-w-[1320px] text-lg lg:mb-28 lg:text-4xl">
        We use sustainable, locally sourced materials to create high-quality
        pieces that honor Kenya’s craftsmanship and cultural heritage.
      </h2>
      <div className="mb-48 flex flex-col items-start justify-between gap-14 lg:flex-row lg:gap-0">
        <ul className="flex flex-col gap-[6px]">
          {craftsmanships.map((item, index) => (
            <li
              key={index}
              className="grid cursor-pointer grid-cols-[30fr_70fr] text-[#BABABA] transition-all hover:text-[#1A1A1A]"
              onMouseEnter={() => handleHover(item.img)}
              onMouseLeave={() => handleHover(img1)}
            >
              <p className="font-secondary text-sm">{item.title}</p>
              <p className="text-sm lg:text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
        <div
          className={`relative h-[320px] w-full overflow-hidden lg:h-[620px] lg:w-[560px]`}
        >
          <Image
            src={hoveredImage}
            alt="Hovered craftsmanship"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      {/* <ul className="grid grid-cols-4 gap-x-3">
        {materials.map((item, index) => (
          <li key={index} className="text-[#1A1A1A]">
            <Image
              src={item.img}
              alt="Material image"
              className="mb-7 h-[600px] object-cover"
            />
            <p className="mb-3 font-secondary text-2xl">{item.title}</p>
            <p className="max-w-80 text-lg">{item.description}</p>
          </li>
        ))}
      </ul> */}
      <MaterialsCarousel />
    </section>
  );
}

export default MaterialsSection;
