import { sanityFetch } from "@/sanity/client";
import { singlearticlequery } from "@/sanity/groq";
import { PortableText } from "next-sanity";
import React from "react";

export default async function page({ params: { slug } }) {
  const post = await sanityFetch({
    query: singlearticlequery,
    qParams: { slug },
    tags: ["case-study", "case-studies"],
  });

  if (!post) return null;
  return (
    <div className="mx-auto mt-40 max-w-7xl">
      <p className="mb-8 text-3xl text-dark-600">{post.title}</p>
      <PortableText value={post.body} />
    </div>
  );
}
