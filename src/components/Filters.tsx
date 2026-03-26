"use client";

import { useEffect, useRef } from "react";

interface FiltersProps {
  onTagsChange: (tags: string[]) => void;
  selectedTags: string[];
  classes?: string;
}

const tagsCondition = {
  Shopify: "and",
  Retainer: "or",
  "Full build": "or",
};

export default function Filters({
  onTagsChange,
  selectedTags,
  classes,
}: FiltersProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const allTags = Object.keys(tagsCondition);

  const handleTagChange = (tag: string) => {
    if (tag === "Shopify") return;
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(newTags);
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("tagDropdown");
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        const dropdown = document.getElementById("tagDropdown");
        if (dropdown && !dropdown.classList.contains("hidden")) {
          dropdown.classList.add("hidden");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full lg:flex justify-end">
      <div className="relative lg:w-[250px]">
        <button
          ref={buttonRef}
          className="w-full px-4 py-2.5 text-left glass-card rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          onClick={toggleDropdown}
        >
          {selectedTags.length > 1
            ? `${selectedTags.length} filters selected`
            : "Filter by tags"}
        </button>
        <div
          ref={dropdownRef}
          id="tagDropdown"
          className="absolute z-10 w-full mt-2 glass-card rounded-xl shadow-lg hidden overflow-hidden"
        >
          <div className="p-2 max-h-60 overflow-y-auto">
            {allTags.map((tag) => (
              <label
                key={tag}
                className={`flex items-center p-2.5 rounded-lg cursor-pointer transition-colors duration-200 ${
                  tag === "Shopify"
                    ? "bg-zinc-100 dark:bg-zinc-800 cursor-not-allowed"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  disabled={tag === "Shopify"}
                  className={`mr-3 rounded text-violet-500 focus:ring-violet-500 ${
                    tag === "Shopify" ? "opacity-50" : ""
                  }`}
                />
                <span
                  className={`text-sm text-zinc-700 dark:text-zinc-300 ${
                    tag === "Shopify" ? "font-semibold" : ""
                  }`}
                >
                  {tag}{" "}
                  <span className="text-zinc-400 text-xs">
                    ({tagsCondition[tag as keyof typeof tagsCondition]})
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
