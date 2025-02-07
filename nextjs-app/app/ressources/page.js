import React from "react";

import Image from "next/image";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import { sanityFetch } from "@/sanity/client";
import { ressourcespagequery } from "@/sanity/groq";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import { groq } from "next-sanity";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "ressourcesPage"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["ressources"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | Ressources",
    description: data?.seo?.description || "Tujikuze | Ressources",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export default async function page({ searchParams }) {
  const category = searchParams?.category || null;
  const date = searchParams?.date || null;

  const data = await sanityFetch({
    query: ressourcespagequery,
    tags: ["ressources"],
    qParams: { category, date },
  });

  if (!data) return null;

  return (
    <>
      <Filters dates={data?.dates} categories={data?.categories} />
      <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
        <ul className="grid grid-cols-1 gap-x-3 gap-y-4 divide-y divide-dark-600/20 text-dark-600 lg:grid-cols-2 lg:gap-y-24 lg:divide-y-0 xl:grid-cols-3">
          {data?.posts?.map((post, index) => (
            <li
              key={index}
              className="flex items-start gap-4 pt-4 lg:flex-col lg:pt-0"
            >
              <Image
                width={1200}
                height={1200}
                src={post.mainImage.imageUrl}
                alt={post.mainImage.alt}
                className="h-[180px] max-w-[140px] object-cover lg:mb-3 lg:h-[870px] lg:max-w-full"
              />
              <div>
                <ul className="mb-4 flex items-center gap-3 lg:mb-3">
                  {post.categories?.map((category, index) => (
                    <li key={index}>{category.title}</li>
                  ))}
                </ul>
                <p className="mb-4 max-w-96 text-lg lg:mb-3 lg:text-2xl">
                  {post.title}
                </p>
                <p className="text-sm lg:text-lg">{post.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <CaseStudiesSection data={data.casesSection} />

      <Footer />
    </>
  );
}
