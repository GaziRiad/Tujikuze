import Link from "next/link";

function CaseStudiesSection() {
  return (
    <section className="mx-auto mb-48 max-w-[1720px]">
      <div className="mb-3 flex items-center justify-between border-b-2 border-[#1A1A1A]/20 pb-5">
        <p className="text-2xl">Case Studies</p>
        <Link href="/" className="font-secondary text-sm">
          LEARN MORE
        </Link>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
