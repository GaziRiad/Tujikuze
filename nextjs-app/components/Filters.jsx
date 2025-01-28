"use client";

import React from "react";

import img1 from "../public/images/visuals.png";
import img2 from "../public/images/visuals2.png";
import Link from "next/link";

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

export default function Filters() {
  return (
    <div className="mx-auto mb-8 mt-28 max-w-[1720px] px-4 lg:mb-24 lg:mt-36">
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
      <p className="list-none border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase lg:hidden">
        Filters
      </p>
    </div>
  );
}
