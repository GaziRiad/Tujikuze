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
        <div className="flex items-center justify-between border-b border-dark-600 pb-2 lg:pb-5">
          <p className="text-sm lg:text-[22px]">{title}</p>
          <p
            className="cursor-pointer font-secondary text-xs lg:text-sm"
            onClick={() => onClick(!state)}
          >
            {state ? "VIEW LESS" : "VIEW ALL"}
          </p>
        </div>
      </div>
    );

  return (
    <div className="mx-auto mb-3 flex max-w-[1720px] flex-col px-4">
      <div className="flex items-center justify-between border-b border-dark-600 pb-2 lg:pb-5">
        <p className="text-sm lg:text-[22px]">{title}</p>
        {href && label && (
          <Link href={href} className="font-secondary text-xs lg:text-sm">
            {label}
          </Link>
        )}
      </div>
    </div>
  );
}

export default SectionHeading;
