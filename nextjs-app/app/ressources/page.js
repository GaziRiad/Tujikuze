import React from "react";

import Image from "next/image";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import { sanityFetch } from "@/sanity/client";
import { ressourcespagequery } from "@/sanity/groq";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { groq } from "next-sanity";
import Link from "next/link";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "ressourcesPage"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["ressources", "post"],
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
    tags: ["ressources", "post"],
    qParams: { category, date },
  });

  if (!data) return null;

  return (
    <>
      <Filters dates={data?.dates} categories={data?.categories} />
      <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
        <ul className="grid grid-cols-1 gap-x-3 gap-y-4 divide-y divide-dark-600/20 text-dark-600 lg:grid-cols-2 lg:gap-y-24 lg:divide-y-0 xl:grid-cols-3">
          {data?.posts?.map((article, index) => (
            <li
              key={index}
              className="group relative flex items-start gap-4 pt-4 lg:flex-col lg:pt-0"
            >
              {/* Shared Hover Group */}
              <div className="group relative">
                <Link
                  href={`/ressources/${article.slug.current}`}
                  className="relative block"
                >
                  <Image
                    width={1200}
                    height={1200}
                    src={
                      article.mainImage.imageUrl || "/images/placeholder.jpg"
                    }
                    alt={article.mainImage.alt || "Tujikuze Image"}
                    className="mb-3 h-[431px] w-full object-cover transition-all duration-300 lg:h-[520px] 2xl:h-[720px]"
                  />
                  {/* Dark overlay effect on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                </Link>

                <ul className="mb-3 flex items-center gap-3 font-secondary text-sm uppercase">
                  {article.categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        href={`/ressources?category=${cat.slug.current}`}
                        className="transition-all hover:text-dark-400"
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Title inside the same hover group */}
                <Link
                  href={`/ressources/${article.slug.current}`}
                  className="max-w-96 transition-all hover:text-dark-400 group-hover:text-dark-400"
                >
                  <p className="mb-3 text-2xl">{article.title}</p>
                  <p className="max-w-96 text-lg">{article.summary}</p>
                </Link>
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
