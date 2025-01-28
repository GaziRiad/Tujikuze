import Link from "next/link";
import React from "react";

import img1 from "../../public/images/visuals.png";
import img2 from "../../public/images/visuals2.png";
import Image from "next/image";
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

const ARTICLES = [
  {
    img: img1,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
  {
    img: img2,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
  {
    img: img2,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
  {
    img: img2,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
  {
    img: img2,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
  {
    img: img1,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
];

export default function page() {
  return (
    <>
      <div className="mx-auto mb-8 mt-14 max-w-[1720px] px-4 lg:mb-24 lg:mt-36">
        <ul className="mb-3 hidden items-center justify-end gap-1 border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase lg:flex">
          {categories.map((category, index) => (
            <li key={index} className="inline">
              <Link href="/">{category}</Link>
              {index < categories.length - 1 && <span>, </span>}
            </li>
          ))}
        </ul>
        <ul className="mb-24 hidden items-center justify-end gap-1 border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase lg:flex">
          {dates.map((date, index) => (
            <li key={index} className="inline">
              <Link href="/">{date}</Link>
              {index < categories.length - 1 && <span>, </span>}
            </li>
          ))}
        </ul>
      </div>
      <section className="mx-auto mb-14 mt-14 max-w-[1720px] px-4 lg:mb-48 lg:mt-36">
        <ul className="grid grid-cols-3 gap-x-3 gap-y-24 text-dark-600">
          {ARTICLES.map((post, index) => (
            <li key={index}>
              <Image src={post.img} className="mb-3 h-[870px] object-cover" />
              <ul className="mb-3 flex items-center gap-3">
                <li>TAG 1</li>
                <li>TAG 2</li>
              </ul>
              <p className="mb-3 max-w-96 text-2xl">{post.title}</p>
              <p className="text-lg">{post.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}
