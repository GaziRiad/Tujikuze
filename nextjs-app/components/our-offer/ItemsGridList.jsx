import TabSection from "@/lib/hooks/TabSection";
import React from "react";

import Image from "next/image";

export default function ItemsGridList({ title, items }) {
  return (
    <TabSection title={title}>
      <div className="mx-auto mb-14 mt-8 w-full max-w-[1720px] px-4 lg:mb-48 lg:mt-24">
        <ul className="grid grid-cols-1 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-y-24">
          {items.map((item, index) => (
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
