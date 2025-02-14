import SectionHeading from "./SectionHeading";
import Image from "next/image";

import Link from "next/link";
import { sanityFetch } from "@/sanity/client";
import { footerquery } from "@/sanity/groq";
import Newsletter from "./Newsletter";

async function Footer({ noHeading = false }) {
  const data = await sanityFetch({
    query: footerquery,
    tags: ["footer"],
  });

  return (
    <footer className="">
      {!noHeading && (
        <>
          <SectionHeading
            title={data.sectionHeading.title}
            label={data.sectionHeading?.link?.label}
            href={data.sectionHeading?.link?.linkUrl}
          />
          <div className="mx-auto max-w-[1720px] px-4">
            <h2 className="mb-14 text-sm lg:mb-48 lg:text-5xl">
              {data.subHeading}
            </h2>
          </div>
        </>
      )}
      <section className="bg-[#111B13] px-4 pb-12 pt-11 lg:pt-20">
        <div className="mx-auto max-w-[1720px]">
          <div className="mb-16 grid w-full grid-cols-1 items-start gap-14 text-white lg:grid-cols-[60fr_40fr] lg:grid-rows-1 lg:gap-0">
            {/* First column */}
            <div className="order-2 flex max-w-96 flex-col gap-7 lg:order-1">
              {data.credits.map((item, index) => (
                <div key={index} className="flex flex-col gap-7">
                  <h3 className="text-sm">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Second column */}
            <div className="order-1 lg:order-2 lg:max-w-96">
              <Newsletter data={data?.newsletter} />
              <Image
                src={data?.image?.asset?.url || "/images/placeholder.jpg"}
                width={2000}
                height={2000}
                alt={data?.image?.alt || "Tujikuze Image"}
                className="h-[432px] w-full object-cover"
              />
            </div>
          </div>
          <ul className="mb-5 flex items-center gap-8 border-b border-white/60 pb-5">
            {data.footerLogos.map((item, index) => (
              <li key={index} className="relative h-24 w-24">
                <Image
                  fill
                  src={item?.asset?.url}
                  alt={item?.alt}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-[65fr_35fr] text-sm lg:text-lg">
            <Link href="/" className="relative h-8 max-w-44">
              <Image
                fill
                src={data?.mainLogo?.asset?.url || "/images/placeholder.jpg"}
                alt={data?.mainLogo?.alt || "Tujikuze Image"}
                className="object-cover"
              />
            </Link>
            <div className="flex flex-col gap-4 text-light-500">
              <ul className="flex flex-col">
                {data.socialLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="transition-all hover:text-dark-400"
                    >
                      {item.platform}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col">
                {data.navigationLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="transition-all hover:text-dark-400"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}

                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
