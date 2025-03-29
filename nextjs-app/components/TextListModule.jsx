import React from "react";

export default function TextListModule({ data }) {
  const items = data?.items || [];
  const emptySlots = 4 - items.length > 0 ? 4 - items.length : 0;

  return (
    <ul className="mx-auto mb-14 grid max-w-[1720px] grid-cols-1 justify-end gap-[54px] px-4 lg:mb-48 lg:grid-cols-4">
      {Array.from({ length: emptySlots }).map((_, index) => (
        <li key={`empty-${index}`} />
      ))}
      {items.map((item, index) => (
        <li key={index}>
          <p className="mb-5 text-2xl text-dark-600 lg:mb-6">{item?.name}</p>
          <p className="whitespace-pre-line text-lg">{item?.description}</p>
        </li>
      ))}
    </ul>
  );
}
