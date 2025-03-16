"use client";

import Image from "next/image";
import React from "react";

export default function LargeImageModule({ data }) {
  return (
    <Image
      width={1600}
      height={1600}
      src={data.image.url || "/images/placeholder.jpg"}
      alt={data.alt || "Tujikuze image"}
      className="mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
    />
  );
}
