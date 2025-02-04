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

function MaterialsSection({ data }) {
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
    <section className="mx-auto mb-28 max-w-[1720px] px-4 lg:mb-48">
      <SectionHeading
        title={data.sectionHeading.title}
        label={data.sectionHeading?.link?.label}
        href={data.sectionHeading?.link?.linkUrl}
      />
      <h2 className="mb-11 max-w-[1320px] text-lg lg:mb-28 lg:text-4xl">
        {data.mainText}
      </h2>
      <div className="mb-48 flex flex-col items-start justify-between gap-14 lg:flex-row lg:gap-0">
        <ul className="flex flex-col gap-[6px]">
          {data.items.map((item, index) => (
            <li
              key={index}
              className="grid cursor-pointer grid-cols-[30fr_70fr] text-[#BABABA] transition-all hover:text-[#1A1A1A]"
              onMouseEnter={() => handleHover(item.itemImage.url)}
              onMouseLeave={() => handleHover(img1)}
            >
              <p className="font-secondary text-sm">{item.name}</p>
              <p className="text-sm lg:text-lg">{item.description}</p>
            </li>
          ))}
        </ul>
        <div
          className={`relative h-[320px] w-full overflow-hidden lg:h-[520px] lg:w-[560px] 2xl:h-[620px]`}
        >
          <Image
            width={1200}
            height={1200}
            src={hoveredImage}
            alt="Hovered craftsmanship"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <MaterialsCarousel items={data.materials} />
    </section>
  );
}

export default MaterialsSection;
