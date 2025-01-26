"use client";

import React, { useState } from "react";
import SectionHeading from "../SectionHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import material1 from "../../public/images/cotton.png";
import material2 from "../../public/images/fibers.png";
import material3 from "../../public/images/metal.png";

const TEAM = [
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

export default function OurTeam() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-[1720px] px-4">
        <SectionHeading
          title="Our Team"
          type="tab"
          state={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
              offset: 10,
            }}
            className="mx-auto mb-14 mt-8 w-full max-w-[1720px] lg:mb-48 lg:mt-24"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {TEAM.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[85%] pl-2 sm:basis-[90%] md:basis-2/4 md:pl-4 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt="Material image"
                      className="mb-4 h-[300px] w-full object-cover lg:h-[869px]"
                    />
                    <p className="mb-2 font-secondary text-xl sm:text-2xl">
                      {item.name}
                    </p>
                    <p className="max-w-80 text-sm sm:text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
}
