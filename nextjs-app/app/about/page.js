import EthicalFashion from "@/components/about/EthicalFashion";
import OurLocations from "@/components/about/OurLocations";
import OurMission from "@/components/about/OurMission";
import OurOffer from "@/components/about/OurOffer";
import OurTeam from "@/components/about/OurTeam";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/client";
import { aboutquery } from "@/sanity/groq";
import React from "react";

export default async function page() {
  const data = await sanityFetch({
    query: aboutquery,
    tags: ["about-us"],
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
      {/* same as ListItem */}
      <OurOffer />

      <Footer />
    </>
  );
}
