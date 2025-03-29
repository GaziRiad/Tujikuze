import Footer from "@/components/Footer";
import { myPortableTextComponents } from "@/lib/utils";
import { sanityFetch } from "@/sanity/client";
import { singlecasestudyquery } from "@/sanity/groq";
import { groq, PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";

// Dynamic metadata
export async function generateMetadata({ params: { slug } }) {
  const data = await sanityFetch({
    query: groq`*[_type == "case-study" && slug.current == $slug][0]{
      title,
      summary
    }`,
    qParams: { slug },
    tags: ["case-studies", "case-study"],
  });

  return {
    title: data?.title || "Tujikuze | Case Study",
    description: data?.summary || "Tujikuze | Case Study",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const caseStudies = await sanityFetch({
    query: groq`*[_type == "case-study"]{ slug }`,
    tags: ["case-studies", "case-study"],
  });

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug.current, // Use .current since slugs are stored as { current: "slug-value" }
  }));
}

export default async function page({ params: { slug } }) {
  const data = await sanityFetch({
    query: singlecasestudyquery,
    qParams: { slug },
    tags: ["case-studies", "case-study"],
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-10 text-3xl text-dark-500 lg:mb-4 lg:text-5xl">
          {data?.title}
        </p>
        {/* META Info */}
        <div className="mb-12 flex items-center justify-between border-b border-dark-600 pb-2 font-secondary text-sm text-dark-500 lg:mb-6 lg:pb-3 lg:text-lg">
          {data?.reportUrl ? (
            <Link
              href={data.reportUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-all duration-300 hover:text-dark-400"
            >
              Download Report
            </Link>
          ) : (
            <p className="cursor-pointer transition-all duration-300 hover:text-dark-400">
              No report available for download.
            </p>
          )}
          <div className="flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {data?.categories?.map((category, index) => (
                <li key={category.slug.current}>
                  <Link
                    href={`/case-studies?category=${category.slug.current}`}
                    className={`cursor-pointer transition-all duration-300 hover:text-dark-400`}
                  >
                    {category.title}
                  </Link>

                  <span className="hidden lg:inline">,</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/case-studies?date=${data?.publishedAt?.split("-")[0]}`}
              className={`cursor-pointer transition-all duration-300 hover:text-dark-400`}
            >
              {data?.publishedAt?.split("-")[0]}
            </Link>
          </div>
        </div>
      </section>
      <div className="">
        <PortableText
          value={data?.body}
          components={myPortableTextComponents}
        />
      </div>
      <div className="clear-both pt-14 lg:pt-48">
        <Footer />
      </div>
    </>
  );
}
