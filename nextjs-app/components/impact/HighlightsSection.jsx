import React from "react";
import DataList from "../DataList";

import Image from "next/image";

export default function HighlightsSection({ data }) {
  return (
    <section className="mx-auto max-w-[1720px] px-4">
      <ul className="mb-14 flex flex-col justify-end gap-12 lg:mb-48 lg:flex-row lg:px-12">
        {data.highlights.map((item, index) => (
          <li key={index} className="lg:basis-1/3 xl:basis-1/4">
            <p className="mb-6 text-2xl text-dark-600">{item.title}</p>
            <p className="text-lg">{item.text}</p>
          </li>
        ))}
      </ul>
      <DataList items={data.keyStatsTable} />
      <Image
        width={1600}
        height={1600}
        src={data?.highlightImage?.url || "/images/placeholder.jpg"}
        alt={data?.highlightImage?.alt || "Tujikuze Image"}
        className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
      />
    </section>
  );
}
