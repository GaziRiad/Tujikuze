"use client";

import Image from "next/image";
import React from "react";

export default function MediaModule({ data }) {
  // Define styles based on selected ratio
  const imageRatio = data?.imageRatio || "default"; // Default if not set
  const imageClasses = {
    "16:9":
      "mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]", // Full size
    "1:1":
      "mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2", // Half size (square, centered)
    default:
      "mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]", // Default full width
  };
  console.log(imageRatio);

  return (
    <Image
      width={1600}
      height={1600}
      src={data?.image?.url || "/images/placeholder.jpg"}
      alt={data?.alt || "Tujikuze image"}
      className={`${imageClasses[imageRatio]}`}
    />
  );
}
