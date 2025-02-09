import Footer from "@/components/Footer";
import { myPortableTextComponents } from "@/lib/utils";
import { sanityFetch } from "@/sanity/client";
import { singlearticlequery } from "@/sanity/groq";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";

export default async function page({ params: { slug } }) {
  const post = await sanityFetch({
    query: singlearticlequery,
    qParams: { slug },
    tags: ["post", "ressources"],
  });

  if (!post) return null;

  console.log(post.body);
  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-10 text-3xl text-dark-500 lg:mb-4 lg:text-5xl">
          {post.title}
        </p>
        {/* META Info */}
        <div className="mb-12 flex items-center gap-1 border-b border-dark-600 pb-2 font-secondary text-sm text-dark-500 lg:mb-6 lg:pb-5 lg:text-[22px]">
          <ul>
            {post?.categories?.map((category, index) => (
              <li key={category.slug.current}>
                <Link
                  href={`/ressources?category=${category.slug.current}`}
                  className={`cursor-pointer transition-all duration-300 hover:text-dark-400`}
                >
                  {category.title}
                </Link>

                <span className="hidden lg:inline">,</span>
              </li>
            ))}
          </ul>
          <p>{post?.publishedAt?.split("-")[0]}</p>
        </div>
      </section>
      <div className="">
        <PortableText value={post.body} components={myPortableTextComponents} />
      </div>
      <div className="clear-both pt-14 lg:pt-48">
        <Footer />
      </div>
    </>
  );
}
