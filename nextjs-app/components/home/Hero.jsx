import HeroCarousel from "./HeroCarousel";

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section>
      <HeroCarousel images={data.heroImages} />
    </section>
  );
}
