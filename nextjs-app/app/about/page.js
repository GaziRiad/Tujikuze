import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";

import imgLarge from "../../public/images/2.jpg";

export default function page() {
  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-48 lg:text-4xl">
          Tujikuze began with a vision to connect Kenyan artisans with global
          markets while preserving traditional craftsmanship. Rooted in the
          meaning of “to grow together” in Kiswahili, our story is one of
          collaboration, sustainability, and empowerment. Partnering with
          visionary Kenyan organizations, we bring authentic, handcrafted
          products to the world.
        </p>
      </section>

      <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
        <SectionHeading title="Our Mission" type="tab" />
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
        <ul className="mb-14 flex flex-col divide-y divide-[#1A1A1A]/20 text-lg lg:mb-48 lg:text-4xl">
          <li className="grid grid-cols-2 py-6 lg:grid-cols-[30fr_70fr]">
            <span>5</span>
            <span>Production entities</span>
          </li>
          <li className="grid grid-cols-2 py-6 lg:grid-cols-[30fr_70fr]">
            <span>100</span>
            <span>Artisan Communities</span>
          </li>
          <li className="grid grid-cols-2 py-6 lg:grid-cols-[30fr_70fr]">
            <span>10</span>
            <span>Network of Artisans</span>
          </li>
        </ul>
      </section>
      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[920px]"
      />
    </>
  );
}
