"use client";

import surya from "@/assets/images/surya.jpg";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { name: "Shopify / Liquid", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "HTML5 / CSS3 / Tailwind", level: 95 },
  { name: "Alpine.js", level: 80 },
  { name: "Node.js / REST APIs", level: 75 },
  { name: "Git / GitHub", level: 90 },
  { name: "Figma", level: 80 },
];

const education = [
  { degree: "Bachelor of Arts", institution: "Osmania University, Hyderabad", year: "2013 - 2016", score: "70%" },
  { degree: "Intermediate (MPC)", institution: "Sri Chaitanya Jr. College, Vijayawada", year: "2011 - 2013", score: "93%" },
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="uppercase font-semibold tracking-widest text-sm gradient-text mb-4">
              About Me
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
              Surya Kiran
              <br />
              <span className="gradient-text">Palipireddy</span>
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Senior Shopify Developer &amp; Team Lead
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Photo + Quick Info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="glass-card overflow-hidden rounded-2xl mb-6">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={surya}
                    alt="Surya Kiran Palipireddy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quick info */}
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                    <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Location</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Kakinada, Andhra Pradesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                    <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Email</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">suryakiran0257@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                    <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Phone</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">+91 8886999441</p>
                  </div>
                </div>

                <a
                  href="/documents/resume.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 mt-2"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Bio */}
            <ScrollReveal direction="right">
              <div className="glass-card p-8">
                <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Professional Summary
                </h2>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Senior Shopify Developer and Team Lead with 3+ years of experience
                    delivering 50+ successful eCommerce projects for DTC and enterprise
                    brands. I specialise in owning the full project lifecycle — from
                    requirements gathering and sprint planning to development and on-time delivery.
                  </p>
                  <p>
                    I have a proven record of improving page speed and conversion rates,
                    leading complex store migrations, and building custom Shopify apps.
                    My hands-on expertise spans Liquid, React, JavaScript, Alpine.js, and
                    third-party API integrations.
                  </p>
                  <p>
                    Previously at Amazon Development Center, I was recognised as a Top
                    Global Performer for high-impact process improvements. I bring the
                    same dedication to delivering exceptional eCommerce experiences for
                    every client.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="glass-card p-8">
                <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  Technical Skills
                </h2>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-card p-8">
                <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.degree} className="flex gap-4">
                      <div className="size-10 shrink-0 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                        <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-zinc-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
                        <p className="text-xs text-zinc-400 mt-1">{edu.year} &bull; {edu.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal direction="right" delay={0.25}>
              <div className="glass-card p-8">
                <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Languages
                </h2>
                <div className="flex gap-4">
                  <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    English &mdash; Professional
                  </span>
                  <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Telugu &mdash; Native
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
