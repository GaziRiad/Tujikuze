import React from "react";
import DataList from "../DataList";
import SectionHeading from "../SectionHeading";

const DATALIST = [
  {
    title: "Key chains",
    data: "105,000",
  },
  {
    title: "Key chains",
    data: "105,000",
  },
  {
    title: "Key chains",
    data: "105,000",
  },
];

export default function ResultSection() {
  return (
    <section className="mx-auto max-w-[1720px] px-4">
      <SectionHeading title="Results" />
      <p className="mb-11 text-lg lg:mb-24 lg:text-4xl">
        Tujikuze’s impact is measurable through the growth and empowerment of
        artisan communities, with thousands trained and employed in sustainable
        production. Our collaborations result in high-quality, ethically made
        products that reach global markets, creating lasting economic
        opportunities and fostering skill development.
      </p>
      <DataList items={DATALIST} />
    </section>
  );
}
