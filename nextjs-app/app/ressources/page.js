import Link from "next/link";
import React from "react";

import img1 from "../../public/images/visuals.png";
import img2 from "../../public/images/visuals2.png";
import mainImg from "../../public/images/gradient-impact.png";

import Image from "next/image";
import Footer from "@/components/Footer";
import { GoArrowRight } from "react-icons/go";
import SectionHeading from "@/components/SectionHeading";
import Filters from "@/components/Filters";

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
      <Filters />
      <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
        <ul className="grid grid-cols-1 gap-x-3 gap-y-4 divide-y divide-dark-600/20 text-dark-600 lg:grid-cols-2 lg:gap-y-24 lg:divide-y-0 xl:grid-cols-3">
          {ARTICLES.map((post, index) => (
            <li
              key={index}
              className="flex items-start gap-4 pt-4 lg:flex-col lg:pt-0"
            >
              <Image
                src={post.img}
                className="lg::h-[870px] w-1/2 object-cover lg:mb-3 lg:w-full"
              />
              <div>
                <ul className="mb-4 flex items-center gap-3 lg:mb-3">
                  <li>TAG 1</li>
                  <li>TAG 2</li>
                </ul>
                <p className="mb-4 max-w-96 text-lg lg:mb-3 lg:text-2xl">
                  {post.title}
                </p>
                <p className="text-sm lg:text-lg">{post.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/*  */}
      <section>
        <SectionHeading title="Discover our Work" href="/" />
        {/* similar to ListItem */}
        <div className="mx-auto mb-8 grid max-w-[1720px] grid-cols-[25fr_75fr] items-start justify-between gap-5 px-4 pb-7 pt-7 lg:mb-24 lg:gap-0">
          <Image
            src={mainImg}
            alt="Our offer"
            className="h-[138px] w-[94px] object-cover lg:h-[300px] lg:w-[225px]"
          />
          <div className="flex items-start justify-between">
            <div className="flex max-w-[580px] flex-col text-4xl">
              <p className="text-xl lg:text-4xl">OUR OFFER</p>
              <p className="mb-4 text-lg lg:mb-7 lg:text-4xl">
                Supporting Communities. Driving Sustainability.
              </p>
              <div className="group">
                <Link
                  href="/"
                  className="mb-5 flex w-fit items-center gap-1 font-secondary text-sm text-[#1A1A1A] transition-all hover:text-[#726f66]"
                >
                  <span>LEARN MORE</span>
                  <GoArrowRight />
                </Link>
                <p className="hidden max-w-md text-lg text-[#726F66] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 lg:block">
                  Our case studies illustrate the transformative impact of
                  bespoke collaborations on local artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
