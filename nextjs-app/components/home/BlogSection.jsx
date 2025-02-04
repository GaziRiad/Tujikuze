import Image from "next/image";
import SectionHeading from "../SectionHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
              <Image
                width={1200}
                height={1200}
                src={article.mainImage.imageUrl}
                alt={article.mainImage.alt}
                className="mb-3 h-[431px] w-full object-cover lg:h-[520px] 2xl:h-[720px]"
              />
              <ul className="mb-3 flex items-center gap-3 font-secondary text-sm uppercase">
                {article.categories.map((cat, i) => (
                  <li key={i}>{cat.title}</li>
                ))}
              </ul>
              <p className="mb-3 max-w-96 text-2xl">{article.title}</p>
              <p className="max-w-96 text-lg">{article.summary}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default BlogSection;
