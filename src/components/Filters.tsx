'use client';

import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  link: string;
  image: string;
  tags: string[];
}

interface FiltersProps {
  onTagsChange: (tags: string[]) => void;
  selectedTags: string[];
  classes?: string;
}

const tagsCondition = {
  "Shopify": "and",
  "Retainer": "or",
  "Full build": "or",
};

export default function Filters({  onTagsChange, selectedTags, classes }: FiltersProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Get all unique tags from projects that are in tagsCondition
  const allTags = Object.keys(tagsCondition);

  const handleTagChange = (tag: string) => {
    if (tag === 'Shopify') return; // Prevent changing Shopify selection
    
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(newTags);
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById('tagDropdown');
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target as Node) &&
          !buttonRef.current?.contains(event.target as Node)) {
        const dropdown = document.getElementById('tagDropdown');
        if (dropdown && !dropdown.classList.contains('hidden')) {
          dropdown.classList.add('hidden');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full lg:flex justify-end`}>
      <div className="relative lg:w-[250px]">
        <button
          ref={buttonRef}
          className="w-full px-4 py-2 text-left bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={toggleDropdown}
        >
          {selectedTags.length > 1 
            ? `${selectedTags.length} selected` 
            : 'Filter by tags'}
        </button>
        <div
          ref={dropdownRef}
          id="tagDropdown"
          className="absolute z-10 w-full mt-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg hidden"
        >
          <div className="p-2 max-h-60 overflow-y-auto">
            {allTags.map(tag => (
              <label 
                key={tag} 
                className={`flex items-center p-2 rounded cursor-pointer ${
                  tag === 'Shopify' 
                    ? 'bg-zinc-100 dark:bg-zinc-700 cursor-not-allowed' 
                    : 'hover:bg-zinc-100 dark:hover:bg-zinc-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  disabled={tag === 'Shopify'}
                  className={`mr-2 rounded text-purple-500 focus:ring-purple-500 ${
                    tag === 'Shopify' ? 'opacity-50' : ''
                  }`}
                />
                <span className={`text-zinc-700 dark:text-zinc-300 ${
                  tag === 'Shopify' ? 'font-semibold' : ''
                }`}>
                  {tag} ({tagsCondition[tag as keyof typeof tagsCondition]})
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
