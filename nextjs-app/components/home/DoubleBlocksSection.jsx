import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function DoubleBlocksSection({ image, title }) {
  return (
    <section className="mx-auto mb-48 flex max-w-[1460px] items-start justify-between gap-52">
      <div className="text-4xl">
        <p className="leading-[42px]">{title}</p>
        <p className="mb-7 leading-[42px]">
          Showcasing Artisan Excellence <br /> and Innovation.
        </p>
        <div className="group">
          <Link
            href="/"
            className="font-secondary mb-5 flex w-fit items-center gap-1 text-sm text-[#1A1A1A] transition-all hover:text-[#726f66]"
          >
            <span>LEARN MORE</span>
            <GoArrowRight />
          </Link>
          <p className="max-w-md text-lg text-[#726F66] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
            Our case studies illustrate the transformative impact of bespoke
            collaborations on local artisans.
          </p>
        </div>
      </div>
      <Image
        src={image}
        alt="people crafting"
        className="h-[620px] object-center"
      />
    </section>
  );
}

export default DoubleBlocksSection;
