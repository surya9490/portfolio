"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import HtmlIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import JavascriptIcon from "../assets/icons/square-js.svg";
import ReactIcon from "../assets/icons/react.svg";
import GithubIcon from "../assets/icons/github.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import ShopifyIcon from "../assets/icons/shopify.svg";
import mapImage from "../assets/images/india-map.png";
import smileEmoj from "../assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/Toolboxitems";
import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const toolBoxItems = [
  { title: "Shopify / Liquid", iconType: ShopifyIcon },
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Chrome", iconType: ChromeIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Cooking", top: "5%", left: "50%", emoji: "🍳" },
  { title: "Traveling", top: "35%", left: "10%", emoji: "🌍" },
  { title: "Gaming", top: "40%", left: "35%", emoji: "🎮" },
  { title: "Reading", top: "45%", left: "70%", emoji: "📚" },
  { title: "Music", top: "65%", left: "5%", emoji: "🎵" },
  { title: "Sports", top: "70%", left: "45%", emoji: "🏀" },
];

const skills = [
  { category: "Shopify", items: ["Liquid", "Shopify CLI", "Shopify Plus", "Custom Apps", "Theme Development", "Sections & Blocks"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Redux", "Alpine.js", "Tailwind CSS"] },
  { category: "Performance", items: ["Core Web Vitals", "Page Speed", "Lazy Loading", "SEO Optimisation"] },
  { category: "Backend & Tools", items: ["Node.js", "SQL", "REST APIs", "Git", "GitHub", "Figma"] },
];

export const AboutSection = () => {
  const constrainRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do, and what drives me"
          />
        </ScrollReveal>

        <div className="mt-16 md:mt-20 flex flex-col gap-6">
          {/* Skills Grid */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="glass-card p-6 hover:border-violet-200/50 dark:hover:border-violet-500/20 transition-all duration-500"
                >
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider gradient-text mb-4">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Toolbox and Hobbies */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 lg:grid-cols-3">
            <ScrollReveal delay={0.15} className="md:col-span-3 lg:col-span-2">
              <div className="glass-card h-[320px] overflow-hidden">
                <CardHeader
                  title="My Toolbox"
                  description="Technologies I use to craft exceptional digital experiences"
                />
                <ToolBoxItems
                  items={toolBoxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolBoxItems
                  items={toolBoxItems}
                  className="mt-6"
                  itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="md:col-span-2 lg:col-span-1">
              <div className="glass-card h-[320px] p-0 relative overflow-hidden">
                <Image
                  src={mapImage}
                  alt="Map - Kakinada, India"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 animate-ping opacity-30 [animation-duration:2s]" />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20" />
                    <Image src={smileEmoj} alt="Location" className="size-20 relative" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 lg:grid-cols-3">
            <ScrollReveal delay={0.25} className="md:col-span-3 lg:col-span-2">
              <div className="glass-card h-[320px] p-0 flex flex-col overflow-hidden">
                <CardHeader
                  className="px-6 py-6"
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital world"
                />
                <div className="relative flex-1" ref={constrainRef}>
                  {hobbies.map((item) => (
                    <motion.div
                      drag
                      dragConstraints={constrainRef}
                      key={item.title}
                      className="inline-flex items-center gap-2 px-5 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing shadow-lg shadow-violet-500/20"
                      style={{ left: item.left, top: item.top }}
                    >
                      <span className="font-medium text-white text-sm">
                        {item.title}
                      </span>
                      <span>{item.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="md:col-span-2 lg:col-span-1">
              <div className="glass-card h-[320px] p-6 flex flex-col justify-center items-center text-center">
                <div className="mb-4">
                  <div className="size-16 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center mb-4 mx-auto">
                    <svg className="size-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-zinc-900 dark:text-white mb-2">
                    Certifications
                  </h4>
                </div>
                <div className="space-y-3 w-full">
                  <div className="glass-card px-4 py-3 rounded-xl">
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Stack Web Development</p>
                    <p className="text-xs text-zinc-400">NASSCOM</p>
                  </div>
                  <div className="glass-card px-4 py-3 rounded-xl">
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Shopify Theme Development</p>
                    <p className="text-xs text-zinc-400">Wizzah</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
