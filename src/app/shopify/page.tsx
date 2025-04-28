"use client";

import ShopifyProjects from "@/components/ShopifyProjects";
import Filters from "@/components/Filters";
import { useState } from "react";
import Image, { StaticImageData } from 'next/image';
import nasher from "@/assets/projects/nashermiles-pc.png";
import benetton from "@/assets/projects/ucb-pc.png";
import milton from "@/assets/projects/milton-pc.png";
import borosil from "@/assets/projects/myborosil.com_.png";
import raymonds from "@/assets/projects/myraymond.com_.png";
import naturalindulgence from "@/assets/projects/naturalindulgence.in_.png";
import miarcus from "@/assets/projects/miracus.png";
import neonattack from "@/assets/projects/neonattack.png";
import acerpure from "@/assets/projects/store.acerpure.co.in_.png";
import wrogn from "@/assets/projects/wrogn.com_.png";
import levis from "@/assets/projects/levi.in_.png";
import partsology from "@/assets/projects/partsology.com_.png";
import uspolo from "@/assets/projects/uspoloassn.in_.png";



interface Project {
  title: string;
  link: string;
  image: string | StaticImageData;
  tags: string[];
}

const projectList: Project[] = [
  {
    title: "Nasher Miles",
    link: "https://nashermiles.com/",
    image: nasher,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title: "United Colors of Benetton",
    link: "https://in.benetton.com/",
    image: benetton,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title: "Milton",
    link: "https://www.milton.in/",
    image: milton,
    tags: ["Shopify", "Retainer"],
  },
  {
    title: "Borosil",
    link: "https://myborosil.com/",
    image: borosil,
    tags: ["Shopify", "Retainer"],
  },
  {
    title: "Raymonds",
    link: "https://myraymond.com/",
    image: raymonds,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title: "Natural Indulgence",
    link: "https://naturalindulgence.in/",
      image: naturalindulgence,
    tags: ["Shopify", "Full build"],
  },
  {
    title: "Mi arcus",
    link: "https://miarcus.com/",
    image: miarcus,
    tags: ["Shopify", "Full build"],
  },
  {
    title: "Neon Attack",
    link: "https://www.neonattack.com/",
    image: neonattack,
    tags: ["Shopify", "Full build"],
  },
  {
    title: "Acerpure",
    link: "https://store.acerpure.co.in/",
    image: acerpure,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "wrogn",
    link: "https://wrogn.com/",
    image: wrogn,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "Levis",
    link: "https://www.levis.in/",
    image: levis,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "Partsology",
    link: "https://www.partsology.com/",
    image: partsology,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "US Polo India",
    link: "https://uspoloassn.in/",
    image: uspolo,
    tags: ["Shopify", "Retainer"],
  }
];

const tagsCondition = {
  Shopify: "and",
  Retainer: "or",
  "Full build": "or",
};

export default function Shopify() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["Shopify"]);

  const filteredProjects =
    selectedTags.length > 0
      ? projectList.filter((project) => {
          // If Shopify is selected, it must be present
          if (
            selectedTags.includes("Shopify") &&
            !project.tags.includes("Shopify")
          ) {
            return false;
          }

          // Get other selected tags (excluding Shopify)
          const otherSelectedTags = selectedTags.filter(
            (tag) => tag !== "Shopify"
          );

          // If no other tags are selected, show all Shopify projects
          if (otherSelectedTags.length === 0) {
            return true;
          }

          // For other tags, use OR condition (at least one must match)
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
          <ShopifyProjects products={filteredProjects} />
        </div>
      </div>
    </section>
  );
}
