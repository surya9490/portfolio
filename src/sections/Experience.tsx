"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const experiences = [
  {
    role: "Senior Shopify Developer",
    company: "NyxLabs",
    location: "Remote",
    period: "Mar 2025 - Present",
    highlights: [
      "Lead and manage the Shopify development team, owning the full project lifecycle from requirements gathering and sprint planning to on-time delivery",
      "Led end-to-end full Shopify store migration including theme rebuild, data migration, and storefront relaunch with zero downtime",
      "Executed subscription platform migration from Recharge to OrderGroove, preserving all customer subscriptions with zero data loss",
      "Drove measurable improvements in page load speed and conversion rate through Core Web Vitals audits and theme performance optimisation",
      "Developed custom Shopify apps, storefront features, and third-party API integrations using Liquid, React, and Alpine.js",
    ],
    current: true,
  },
  {
    role: "Frontend Developer — SDE 2",
    company: "Marmeto",
    location: "Bengaluru",
    period: "May 2023 - Feb 2025",
    highlights: [
      "Delivered Shopify projects for DTC and enterprise brands — building custom themes in Liquid, JavaScript, and React",
      "Improved store load speed by 30%, directly contributing to a 15% uplift in conversion rate across client storefronts",
      "Integrated payment gateways, third-party APIs, and custom Shopify apps; applied technical SEO to boost visibility",
      "Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect, responsive storefronts",
      "Promoted from Junior Associate to Senior Developer based on performance and project ownership",
    ],
    brands: "US Polo · WROGN · Nasher Miles · Sri Sri Tattva · Birkenstock · Raymonds · UCB · Trampoline · Partsology · AcerPure · Milton · Borosil · Miracus",
    current: false,
  },
  {
    role: "ML Data Associate",
    company: "Amazon Development Center",
    location: "Hyderabad",
    period: "Aug 2020 - Apr 2022",
    highlights: [
      "Reported and tracked software defects, driving quality improvements in internal tooling and workflows",
      "Contributed to process automation initiatives, reducing average task handling time significantly",
      "Recognised as Top Global Performer for high-impact process improvements across the team",
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Career"
            title="Work Experience"
            description="My professional journey in tech and eCommerce"
          />
        </ScrollReveal>

        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.role} delay={index * 0.15}>
              <div className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[11px] md:left-[15px] top-[28px] bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-hover:bg-violet-300 dark:group-hover:bg-violet-600 transition-colors duration-500" />
                )}

                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1 top-[6px] size-6 md:size-7 rounded-full border-[3px] flex items-center justify-center transition-all duration-500 ${
                    exp.current
                      ? "border-violet-500 bg-violet-500/10 dark:bg-violet-500/20"
                      : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 group-hover:border-violet-400 dark:group-hover:border-violet-500"
                  }`}
                >
                  {exp.current && (
                    <div className="size-2 bg-violet-500 rounded-full">
                      <div className="size-2 bg-violet-500 rounded-full animate-ping" />
                    </div>
                  )}
                </div>

                {/* Content card */}
                <div className="glass-card p-6 md:p-8 hover:border-violet-200/50 dark:hover:border-violet-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-zinc-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-violet-600 dark:text-violet-400 font-medium text-sm">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full self-start ${
                        exp.current
                          ? "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg
                          className="size-5 shrink-0 mt-0.5 text-violet-500/60 dark:text-violet-400/60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.brands && (
                    <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        <span className="font-medium text-zinc-500 dark:text-zinc-400">Brands: </span>
                        {exp.brands}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
