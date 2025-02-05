import React from "react";

import Image from "next/image";
import Footer from "@/components/Footer";
import ResultSection from "@/components/impact/ResultSection";
import ESGDeligenceSection from "@/components/impact/ESGDeligenceSection";
import HighlightsSection from "@/components/impact/HighlightsSection";
import { sanityFetch } from "@/sanity/client";
import { impactquery } from "@/sanity/groq";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";

export default async function page() {
  const data = await sanityFetch({
    query: impactquery,
    tags: ["our-impact"],
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-11 text-lg lg:mb-24 lg:text-4xl">{data.intro.text}</p>
      </section>
      <Image
        src={data.mainImage.url}
        width={2000}
        height={2000}
        alt="Main image of our impact of Tujikuze"
        className="mb-14 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
      <HighlightsSection data={data.highlightsSection} />
      <ResultSection data={data.resultsSection} />
      <ESGDeligenceSection data={data.esgSection} />
      <CaseStudiesSection data={data.casesSection} />
      <Footer />
    </>
  );
}
