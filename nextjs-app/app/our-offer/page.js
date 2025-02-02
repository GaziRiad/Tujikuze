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
import { sanityFetch } from "@/sanity/client";
import { ourofferquery } from "@/sanity/groq";

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

export default async function page() {
  const data = await sanityFetch({
    query: ourofferquery,
    tags: ["our-offer"],
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] px-4 lg:mb-48 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">{data.intro.text}</p>
        <Image
          width={1200}
          height={1200}
          src={data.intro.image.imageUrl}
          alt={data.intro.image.alt}
          className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
        />
      </section>
      <OfferMaterials data={data.materialsAndCraftsmanshipSection} />
      <ItemsGridList
        title={data.craftsmanshipSection.heading}
        items={data.craftsmanshipSection.items}
      />
      <ItemsGridList
        title={data.materialsSection.heading}
        items={data.materialsSection.items}
      />

      <Image
        width={1600}
        height={1600}
        src={data.mainImage.imageUrl}
        alt={data.mainImage.alt}
        className="mb-8 mt-14 w-full object-cover object-center lg:mb-48 lg:mt-48"
      />

      <TermsOfTrade data={data.termsSection} />

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
