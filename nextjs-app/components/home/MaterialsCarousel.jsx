import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import material1 from "../../public/images/cotton.png";
import material2 from "../../public/images/fibers.png";
import material3 from "../../public/images/metal.png";
import material4 from "../../public/images/textiles.png";

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

export default function MaterialsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        offset: 10,
      }}
      className="mx-auto w-full max-w-[1720px]"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {materials.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[85%] pl-2 sm:basis-[90%] md:basis-2/4 md:pl-4 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <Image
                src={item.img || "/placeholder.svg"}
                alt="Material image"
                className="mb-4 h-[430px] w-full object-cover lg:h-[600px]"
              />
              <p className="mb-2 font-secondary text-xl sm:text-2xl">
                {item.title}
              </p>
              <p className="max-w-80 text-sm sm:text-base md:text-lg">
                {item.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
