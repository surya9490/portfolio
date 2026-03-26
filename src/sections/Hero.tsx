"use client";

import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import StarIcon from "../assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "../assets/icons/sparkle.svg";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import CountUp from "@/components/CountUp";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Enterprise Brands" },
];

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Orbit rings */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-8 text-violet-500/30 dark:text-violet-400/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-cyan-500/30 dark:text-cyan-400/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-violet-500/30 dark:bg-violet-400/20"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-10 text-purple-500/30 dark:text-purple-400/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="3s">
          <StarIcon className="size-12 text-violet-600/40 dark:text-violet-400/30" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-cyan-600/40 dark:text-cyan-400/30" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-cyan-500/30 dark:bg-cyan-400/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-violet-500/20 dark:text-violet-400/10" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-purple-500/30 dark:bg-purple-400/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-violet-600/20 dark:text-violet-400/10" />
        </HeroOrbit>
      </div>

      {/* Main content */}
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Avatar + Status */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src={memojiImage}
                className="size-[100px] drop-shadow-lg"
                alt="Surya Kiran"
              />
              <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 rounded-full border-[3px] border-white dark:border-zinc-950">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            <div className="glass-card px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
              <div className="size-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1]">
              <span className="text-zinc-900 dark:text-white">Senior </span>
              <span className="gradient-text">Shopify Developer</span>
              <br />
              <span className="text-zinc-900 dark:text-white">&amp; Team Lead</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl text-balance leading-relaxed"
          >
            I build exceptional eCommerce experiences with Shopify, React &amp; modern web technologies.
            Delivering high-performing storefronts that drive conversions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <Link
              href="/shopify"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              View My Work
              <svg
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-card font-medium text-sm text-zinc-700 dark:text-zinc-300 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Let&apos;s Connect</span>
              <span className="text-lg">👋</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 grid grid-cols-3 gap-8 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />
    </div>
  );
};
