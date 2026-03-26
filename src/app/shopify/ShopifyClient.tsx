"use client";

import ProductGrid from "@/components/ShopifyProjects";
import Filters from "@/components/Filters";
import { useState } from "react";
import { Project } from "./data";
import ScrollReveal from "@/components/ScrollReveal";

interface ShopifyClientProps {
  projectList: Project[];
}

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
    <div className="pt-28 pb-20">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <p className="uppercase font-semibold tracking-widest text-sm gradient-text mb-4">
              Portfolio
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Shopify Projects
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Over the years, I&apos;ve worked on many exciting Shopify projects
              — some were full builds, some ongoing retainers, and some focused
              on custom Checkout UI extensions. Here&apos;s a collection of
              projects I&apos;ve been part of.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <Filters
              classes="lg:w-[250px] lg:justify-self-end"
              onTagsChange={setSelectedTags}
              selectedTags={selectedTags}
            />
            <ProductGrid products={filteredProjects} />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
