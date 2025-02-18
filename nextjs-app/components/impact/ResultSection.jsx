import React from "react";
import DataList from "../DataList";
import SectionHeading from "../SectionHeading";

export default function ResultSection({ data }) {
  return (
    <section>
      <SectionHeading
        title={data.sectionHeading.title}
        label={data.sectionHeading?.link?.label}
        href={data.sectionHeading?.link?.linkUrl}
      />
      <div className="mx-auto max-w-[1720px] px-4">
        <p className="mb-11 text-lg lg:mb-24 lg:text-4xl">{data.text}</p>
        <DataList items={data.keyStatsTable} />
      </div>
    </section>
  );
}
