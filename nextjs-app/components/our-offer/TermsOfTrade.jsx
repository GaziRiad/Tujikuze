import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

import imgLarge from "../../public/images/2.jpg";

const infoData = [
  {
    title: "Production info",
    text: "Our case studies illustrate the transformative impact of bespoke collaborations on local artisans. By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved. Our case studies illustrate the transformative impact of bespoke collaborations on local artisans. By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved.",
  },
  {
    title: "Prices and MOQ",
    text: "Our case studies illustrate the transformative impact of bespoke collaborations on local artisans. By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved. Our case studies illustrate the transformative impact of bespoke collaborations on local artisans. By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved.",
  },
];

export default function TermsOfTrade() {
  return (
    <section className="mx-auto max-w-[1720px]">
      <SectionHeading title="Terms of Trade" />
      <div className="mb-8 mt-8 grid grid-cols-1 gap-5 px-4 lg:mb-24 lg:mt-24 lg:grid-cols-2 lg:gap-0">
        <div className="max-w-[648px]"></div>
        <ul className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
          {infoData.map((item, index) => (
            <li key={index} className="lg:basis-1/3 xl:basis-1/4">
              <p className="mb-6 text-2xl text-dark-600">{item.title}</p>
              <p className="text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-8 ml-auto aspect-square w-full object-cover object-center lg:mb-24 lg:w-1/2"
      />
      <div className="mb-24 grid grid-cols-1 gap-5 px-4 lg:mb-48 lg:grid-cols-2 lg:gap-0">
        <div className="max-w-[648px]"></div>
        <ul className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
          {infoData.map((item, index) => (
            <li key={index} className="lg:basis-1/3 xl:basis-1/4">
              <p className="mb-6 text-2xl text-dark-600">{item.title}</p>
              <p className="text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
