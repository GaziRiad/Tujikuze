import EthicalFashion from "@/components/about/EthicalFashion";
import OurLocations from "@/components/about/OurLocations";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { sanityFetch } from "@/sanity/client";
import { aboutquery } from "@/sanity/groq";
import { groq } from "next-sanity";
import React from "react";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "about"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["about-us"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | About us",
    description: data?.seo?.description || "Tujikuze | About us",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export default async function page() {
  const data = await sanityFetch({
    query: aboutquery,
    tags: ["about-us", "case-studies"],
  });

  if (!data) return null;
  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-48 lg:text-4xl">{data.intro.text}</p>
      </section>
      <OurMission data={data.ourMission} />
      <OurLocations data={data.locationSection} />
      <OurTeam data={data.teamSection} />
      <EthicalFashion data={data.ethicalFashionSection} />
      <CaseStudiesSection data={data.casesSection} />

      <Footer />
    </>
  );
}
