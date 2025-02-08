import Image from "next/image";
import SectionHeading from "../SectionHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

function BlogSection({ data }) {
  return (
    <section className="mx-auto max-w-[1720px] px-4">
      <SectionHeading
        title={data.sectionHeading.title}
        label={data.sectionHeading?.link?.label}
        href={data.sectionHeading?.link?.linkUrl}
      />
      <Carousel
        opts={{
          align: "start",
          offset: 10,
        }}
        className="mx-auto mb-28 mt-24 max-w-[1460px] lg:mb-48"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.articles.map((article, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] pl-2 sm:basis-[90%] md:basis-2/4 md:pl-4"
            >
              {/* Shared Hover Group */}
              <div className="group relative">
                <Link
                  href={`/ressources/${article.slug.current}`}
                  className="relative block"
                >
                  <Image
                    width={1200}
                    height={1200}
                    src={article.mainImage.imageUrl}
                    alt={article.mainImage.alt}
                    className="mb-3 h-[431px] w-full object-cover transition-all duration-300 lg:h-[520px] 2xl:h-[720px]"
                  />
                  {/* Dark overlay effect on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                </Link>

                <ul className="mb-3 flex items-center gap-3 font-secondary text-sm uppercase">
                  {article.categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        href={`/ressources?category=${cat.slug.current}`}
                        className="transition-all hover:text-dark-400"
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Title inside the same hover group */}
                <Link
                  href={`/ressources/${article.slug.current}`}
                  className="max-w-96 transition-all hover:text-dark-400 group-hover:text-dark-400"
                >
                  <p className="mb-3 text-2xl">{article.title}</p>
                  <p className="max-w-96 text-lg">{article.summary}</p>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default BlogSection;
