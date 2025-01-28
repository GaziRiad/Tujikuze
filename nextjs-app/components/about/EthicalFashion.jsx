"use client";

import Image from "next/image";

import imgLarge from "../../public/images/2.jpg";
import TabSection from "@/lib/hooks/TabSection";

export default function EthicalFashion() {
  return (
    <TabSection title="Ethical Fashion Initiative">
      <div className="mx-auto max-w-[1720px] px-4">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">
          Tujikuze is proud to be part of a UN initiative aimed at promoting
          sustainable development through ethical fashion. By connecting Kenyan
          artisan groups with global brands, the project empowers communities,
          supports gender equality, and drives economic growth. Together with
          partners like Africa Collect Textiles, Savio Youth Enterprise,
          Virtuous, and Satubo, we create high-quality products that reflect
          Kenya’s rich cultural heritage.
        </p>

        <Image
          src={imgLarge}
          alt="man crafting"
          className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
        />
      </div>
      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
    </TabSection>
  );
}
