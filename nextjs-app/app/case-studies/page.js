import Link from "next/link";
import React from "react";

import material1 from "../../public/images/cotton.png";
import ListItem from "@/components/ListItem";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Arts & Culture",
  "Design",
  "Fashion",
  "Films",
  "Interiors",
  "Travel",
];

const dates = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];

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
      <section className="mx-auto mt-56 max-w-[1720px] px-4">
        <p className="mb-28 text-lg lg:mb-48 lg:text-4xl">
          Our case studies highlight the impactful collaborations between
          Tujikuze and global brands, showcasing the journey from concept to
          creation. Each project reflects our dedication to ethical
          craftsmanship, sustainable practices, and empowering Kenyan artisan
          communities while delivering high-quality, bespoke products.
        </p>
        <ul className="mb-3 flex items-center justify-end gap-1 border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase">
          {categories.map((category, index) => (
            <li key={index} className="inline">
              <Link href="/">{category}</Link>
              {index < categories.length - 1 && <span>, </span>}
            </li>
          ))}
        </ul>
        <ul className="mb-24 flex items-center justify-end gap-1 border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase">
          {dates.map((date, index) => (
            <li key={index} className="inline">
              <Link href="/">{date}</Link>
              {index < categories.length - 1 && <span>, </span>}
            </li>
          ))}
        </ul>
      </section>

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
