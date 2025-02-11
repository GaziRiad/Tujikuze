import { groq } from "next-sanity";

export const homequery = groq`*[_type == "home"][0]{
  hero {
    heroImages[]{
      "url": asset->url,
      alt
    },
    heroContent
  },
  blockSections[] {
    image {
        "url": image.asset->url,
        alt
    },
    title,
    subTitle,
    link {
      label,
      linkUrl
    },
    text
  },
  mainImage {
        "url": image.asset->url,
        alt
  },
  materialsAndCraftsmanshipSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    mainText,
    items[] {
      name,
      description,
      itemImage {
          "url": image.asset->url,
          alt
      },
    },
    materials[] {
      name,
      description,
      materialImage {
          "url": image.asset->url,
          alt
      },
    }
  },
  casesSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    caseStudies[]-> {
      title,
      slug,
      subTitle,
      summary,
      publishedAt,
      mainImage {
        "imageUrl": image.asset->url,
        alt
      },
      categories[]-> {
        title,
        slug
      },
    }
  },
  blogSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    "articles": *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage {
        "imageUrl": image.asset->url,
        alt
      },
      categories[]-> {
        title,
        slug
      },
      summary
    }
  }
}
`;

export const impactquery = groq`*[_type == "our-impact"][0]{
  intro {
    text
  },
  mainImage[0] {
    "url": asset->url,
    alt
  },
  highlightsSection {
    highlights[] {
      title,
      text
    },
    keyStatsTable[] {
      value,
      label
    },
    highlightImage[0] {
      "url": asset->url,
      alt
    },
  },
  resultsSection {
    heading,
    text,
    keyStatsTable[] {
      value,
      label
    },
  },
  esgSection {
    heading,
    mainText,
    textContent[],
    esgImage[0] {
      "url": asset->url,
      alt
    },
  },
  casesSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    caseStudies[]-> {
      title,
      slug,
      subTitle,
      summary,
      publishedAt,
      mainImage {
        "imageUrl": image.asset->url,
        alt
      },
      categories[]-> {
        title,
        slug
      },
    }
  },
}
`;

export const aboutquery = groq`*[_type == "about"][0]{
  intro {
    text
  },
  ourMission {
    heading,
    text,
    keyStatsTable[] {
      value,
      label
    },
    missionImage {
      "url": image.asset->url,
      alt
    }
  },
  locationSection {
    heading,
    mainText,
    textContent[],
    locationImage {
      "url": image.asset->url,
      alt
    }
  },
  teamSection[] {
    fullname,
    description,
    memberImage {
      "url": image.asset->url,
      alt
    }
  },
  ethicalFashionSection {
    heading,
    text,
    halfImage {
      "url": image.asset->url,
      alt
    },
    largeImage {
      "url": image.asset->url,
      alt
    },
  },
  casesSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    caseStudies[]-> {
      title,
      slug,
      subTitle,
      summary,
      publishedAt,
      mainImage {
        "imageUrl": image.asset->url,
        alt
      },
      categories[]-> {
        title,
        slug
      },
    }
  },
}
`;

export const ourofferquery = groq`*[_type == "our-offer"][0] {
  intro {
    text,
    image {
      "imageUrl": image.asset->url,
      alt
    }
  },
  materialsAndCraftsmanshipSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    mainText,
    textContent
  },
  craftsmanshipSection {
    heading,
    items[] {
      name,
      description,
      image {
        "imageUrl": image.asset->url,
        alt
      }
    }
  },
  materialsSection {
    heading,
    items[] {
      name,
      description,
      image {
        "imageUrl": image.asset->url,
        alt
      }
    }
  },
  mainImage {
    "imageUrl": image.asset->url,
    alt
  },
  termsSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    topFeatures[] {
      title,
      text
    },
    image {
      "imageUrl": image.asset->url,
      alt
    },
    bottomFeatures[] {
      title,
      text
    }
  },
  casesSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    caseStudies[]-> {
      title,
      slug,
      subTitle,
      summary,
      publishedAt,
      mainImage {
        "imageUrl": image.asset->url,
        alt
      },
      categories[]-> {
        title,
        slug
      },
    }
  },
}`;

export const ressourcespagequery = groq`*[_type == "ressourcesPage"][0] {
  "posts": *[_type == "post" && 
    (!defined($category) || $category in categories[]->slug.current) && 
    (!defined($date) || string::split(publishedAt, "-")[0] == $date)
  ] | order(publishedAt desc) {
    title,
    slug,
    mainImage {
      "imageUrl": image.asset->url,
      alt
    },
    categories[]-> {
      title,
      slug
    },
    summary,
    publishedAt
  },
  "dates": array::unique(*[_type == "post"]{ "year": string::split(publishedAt, "-")[0] } | order(year asc).year),
  "categories": *[_type == "category" && slug.current in array::unique(*[_type == "post"].categories[]->slug.current)]{
    title,
    slug
  },
  casesSection {
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    caseStudies[]-> {
      title,
      slug,
      subTitle,
      summary,
      publishedAt,
      mainImage {
        "imageUrl": image.asset->url,
        alt
      },
      categories[]-> {
        title,
        slug
      },
    }
  },
}`;

