"use client";

import Link from "next/link";

function SectionHeading({ title, onClick, state, type = "link", data }) {
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
    <div className="juss mx-auto mb-8 flex max-w-[1720px] flex-col gap-5 px-4 lg:mb-24">
      <div className="flex items-center justify-between border-b border-dark-600 pb-2 lg:pb-5">
        <p className="text-sm lg:text-[22px]">{data?.title}</p>
        {data?.sectionLink?.label && data?.sectionLink?.url && (
          <Link
            href={data?.sectionLink?.url}
            className="font-secondary text-xs lg:text-sm"
          >
            {data?.sectionLink?.label}
          </Link>
        )}
      </div>
      {data?.description && (
        <h2 className="mb-12 text-sm lg:mb-20 lg:max-w-7xl lg:text-3xl">
          {data.description}
        </h2>
      )}
    </div>
  );
}

export default SectionHeading;
