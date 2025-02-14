import React from "react";

import ListItem from "@/components/ListItem";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import { sanityFetch } from "@/sanity/client";
import { casestudiespagequery } from "@/sanity/groq";
import { groq } from "next-sanity";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "case-studies-page"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["case-studies", "case-study"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | Case Studies",
    description: data?.seo?.description || "Tujikuze | Case Studies",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export default async function Page({ searchParams }) {
  const category = searchParams?.category || null;
  const date = searchParams?.date || null;

  const data = await sanityFetch({
    query: casestudiespagequery,
    tags: ["case-studies", "case-study"],
    qParams: { category, date },
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-28 text-lg lg:mb-48 lg:text-4xl">{data.text}</p>
      </section>
      <Filters
        dates={data?.dates}
        categories={data.categories}
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
