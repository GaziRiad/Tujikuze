import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

export default function ESGDeligenceSection({ data }) {
  return (
    <section>
      <SectionHeading
        title={data.sectionHeading.title}
        label={data.sectionHeading?.link?.label}
        href={data.sectionHeading?.link?.linkUrl}
      />
      <div className="mx-auto max-w-[1720px] px-4">
        <div className="mb-11 grid grid-cols-1 gap-5 lg:mb-24 lg:grid-cols-2 lg:gap-0">
          <p className="max-w-[648px] text-lg text-dark-600 lg:text-4xl">
            {data.mainText}
          </p>
          <div className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
            {data.textContent.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <Image
        width={1600}
        height={1600}
        src={data?.esgImage?.url || "/images/placeholder.jpg"}
        alt={data?.esgImage?.alt || "Tujikuze Image"}
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-24 lg:h-[620px] 2xl:h-[920px]"
      />
    </section>
  );
}
