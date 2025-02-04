"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function Filters({ dates, categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category") || "all";
  const date = searchParams.get("date") || "all"; // For dates
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedDates, setSelectedDates] = useState(date);

  useEffect(() => {
    setSelectedCategory(category);
    setSelectedDates(date);
  }, [category, date]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    // Reset date filter
    params.delete("date");
    router.push(`/ressources?${params.toString()}`, { scroll: false });
  };

  const handleDateChange = (value) => {
    setSelectedDates(value);
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("date");
    } else {
      params.set("date", value);
    }
    // Reset category filter
    params.delete("category");
    router.push(`/ressources?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mx-auto mb-8 mt-28 max-w-[1720px] px-4 lg:mb-24 lg:mt-36">
      <ul className="mb-3 flex items-center justify-end gap-1 border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase">
        <li
          onClick={() => handleCategoryChange("all")}
          className="cursor-pointer"
        >
          All,
        </li>
        {categories?.map((category, index) => (
          <React.Fragment key={category.slug.current}>
            <li
              onClick={() => handleCategoryChange(category.slug.current)}
              className="cursor-pointer"
            >
              {category.title}
            </li>
            {index < categories.length - 1 && <span>,</span>}
          </React.Fragment>
        ))}
      </ul>
      {/* Date Filters */}
      <ul className="mb-3 mt-4 flex items-center justify-end gap-1 border-b border-[#1A1A1A]/20 pb-3 font-secondary text-sm uppercase">
        <li onClick={() => handleDateChange("all")} className="cursor-pointer">
          All,
        </li>
        {dates?.map((year, index) => (
          <React.Fragment key={year}>
            <li
              onClick={() => handleDateChange(year)}
              className="cursor-pointer"
            >
              {year}
            </li>
            {index < dates.length - 1 && <span>,</span>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
