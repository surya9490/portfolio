"use client";

import nasherMiles from "@/assets/images/nashermilesfinal.png";
import ucb from "@/assets/images/ucb-final.png";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Nasher Miles",
    year: "2024",
    title: "Premium Luggage eCommerce Store",
    description:
      "Full Shopify build for India's leading luggage brand. Custom theme development with advanced filtering, collection pages, and mobile-first design.",
    results: [
      { title: "Developed and maintained a Shopify store" },
      { title: "Increased mobile traffic by 35%" },
      { title: "Improved page speed by 50%" },
    ],
    link: "https://nashermiles.com/",
    image: nasherMiles,
    tags: ["Shopify", "Liquid", "Custom Theme"],
  },
  {
    company: "United Colors of Benetton",
    year: "2024",
    title: "Global Fashion eCommerce Platform",
    description:
      "Enterprise-grade Shopify store for the iconic fashion brand. Payment gateway integrations, multi-currency support, and conversion-optimised checkout flow.",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://in.benetton.com/",
    image: ucb,
    tags: ["Shopify Plus", "API Integration", "Performance"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Projects"
            description="Transforming concepts into engaging digital experiences that drive results"
          />
        </ScrollReveal>

        <div className="mt-16 md:mt-20 flex flex-col gap-12">
          {portfolioProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <div className="glass-card overflow-hidden group hover:border-violet-200/50 dark:hover:border-violet-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/5">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200/50 dark:border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="gradient-text font-bold uppercase tracking-widest text-sm mb-2">
                      {project.company} &bull; {project.year}
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {project.results.map((result) => (
                        <li key={result.title} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                          <div className="size-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center shrink-0">
                            <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {result.title}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm hover:shadow-lg transition-all duration-300 self-start hover:-translate-y-0.5"
                    >
                      Visit Live Site
                      <svg
                        className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 order-1 lg:order-2">
                    <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        fill={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Link */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/shopify"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card font-medium text-sm text-zinc-700 dark:text-zinc-300 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Projects
              <svg
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
