import React from "react";
import DataList from "../DataList";

import Image from "next/image";

export default function HighlightsSection({ data }) {
  return (
    <section className="mx-auto max-w-[1720px] px-4">
      <ul className="mb-14 flex flex-col justify-end gap-[54px] lg:mb-48 lg:flex-row lg:px-12">
        {data.highlights.map((item, index) => (
          <li key={index} className="lg:basis-1/3 xl:basis-1/4">
            <p className="mb-5 text-2xl text-dark-600 lg:mb-6">{item.title}</p>
            <div className="flex flex-col gap-2 text-lg">
              {item.text.split("\n").map((part, i) => (
                <p key={i}>{part}</p>
              ))}
            </div>
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
