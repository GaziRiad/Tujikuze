import { urlFor } from "@/sanity/sanity-img";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//
export const myPortableTextComponents = {
  types: {
    fullWidthImage: ({ value }) => {
      return (
        <>
          <Image
            src={urlFor(value).url()}
            alt="Image"
            width={1400}
            height={1400}
            className="mb-14 h-[512px] w-full object-cover object-center lg:mb-28 lg:h-[620px] 2xl:h-[920px]"
          />
        </>
      );
    },
    inlineImage: ({ value }) => {
      return (
        <>
          <Image
            src={urlFor(value).url()}
            alt="Image"
            width={800}
            height={800}
            className={`mx-auto mb-8 max-h-[420px] max-w-lg object-cover lg:float-left lg:mb-36 lg:pl-20`}
          />
        </>
      );
    },
  },

  marks: {
    em: ({ children }) => <em className="font-medium">{children}</em>,

    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          id=""
          className="text-neutral-800 underline underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children, node }) => (
      <h1
        className="mx-auto mb-16 max-w-[1720px] px-4 font-main text-4xl text-dark-500 lg:mb-28 lg:pr-32"
        id={node?._key}
      >
        {children}
      </h1>
    ),
    h2: ({ children, node }) => (
      <h2
        className="mx-auto mb-16 max-w-[1720px] px-4 font-main text-4xl text-dark-500 lg:mb-28 lg:pr-32"
        id={node?._key}
      >
        {children}
      </h2>
    ),
    h3: ({ children, node }) => (
      <h3
        className="float-right mb-5 ml-auto max-w-5xl px-4 text-lg lg:mb-9 lg:pr-32 lg:text-2xl"
        id={node?._key}
      >
        {children}
      </h3>
    ),
    h4: ({ children, node }) => (
      <h4
        className="float-right mb-5 ml-auto max-w-5xl px-4 text-lg lg:mb-9 lg:pr-32 lg:text-2xl"
        id={node?._key}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => {
      return (
        <blockquote className="mb-5 ml-auto max-w-5xl px-4 lg:mb-11 lg:pr-32">
          {children}
        </blockquote>
      );
    },

    // Styling for normal text
    normal: ({ children, index, value, next }) => {
      return (
        <p className="mb-14 ml-auto max-w-5xl px-4 lg:mb-36 lg:pr-32">
          {children}
        </p>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul
        style={{
          paddingLeft: "1.125rem",
          fontSize: "1.15rem",
          maxWidth: "56rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          listStyleType: "disc",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          paddingLeft: "1.125rem",
          fontSize: "1.15rem",
          maxWidth: "56rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          listStyleType: "disc",
        }}
      >
        {children}
      </ol>
    ),
  },
};
