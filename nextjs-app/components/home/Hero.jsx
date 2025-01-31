import HeroCarousel from "./HeroCarousel";

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section>
      <HeroCarousel images={data.hero.heroImages} />
      <div className="mx-auto mb-28 flex max-w-[1720px] flex-col gap-6 px-4 py-5 lg:mb-48 lg:gap-8">
        {data.hero.heroContent.map((item, index) => (
          <p key={index} className="text-lg lg:text-4xl">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
