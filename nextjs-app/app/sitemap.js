import { client } from "@/sanity/client";

async function getRessources() {
  const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "updated": publishedAt
  }`;
  const data = await client.fetch(query);

  return data;
}

async function getCaseStudies() {
  const query = `*[_type == "case-study"] {
    "currentSlug": slug.current,
      "updated": publishedAt
  }`;
  const data = await client.fetch(query);

  return data;
}

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap() {
  const data = await getRessources();
  const data2 = await getCaseStudies();

  const posts = data.map((post) => ({
    url: `${URL}/ressources/${post.currentSlug}`,
    lastModified: post.updated,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const caseStudies = data2.map((caseStudy) => ({
    url: `${URL}/case-studies/${caseStudy.currentSlug}`,
    lastModified: caseStudy.updated,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0, // Homepage should always be the highest priority
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6, // About page rarely changes
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7, // Higher if contact details change often
    },
    {
      url: `${URL}/our-impact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${URL}/our-offer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${URL}/ressources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9, // Higher than individual posts but lower than homepage
    },
    {
      url: `${URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9, // Higher than individual posts but lower than homepage
    },
    ...posts,
    ...caseStudies,
  ];
}
