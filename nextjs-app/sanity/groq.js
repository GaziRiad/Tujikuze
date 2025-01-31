import { groq } from "next-sanity";

export const homequery = groq`*[_type == "home"][0]{
hero {
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "backgroundVideoUrl": backgroundVideo.asset->url
  },
  partners {
    logos[] {
      name,
      "logoUrl": logo.asset->url,
      url
    }
  },
  introduction {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    links[] {
      "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      url
    }
  },
  sectors {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    "allSectors": *[_type == "sector" && language == $locale] | order(publishedAt asc) {
      title,
      "slug": slug.current
    }
  },
  services {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    hubs[] {
      "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
        url,
      "staticImage": staticImage.asset->url,
      "hoverImage": hoverImage.asset->url
    }
  },
  caseStudies {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    "items": *[_type == "case-study" && isDisplay == true && language == $locale] | order(publishedAt desc) {
      title,
      slug,
      categories[]-> {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      },
      summary
    }
  },
  spotlight {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    "imageUrl": image.asset->url
  },
  blog {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    "items": *[_type == "post" && isDisplay == true && language == $locale] | order(publishedAt desc) {
      title,
      slug,
      categories[]-> {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      },
      summary,
    }
  },
}`;

// Reusable sections

export const footerquery = groq`*[_type == "footer"][0]{
    heading,
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

// Single Post
export const singlearticlequery = groq`*[_type == "post" && slug.current == $slug][0] {
        title,
        slug,
        publishedAt,
        categories[]-> {
          "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        },
        body,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          title,
          slug,
          language
        },
      }
`;

// Single Post
export const singleCasestudyQuery = groq`*[_type == "case-study" && slug.current == $slug][0] {
        title,
        slug,
        publishedAt,
        categories[]-> {
          "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        },
        body,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          title,
          slug,
          language
        },
      }
`;

export const settingsQuery = groq`*[_type == "settings"][0] {
  "imageUrl": favicon.asset->url,
  "defaultTitle": coalesce(defaultTitle[_key == $locale][0].value, defaultTitle[_key == "en"][0].value),
  "description": coalesce(siteDescription[_key == $locale][0].value, siteDescription[_key == "en"][0].value),
}`;

export const navigationQuery = groq`*[_type == "settings"][0] {
  navigation {
    "imageUrl": logo.asset->url,
    "buttonText": coalesce(buttonText[_key == $locale][0].value, buttonText[_key == "en"][0].value),
    "navExpertises": *[_type == "expertise" && isNavigation == true && language == $locale] | order(publishedAt asc) {
      title,
      "slug": slug.current,
    },
    "navSectors": *[_type == "sector" && isNavigation == true && language == $locale] | order(publishedAt asc) {
      title,
      "slug": slug.current
    },
    expertisesLink {
      "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      "dropdownTitle": coalesce(dropdownTitle[_key == $locale][0].value, dropdownTitle[_key == "en"][0].value),
      "imageUrl": dropdownImage.asset->url
    },
    sectorsLink {
      "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      "dropdownTitle": coalesce(dropdownTitle[_key == $locale][0].value, dropdownTitle[_key == "en"][0].value),
    },
    "boostersLink": coalesce(boostersLink[_key == $locale][0].value, boostersLink[_key == "en"][0].value),
    "aboutLink": coalesce(aboutLink[_key == $locale][0].value, aboutLink[_key == "en"][0].value)
  }
}`;

// ALL routes (mostly for sitemap and SSG)

export const allPostsQuery = groq`
    *[_type == "post"] {
      "slug": slug.current,
      _updatedAt,
      language,
    }
  `;

export const allCasestudiesquery = groq`
    *[_type == "case-study"] {
      "slug": slug.current,
      _updatedAt,
      language,
    }
  `;

export const allExpertisesQuery = groq`
    *[_type == "expertise"] {
      "slug": slug.current,
      _updatedAt,
      language,
    }
  `;

export const allSectorsQuery = groq`
    *[_type == "sector"] {
      "slug": slug.current,
      _updatedAt,
      language,
    }
  `;
