"use client";

import { useState } from "react";
import Image from "next/image";

export default function InteractiveModule({ data }) {
  const [hoveredImage, setHoveredImage] = useState(data.items[0].image.url);
  const [isFading, setIsFading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (img, index) => {
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      setHoveredImage(img); // Change the image
      setIsFading(false); // Start fade-in
    }, 150); // Match the transition duration
    setSelectedItem(index); // Set the selected item
  };

  return (
    <section>
      <div className="mx-auto mb-28 max-w-[1720px] px-4 lg:mb-48">
        <div className="flex flex-col items-start justify-between gap-14 lg:flex-row lg:gap-0">
          <ul className="grid grid-cols-1 gap-x-7 gap-y-[10px] lg:grid-cols-2 lg:gap-y-12">
            {data?.items?.map((item, index) => (
              <li
                key={index}
                className={`flex cursor-pointer flex-col text-[#BABABA] transition-all ${
                  selectedItem === index
                    ? "text-dark-600"
                    : "hover:text-dark-600"
                }`}
                onClick={() => handleClick(item?.image?.url, index)}
              >
                <p className="font-secondary text-sm">{item?.name}</p>
                <p className="text-sm lg:max-w-md lg:text-lg">
                  {item?.description}
                </p>
              </li>
            ))}
          </ul>
          <div
            className={`relative h-[320px] w-full overflow-hidden lg:h-[520px] lg:w-[560px] 2xl:h-[620px]`}
          >
            <Image
              width={1200}
              height={1200}
              src={hoveredImage || "/images/placeholder.jpg"}
              alt={data?.items[selectedItem]?.image.alt || "Tujikuze image"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
