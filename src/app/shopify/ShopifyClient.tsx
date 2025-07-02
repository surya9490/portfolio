"use client";
import ProductGrid from "@/components/ShopifyProjects";
import Filters from "@/components/Filters";
import { useState } from "react";
import { Project } from "./data";

interface ShopifyClientProps {
  projectList: Project[];
}

const tagsCondition = {
  Shopify: "And",
  Retainer: "Or",
  "Full build": "Or",
};

export default function ShopifyClient({ projectList }: ShopifyClientProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>(["Shopify"]);

  const filteredProjects =
    selectedTags.length > 0
      ? projectList.filter((project) => {
          if (
            selectedTags.includes("Shopify") &&
            !project.tags.includes("Shopify")
          ) {
            return false;
          }
          const otherSelectedTags = selectedTags.filter(
            (tag) => tag !== "Shopify"
          );
          if (otherSelectedTags.length === 0) {
            return true;
          }
          return otherSelectedTags.some((tag) => project.tags.includes(tag));
        })
      : projectList;

  return (
    <section className="container md:px-16 px-6 my-20 flex flex-col gap-y-10">
      <div className="grid grid-cols-1 gap-10 justify-items-center">
        <div className="w-full text-left">
          <h1 className="font-sans font-extrabold text-4xl mb-8 bg-gradient-to-r font-russo from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 bg-clip-text text-zinc-900 dark:text-transparent">
            Shopify Projects
          </h1>
          <p className="text-zinc-500 dark:text-white/50 max-w-2xl">
            Over the years, I've worked on many exciting Shopify projects — some were full builds, some ongoing retainers, and some focused on custom Checkout UI extensions.
            Here's a collection of a few projects I've been part of. Each one reflects the passion and experience I bring into building Shopify experiences.
          </p>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <Filters classes="lg:w-[250px] lg:justify-self-end"
            onTagsChange={setSelectedTags}
            selectedTags={selectedTags}
          />
          <ProductGrid products={filteredProjects} />
        </div>
      </div>
    </section>
  );
} 