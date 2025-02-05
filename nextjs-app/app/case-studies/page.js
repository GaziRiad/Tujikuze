import React from "react";

import ListItem from "@/components/ListItem";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import { sanityFetch } from "@/sanity/client";
import { allcasestudiesquery, allCategories } from "@/sanity/groq";

export default async function Page({ searchParams }) {
  const category = searchParams?.category || null;
  const date = searchParams?.date || null;

  const data = await sanityFetch({
    query: allcasestudiesquery,
    tags: ["case-studies"],
    qParams: { category, date },
  });

  const categories = await sanityFetch({
    query: allCategories,
    tags: ["categories", "case-studies"],
  });

  if (!data) return null;

  console.log(data);

  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-28 text-lg lg:mb-48 lg:text-4xl">
          Our case studies highlight the impactful collaborations between
          Tujikuze and global brands, showcasing the journey from concept to
          creation. Each project reflects our dedication to ethical
          craftsmanship, sustainable practices, and empowering Kenyan artisan
          communities while delivering high-quality, bespoke products.
        </p>
      </section>
      <Filters
        dates={data?.dates}
        categories={categories}
        page="case-studies"
      />

      <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
        <ul className="mt-8 flex flex-col divide-y divide-[#1A1A1A]/20 lg:mt-24">
          {data.posts.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
