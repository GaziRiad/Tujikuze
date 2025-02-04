import React from "react";

import material1 from "../../public/images/cotton.png";
import ListItem from "@/components/ListItem";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";

const CASES = [
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
];

export default function Page() {
  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-28 text-lg lg:mb-48 lg:text-4xl">
          Our case studies highlight the impactful collaborations between
          Tujikuze and global brands, showcasing the journey from concept to
          creation. Each project reflects our dedication to ethical
          craftsmanship, sustainable practices, and empowering Kenyan artisan
          communities while delivering high-quality, bespoke products.
        </p>
      </section>
      {/* <Filters /> */}

      <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
        <ul className="mt-8 flex flex-col divide-y divide-[#1A1A1A]/20 lg:mt-24">
          {CASES.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
