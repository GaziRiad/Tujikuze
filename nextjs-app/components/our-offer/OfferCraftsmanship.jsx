import TabSection from "@/lib/hooks/TabSection";
import React from "react";

import material1 from "../../public/images/cotton.png";
import Image from "next/image";

const CRAFTS = [
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

export default function OfferCraftsmanship() {
  return (
    <TabSection title="Craftsmanship">
      <div className="mx-auto mb-14 mt-8 w-full max-w-[1720px] px-4 lg:mb-48 lg:mt-24">
        <ul className="grid grid-cols-1 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-y-24">
          {CRAFTS.map((item, index) => (
            <li key={index} className="text-dark-600x">
              <div className="flex gap-5 lg:flex-col">
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt="Material image"
                  className="mb-4 h-[138px] object-cover lg:h-[601px]"
                />
                <div>
                  <p className="mb-2 font-secondary text-xl sm:text-2xl">
                    {item.name}
                  </p>
                  <p className="max-w-80 text-sm sm:text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TabSection>
  );
}
