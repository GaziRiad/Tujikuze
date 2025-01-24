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

const materials = [
  {
    title: "Natural Fibers",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
    img: material2,
  },
  {
    title: "Cotton",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
    img: material1,
  },
  {
    title: "Upcycled Textiles",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
    img: material3,
  },
  {
    title: "Metal",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
    img: material4,
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
    <section className="mx-auto mb-48 max-w-[1720px]">
      <SectionHeading title="Materials & Craftsmanships" />
      <h2 className="mb-28 max-w-[1320px] text-4xl">
        We use sustainable, locally sourced materials to create high-quality
        pieces that honor Kenya’s craftsmanship and cultural heritage.
      </h2>
      <div className="mb-48 flex items-start justify-between">
        <ul className="flex flex-col gap-[6px]">
          {craftsmanships.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center justify-between gap-28 text-[#BABABA] transition-all hover:text-[#1A1A1A]"
              onMouseEnter={() => handleHover(item.img)}
              onMouseLeave={() => handleHover(img1)}
            >
              <p className="font-secondary text-sm">{item.title}</p>
              <p className="text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className={`relative h-[620px] w-[560px] overflow-hidden`}>
          <Image
            src={hoveredImage}
            alt="Hovered craftsmanship"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-x-3">
        {materials.map((item, index) => (
          <li key={index} className="text-[#1A1A1A]">
            <Image
              src={item.img}
              alt="Material image"
              className="mb-7 h-[600px] object-cover"
            />
            <p className="font-secondary mb-3 text-2xl">{item.title}</p>
            <p className="max-w-80 text-lg">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MaterialsSection;
