"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronDown, X } from "lucide-react";

export default function Filters({ dates, categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category") || "all";
  const date = searchParams.get("date") || "all";
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedDates, setSelectedDates] = useState(date);
  const [isOpen, setIsOpen] = useState(false);

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
    params.delete("date");
    router.push(`/ressources?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  };

  const handleDateChange = (value) => {
    setSelectedDates(value);
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("date");
    } else {
      params.set("date", value);
    }
    params.delete("category");
    router.push(`/ressources?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  };

  return (
    <div className="mx-auto mb-8 mt-28 max-w-[1720px] px-4 lg:mb-24 lg:mt-36">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-3 flex w-full items-center justify-between border-b border-dark-600/20 py-2 text-left lg:hidden"
        >
          <span className="font-secondary text-sm uppercase">Filters</span>
          {isOpen ? <X size={20} /> : <ChevronDown size={20} />}
        </button>

        <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
          <ul className="mb-3 flex flex-col items-start justify-end gap-2 border-b border-dark-600/20 pb-3 font-secondary text-sm uppercase lg:flex-row lg:items-center lg:gap-1">
            <li>
              <span
                onClick={() => handleCategoryChange("all")}
                className={`cursor-pointer ${selectedCategory === "all" ? "font-bold" : ""}`}
              >
                All
              </span>
              <span> ,</span>
            </li>
            {categories?.map((category, index) => (
              <React.Fragment key={category.slug.current}>
                <li
                  onClick={() => handleCategoryChange(category.slug.current)}
                  className={`cursor-pointer ${selectedCategory === category.slug.current ? "font-bold" : ""}`}
                >
                  {category.title}
                </li>
                {index < categories.length - 1 && (
                  <span className="hidden lg:inline">,</span>
                )}
              </React.Fragment>
            ))}
          </ul>
          <ul className="mb-3 mt-4 flex flex-col items-start justify-end gap-2 border-b border-dark-600/20 pb-3 font-secondary text-sm uppercase lg:flex-row lg:items-center lg:gap-1">
            <li>
              <span
                onClick={() => handleCategoryChange("all")}
                className={`cursor-pointer ${selectedDates === "all" ? "font-bold" : ""}`}
              >
                All
              </span>
              <span> ,</span>
            </li>
            {dates?.map((year, index) => (
              <React.Fragment key={year}>
                <li
                  onClick={() => handleDateChange(year)}
                  className={`cursor-pointer ${selectedDates === year ? "font-bold" : ""}`}
                >
                  {year}
                </li>
                {index < dates.length - 1 && (
                  <span className="hidden lg:inline">,</span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
