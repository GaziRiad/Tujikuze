"use client";

import Link from "next/link";

function SectionHeading({
  title,
  onClick,
  state,
  type = "link",
  href = false,
  label,
}) {
  if (type === "tab")
    return (
      <div className="mx-auto mb-3 flex max-w-[1720px] flex-col px-4">
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-5">
          <p className="text-sm lg:text-2xl">{title}</p>
          <p
            className="cursor-pointer font-secondary text-sm"
            onClick={() => onClick(!state)}
          >
            {state ? "VIEW LESS" : "VIEW ALL"}
          </p>
        </div>
      </div>
    );

  return (
    <div className="mx-auto mb-3 flex max-w-[1720px] flex-col px-4">
      <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-5">
        <p className="text-sm lg:text-2xl">{title}</p>
        {href && label && (
          <Link href={href} className="font-secondary text-sm">
            {label}
          </Link>
        )}
      </div>
    </div>
  );
}

export default SectionHeading;