export const casestudiespagequery = groq`*[_type == "case-studies-page"][0] {
  text,
  "posts": *[_type == "case-study" && 
    (!defined($category) || $category in categories[]->slug.current) && 
    (!defined($date) || string::split(publishedAt, "-")[0] == $date)
  ] | order(publishedAt desc) {
    title,
    slug,
    subTitle,
    mainImage {
      "imageUrl": image.asset->url,
      alt
    },
    categories[]-> {
      title,
      slug
    },
    summary,
    publishedAt
  },
  "dates": array::unique(*[_type == "case-study"]{ "year": string::split(publishedAt, "-")[0] } | order(year asc).year),
  "categories": *[_type == "category" && slug.current in array::unique(*[_type == "case-study"].categories[]->slug.current)]{
    title,
    slug
  },
  seo {
    title,
    description
  }
}`;

export const settingsquery = groq`*[_type == "settings"][0] {
  "imageUrl": favicon.asset->url,
  defaultTitle,
  siteDescription,
  navigation {
    logo {
      "url": asset->url,
      alt
    },
    navItems[] {
        label,
        linkUrl
    }
  }
}`;

export const contactquery = groq`*[_type == "contact"][0] {
        sectionHeading {
          title,
          link {
            label,
            linkUrl
          }
        },
        subHeading,
        contactForm {
          title,
          fields[] {
            type,
            placeholder,
            required,
            options
          },
          buttonLabel
        },
        image {
          asset->{
            url
          },
          alt
        }
      }`;

// Reusable sections

export const footerquery = groq`*[_type == "footer"][0]{
    sectionHeading {
      title,
      link {
        label,
        linkUrl
      }
    },
    subHeading,
    credits[]{
      title,
      text
    },
    newsletter{
      title,
      placeholder,
      buttonLabel
    },
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    navigationLinks[]{
      link,
      url
    },
    socialLinks[]{
      platform,
      url
    },
    footerLogos[]{
      asset->{
        _id,
        url
      },
      alt
    },
    mainLogo{
      asset->{
        _id,
        url
      },
      alt
    }
}`;

// Single dynamic pages
// Single Post
export const singlearticlequery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  summary,
  mainImage {
    "imageUrl": image.asset->url,
    alt
  },
  publishedAt,
  categories[]-> {
    title,
    slug
  },
  body,
}
`;
// Single Case Study
export const singlecasestudyquery = groq`*[_type == "case-study" && slug.current == $slug][0] {
  title,
  slug,
  subTitle,
  summary,
  "reportUrl": reportFile.asset->url,
  mainImage {
    "imageUrl": image.asset->url,
    alt
  },
  publishedAt,
  categories[]-> {
    title,
    slug
  },
  body,
}
`;

// Mostly for SSG & sitemap
// export const allressourcesquery = groq`
// {
//   "posts": *[_type == "post" &&
//     (!defined($category) || $category in categories[]->slug.current) &&
//     (!defined($date) || string::split(publishedAt, "-")[0] == $date)
//   ] | order(publishedAt desc) {
//     title,
//     slug,
//     mainImage {
//       "imageUrl": image.asset->url,
//       alt
//     },
//     categories[]-> {
//       title,
//       slug
//     },
//     summary,
//     publishedAt
//   },
//   "dates": array::unique(*[_type == "post"]{ "year": string::split(publishedAt, "-")[0] } | order(year asc).year),
// }
// `;

// export const allcasestudiesquery = groq`
// {
//   "posts": *[_type == "case-study" &&
//     (!defined($category) || $category in categories[]->slug.current) &&
//     (!defined($date) || string::split(publishedAt, "-")[0] == $date)
//   ] | order(publishedAt desc) {
//     title,
//     slug,
//     description,
//     mainImage {
//       "imageUrl": image.asset->url,
//       alt
//     },
//     categories[]-> {
//       title,
//       slug
//     },
//     summary,
//     publishedAt
//   },
//   "dates": array::unique(*[_type == "case-study"]{ "year": string::split(publishedAt, "-")[0] } | order(year asc).year),
// }
// `;

// export const allCategories = groq`*[_type == "category"]   {
//         title,
//         slug,
//     }
//       `;
