import { groq } from "next-sanity";

export const homequery = groq`*[_type == "home"][0]{
  modules[] {
    _type,
    _key,
    ...,
    "image": select(
      _type == "mediaModule" => {
        "url": image.asset->url,
        "alt": image.alt
      },
      _type == "ctaModule" => {
        "url": image.image.asset->url,
        "alt": image.alt
      },
    ),
    "items": select(
      _type == "cardList" || _type == "interactiveCardList" || _type == "textList" => items[]{
        _key,
        name,
        description,
        "image": {
          "url": image.image.asset->url,
          "alt": image.alt
        }
      }
    ),
    "heroImages": select(
        _type == "hero" => images[] {
          "url": asset->url,
          "alt": alt
        }
      ),
    "ressources": select(
    _type == "blogModule" => ressources[]->{
      _id,
      title,
      summary,
      slug,
      "image": mainImage.image.asset->url,
      "alt": mainImage.alt,
      publishedAt,
      "categories": categories[]->{
        _id,
        title,
        slug
      }
    }
    ),
    "caseStudies": select(
    _type == "casesModule" => caseStudies[]-> {
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
    ),
  },
}
`;

export const impactquery = groq`*[_type == "our-impact"][0]{
  modules[] {
    _type,
    _key,
    ...,
    "image": select(
      _type == "mediaModule" => {
        "url": image.asset->url,
        "alt": image.alt
      },
      _type == "ctaModule" => {
        "url": image.image.asset->url,
        "alt": image.alt
      },
    ),
    "items": select(
      _type == "cardList" || _type == "interactiveCardList" || _type == "textList" => items[]{
        _key,
        name,
        description,
        "image": {
          "url": image.image.asset->url,
          "alt": image.alt
        }
      }
    ),
    "heroImages": select(
        _type == "hero" => images[] {
          "url": asset->url,
          "alt": alt
        }
      ),
    "ressources": select(
    _type == "blogModule" => ressources[]->{
      _id,
      title,
      summary,
      slug,
      "image": mainImage.image.asset->url,
      "alt": mainImage.alt,
      publishedAt,
      "categories": categories[]->{
        _id,
        title,
        slug
      }
    }
    ),
    "caseStudies": select(
    _type == "casesModule" => caseStudies[]-> {
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
    ),
  }
}
`;

export const aboutquery = groq`*[_type == "about"][0] {
  modules[] {
    _type,
    _key,
    ...,
    "image": select(
      _type == "mediaModule" => {
        "url": image.asset->url,
        "alt": image.alt
      },
      _type == "ctaModule" => {
        "url": image.image.asset->url,
        "alt": image.alt
      },
    ),
    "items": select(
      _type == "cardList" || _type == "interactiveCardList" || _type == "textList" || _type == "sectionHeader" => items[]{
        _key,
        name,
        description,
        "image": {
          "url": image.image.asset->url,
          "alt": image.alt
        }
      }
    ),
    "heroImages": select(
        _type == "hero" => images[] {
          "url": asset->url,
          "alt": alt
        }
      ),
    "ressources": select(
    _type == "blogModule" => ressources[]->{
      _id,
      title,
      summary,
      slug,
      "image": mainImage.image.asset->url,
      "alt": mainImage.alt,
      publishedAt,
      "categories": categories[]->{
        _id,
        title,
        slug
      }
    }
    ),
    "caseStudies": select(
    _type == "casesModule" => caseStudies[]-> {
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
    ),
  }
}
`;

export const ourofferquery = groq`*[_type == "our-offer"][0] {
  modules[] {
    _type,
    _key,
    ...,
    "image": select(
      _type == "mediaModule" => {
        "url": image.asset->url,
        "alt": image.alt
      },
      _type == "ctaModule" => {
        "url": image.image.asset->url,
        "alt": image.alt
      },
    ),
    "items": select(
      _type == "cardList" || _type == "interactiveCardList" || _type == "textList" || _type == "sectionHeader" => items[]{
        _key,
        name,
        description,
        "image": {
          "url": image.image.asset->url,
          "alt": image.alt
        }
      }
    ),
    "heroImages": select(
        _type == "hero" => images[] {
          "url": asset->url,
          "alt": alt
        }
      ),
    "ressources": select(
    _type == "blogModule" => ressources[]->{
      _id,
      title,
      summary,
      slug,
      "image": mainImage.image.asset->url,
      "alt": mainImage.alt,
      publishedAt,
      "categories": categories[]->{
        _id,
        title,
        slug
      }
    }
    ),
    "caseStudies": select(
    _type == "casesModule" => caseStudies[]-> {
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
    ),
  }
}
  `;

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
    },
    navSocials[] {
        label,
        linkUrl
    },
    "newsletter": *[_type == "footer"][0].newsletter
  },
}`;

export const contactquery = groq`*[_type == "contact"][0] {
  modules[] {
    _type,
    _key,
    ...,
    "image": select(
      _type == "mediaModule" => {
        "url": image.asset->url,
        "alt": image.alt
      },
      _type == "ctaModule" => {
        "url": image.image.asset->url,
        "alt": image.alt
      },
    ),
    "items": select(
      _type == "cardList" || _type == "interactiveCardList" || _type == "textList" || _type == "sectionHeader" => items[]{
        _key,
        name,
        description,
        "image": {
          "url": image.image.asset->url,
          "alt": image.alt
        }
      }
    ),
    "heroImages": select(
        _type == "hero" => images[] {
          "url": asset->url,
          "alt": alt
        }
      ),
    "ressources": select(
    _type == "blogModule" => ressources[]->{
      _id,
      title,
      summary,
      slug,
      "image": mainImage.image.asset->url,
      "alt": mainImage.alt,
      publishedAt,
      "categories": categories[]->{
        _id,
        title,
        slug
      }
    }
    ),
    "caseStudies": select(
    _type == "casesModule" => caseStudies[]-> {
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
    ),
  }
}`;

// Reusable sections
// DELETED

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
