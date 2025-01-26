import React from "react";
import DataList from "../DataList";

import imgLarge from "../../public/images/2.jpg";
import Image from "next/image";

const infoData = [
  {
    title: "Sustainability",
    text: "Our case studies illustrate the transformative impact of bespoke collaborations on local artisans.By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved. Our case studies illustrate the transformative impact of bespoke collaborations on local artisans. By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved.",
  },
  {
    title: "Communities",
    text: "Our case studies illustrate the transformative impact of bespoke collaborations on local artisans.By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved. Our case studies illustrate the transformative impact of bespoke collaborations on local artisans. By partnering with Tujikuze, businesses not only gain access to authentic craftsmanship but also contribute to the economic empowerment of the communities involved.",
  },
];

const DATALIST = [
  {
    title: "Number of Communities",
    data: "105,000",
  },
  {
    title: "Artisan groups",
    data: "105,000",
  },
  {
    title: "Other Impact data",
    data: "105,000",
  },
];

export default function InfoSection() {
  return (
    <section className="mx-auto max-w-[1720px] px-4">
      <ul className="mb-14 flex flex-col justify-end gap-12 lg:mb-48 lg:flex-row lg:px-12">
        {infoData.map((item, index) => (
          <li key={index} className="lg:basis-1/3 xl:basis-1/4">
            <p className="mb-6 text-2xl text-dark-600">{item.title}</p>
            <p className="text-lg">{item.text}</p>
          </li>
        ))}
      </ul>
      <DataList items={DATALIST} />
      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-14 ml-auto aspect-square h-[418px] max-w-[841px] object-cover object-center lg:mb-48 lg:h-[859px]"
      />
    </section>
  );
}
