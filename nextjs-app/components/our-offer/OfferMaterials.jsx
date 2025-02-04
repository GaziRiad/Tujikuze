import React from "react";
import SectionHeading from "../SectionHeading";

export default function OfferMaterials({ data }) {
  return (
    <section>
      <SectionHeading
        title={data.sectionHeading.title}
        label={data.sectionHeading?.link?.label}
        href={data.sectionHeading?.link?.linkUrl}
      />
      <div className="mx-auto mb-11 grid max-w-[1720px] grid-cols-1 gap-5 px-4 lg:mb-24 lg:grid-cols-2 lg:gap-0">
        <p className="max-w-[648px] text-lg text-dark-600 lg:text-4xl">
          {data.mainText}
        </p>
        <div className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
          {data.textContent.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
