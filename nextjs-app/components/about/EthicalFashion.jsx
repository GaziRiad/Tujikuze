"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";

import imgLarge from "../../public/images/2.jpg";

export default function EthicalFashion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-[1720px] px-4">
        <SectionHeading
          title="Ethical Fashion Initiative"
          type="tab"
          state={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <>
            <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">
              Tujikuze is proud to be part of a UN initiative aimed at promoting
              sustainable development through ethical fashion. By connecting
              Kenyan artisan groups with global brands, the project empowers
              communities, supports gender equality, and drives economic growth.
              Together with partners like Africa Collect Textiles, Savio Youth
              Enterprise, Virtuous, and Satubo, we create high-quality products
              that reflect Kenya’s rich cultural heritage.
            </p>

            <Image
              src={imgLarge}
              alt="man crafting"
              className="mb-14 ml-auto aspect-square h-[418px] max-w-[841px] object-cover object-center lg:mb-48 lg:h-[859px]"
            />
          </>
        )}
      </div>
      {isOpen && (
        <Image
          src={imgLarge}
          alt="man crafting"
          className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[920px]"
        />
      )}
    </section>
  );
}
