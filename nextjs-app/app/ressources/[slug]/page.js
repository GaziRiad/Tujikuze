import Footer from "@/components/Footer";
import { myPortableTextComponents } from "@/lib/utils";
import { sanityFetch } from "@/sanity/client";
import { singlearticlequery } from "@/sanity/groq";
import { groq, PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";

// Dynamic metadata
export async function generateMetadata({ params: { slug } }) {
  const data = await sanityFetch({
    query: groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      summary
    }`,
    qParams: { slug },
    tags: ["ressources", "post"],
  });

  return {
    title: data?.title || "Tujikuze | POST",
    description: data?.summary || "Tujikuze | POST",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const posts = await sanityFetch({
    query: groq`*[_type == "post"]{ slug }`,
    tags: ["ressources", "post"],
  });

  return posts.map((post) => ({
    slug: post.slug.current, // Use .current since slugs are stored as { current: "slug-value" }
  }));
}

export default async function page({ params: { slug } }) {
  const post = await sanityFetch({
    query: singlearticlequery,
    qParams: { slug },
    tags: ["ressources", "post"],
  });

  if (!post) return null;

  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-10 text-3xl text-dark-500 lg:mb-4 lg:text-5xl">
          {post?.title}
        </p>
        {/* META Info */}
        <div className="mb-12 flex items-center gap-1 border-b border-dark-600 pb-2 font-secondary text-sm text-dark-500 lg:mb-6 lg:pb-3 lg:text-lg">
          <ul className="flex items-center gap-1">
            {post?.categories?.map((category, index) => (
              <li key={category?.slug?.current}>
                <Link
                  href={`/ressources?category=${category?.slug?.current}`}
                  className={`cursor-pointer transition-all duration-300 hover:text-dark-400`}
                >
                  {category?.title}
                </Link>

                <span className="hidden lg:inline">,</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/ressources?date=${post?.publishedAt?.split("-")[0]}`}
            className={`cursor-pointer transition-all duration-300 hover:text-dark-400`}
          >
            {post?.publishedAt?.split("-")[0]}
          </Link>
        </div>
      </section>
      <div className="lg:flex lg:items-start lg:gap-10">
        <PortableText
          value={post?.body}
          components={myPortableTextComponents}
        />
      </div>
      <div className="clear-both pt-14 lg:pt-48">
        <Footer />
      </div>
    </>
  );
}
