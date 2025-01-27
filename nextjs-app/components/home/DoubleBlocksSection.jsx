import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function DoubleBlocksSection({ image, title }) {
  return (
    <section className="mx-auto mb-28 flex max-w-[1460px] flex-col items-center justify-between gap-9 bg-white px-4 lg:mb-48 lg:flex-row lg:items-start lg:gap-52">
      <div className="text-4xl">
        <p className="">{title}</p>
        <p className="mb-7 leading-tight">
          Showcasing Artisan Excellence <br /> and Innovation.
        </p>
        <div className="group">
          <Link
            href="/"
            className="mb-5 flex w-fit items-center gap-1 font-secondary text-sm text-dark-600 transition-all hover:text-dark-400"
          >
            <span>LEARN MORE</span>
            <GoArrowRight />
          </Link>
          <p className="hidden max-w-md text-lg text-dark-400 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 lg:block">
            Our case studies illustrate the transformative impact of bespoke
            collaborations on local artisans.
          </p>
        </div>
      </div>
      <Image
        src={image}
        alt="people crafting"
        className="h-[420px] object-center lg:h-[620px]"
      />
    </section>
  );
}

export default DoubleBlocksSection;
