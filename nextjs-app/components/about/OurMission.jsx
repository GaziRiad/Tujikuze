"use client";

import Image from "next/image";
import React from "react";

import imgLarge from "../../public/images/2.jpg";
import DataList from "../DataList";
import TabSection from "@/lib/hooks/TabSection";

const DATALIST = [
  {
    title: "Production entities",
    data: "5",
  },
  {
    title: "Artisan Communities",
    data: "100",
  },
  {
    title: "Network of Artisans",
    data: "10",
  },
];

export default function OurMission() {
  return (
    <TabSection title="Our Mission">
      <div className="mx-auto max-w-[1720px] px-4">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">
          Tujikuze’s mission is to empower Kenyan artisan communities by
          connecting them with global markets seeking authentic, sustainable
          products. By fostering ethical production and preserving traditional
          craftsmanship, we create opportunities for growth and meaningful
          impact. Tujikuze’s mission is to empower Kenyan artisan communities by
          connecting them with global markets seeking authentic, sustainable
          products. By fostering ethical production and preserving traditional
          craftsmanship, we create opportunities for growth and meaningful
          impact.
        </p>
        <DataList items={DATALIST} />
      </div>
      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
    </TabSection>
  );
}
