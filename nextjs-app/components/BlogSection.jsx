import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

function BlogSection({ data }) {
  return (
    <section className="mb-28 lg:mb-48">
      <Carousel
        opts={{
          align: "start",
          offset: 10,
        }}
        className="mx-auto mt-8 max-w-[1460px] px-4"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.ressources.map((article, index) => (
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
                    src={article?.image || "/images/placeholder.jpg"}
                    alt={article?.alt || "Tujikuze Image"}
                    className="mb-3 h-[431px] w-full object-cover transition-all duration-300 lg:h-[520px] 2xl:h-[720px]"
                  />
                  {/* Dark overlay effect on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                </Link>

                <ul className="mb-1 flex items-center gap-3 font-secondary text-[13px] uppercase lg:mb-3">
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
                  className="transition-all hover:text-dark-400 group-hover:text-dark-400"
                >
                  <p className="mb-3 max-w-64 text-[15px] lg:max-w-96 lg:text-2xl">
                    {article.title}
                  </p>
                  <p className="max-w-64 text-[13px] lg:max-w-96 lg:text-lg">
                    {article.summary}
                  </p>
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
