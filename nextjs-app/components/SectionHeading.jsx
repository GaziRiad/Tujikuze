import Link from "next/link";

function SectionHeading({ title, type = "link" }) {
  if (type === "tab")
    return (
      <div className="mb-3 flex items-center justify-between border-b border-[#1A1A1A]/20 pb-5">
        <p className="text-sm lg:text-2xl">{title}</p>
        <p className="font-secondary text-sm">VIEW ALL</p>
      </div>
    );

  return (
    <div className="mb-3 flex items-center justify-between border-b border-[#1A1A1A]/20 pb-5">
      <p className="text-sm lg:text-2xl">{title}</p>
      <Link href="/" className="font-secondary text-sm">
        LEARN MORE
      </Link>
    </div>
  );
}

export default SectionHeading;
