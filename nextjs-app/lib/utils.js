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
            alt={value?.alt || "Tujikuze Image"}
            width={1400}
            height={1400}
            className="mb-14 mt-16 h-[512px] w-full object-cover object-center lg:mb-28 lg:mt-48 lg:h-[620px] 2xl:h-[920px]"
          />
        </>
      );
    },
    inlineImage: ({ value }) => {
      return (
        <>
          <Image
            src={urlFor(value).url()}
            alt={value?.alt || "Tujikuze Image"}
            width={800}
            height={800}
            className={`mx-auto mb-8 max-h-[420px] object-cover lg:float-left lg:mb-36 lg:max-w-lg lg:pl-20 lg:pr-12`}
          />
          <div className="clearfix"></div> {/* Clear the float */}
        </>
      );
    },
    listItemWithIcon: ({ value }) => {
      // Render the custom list item with an icon
      const { text, icon } = value;

      return (
        <li className="mb-2 ml-auto flex min-h-[58px] min-w-[58px] max-w-5xl items-center space-x-2 px-4 text-sm lg:mb-5 lg:space-x-4 lg:pr-32 lg:text-lg">
          {icon && icon.asset && (
            <Image
              src={urlFor(icon).width(58).height(58).url()} // Generate the URL
              alt="Icon"
              width={58}
              height={58}
              className="bg-cover"
            />
          )}
          <span>{text}</span>
        </li>
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
          className="text-sm text-blue-500 transition-all hover:underline hover:underline-offset-2 lg:text-lg"
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
        className="mx-auto mb-16 max-w-[1720px] px-4 font-main text-2xl text-dark-500 lg:mb-28 lg:pr-32 lg:text-4xl"
        id={node?._key}
      >
        {children}
      </h1>
    ),
    h2: ({ children, node }) => (
      <h2
        className="mx-auto mb-16 max-w-[1720px] px-4 font-main text-2xl text-dark-500 lg:mb-28 lg:pr-32 lg:text-4xl"
        id={node?._key}
      >
        {children}
      </h2>
    ),
    h3: ({ children, node }) => (
      <h3
        className="float-right mb-5 ml-auto mt-16 max-w-5xl px-4 text-lg lg:mb-9 lg:pr-32 lg:text-2xl"
        id={node?._key}
      >
        {children}
      </h3>
    ),
    h4: ({ children, node }) => (
      <h4
        className="float-right mb-5 ml-auto mt-16 max-w-5xl px-4 text-lg lg:mb-9 lg:pr-32 lg:text-2xl"
        id={node?._key}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => {
      return (
        <blockquote className="mb-5 ml-auto max-w-5xl px-4 text-lg lg:mb-11 lg:pr-32 lg:tracking-[-1px] xl:text-4xl">
          {children}
        </blockquote>
      );
    },

    // Styling for normal text
    normal: ({ children, index, value, next }) => {
      return (
        <p className="mb-4 ml-auto max-w-5xl px-4 text-sm lg:mb-5 lg:pr-32 lg:text-lg">
          {children}
        </p>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="mb-4 ml-auto flex max-w-5xl list-disc flex-col gap-3 px-4 pl-8 text-sm lg:mb-5 lg:pr-32 lg:text-lg">
        {children}
      </ul>
    ),
  },
};
