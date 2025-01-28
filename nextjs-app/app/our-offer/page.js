import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

import imgLarge from "../../public/images/2.jpg";
import ItemsGridList from "@/components/our-offer/ItemsGridList";

import material1 from "../../public/images/cotton.png";
import OfferMaterials from "@/components/our-offer/OfferMaterials";
import TermsOfTrade from "@/components/our-offer/TermsOfTrade";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const ITEMS = [
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
  {
    img: material1,
    name: "John Clifford Burns",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
  },
];

export default function page() {
  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] px-4 lg:mb-48 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">
          Tujikuze began with a vision to connect Kenyan artisans with global
          markets while preserving traditional craftsmanship. Rooted in the
          meaning of “to grow together” in Kiswahili, our story is one of
          collaboration, sustainability, and empowerment. Partnering with
          visionary Kenyan organizations, we bring authentic, handcrafted
          products to the world.
        </p>
        <Image
          src={imgLarge}
          alt="man crafting"
          className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
        />
      </section>
      <OfferMaterials />
      <ItemsGridList title="Craftsmanship" items={ITEMS} />
      <ItemsGridList title="Materials" items={ITEMS} />

      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-8 mt-14 w-full object-cover object-center lg:mb-48 lg:mt-48"
      />

      <TermsOfTrade />

      <section>
        {/* similar to ListItem */}
        <div className="mx-auto mb-8 grid max-w-[1720px] grid-cols-[25fr_75fr] items-start justify-between gap-5 px-4 pb-7 pt-7 lg:mb-24 lg:gap-0">
          <Image
            src={imgLarge}
            alt="Our offer"
            className="h-[138px] w-[94px] object-cover lg:h-[300px] lg:w-[225px]"
          />
          <div className="flex items-start justify-between">
            <div className="flex max-w-[580px] flex-col text-4xl">
              <p className="text-xl lg:text-4xl">CASE STUDIES</p>
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
