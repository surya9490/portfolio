'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import HtmlIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import JavascriptIcon from "../assets/icons/square-js.svg";
import ReactIcon from "../assets/icons/react.svg";
import GithubIcon from "../assets/icons/github.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import mapImage from "../assets/images/map.png";
import smileEmoj from "../assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ShopifyIcon from "../assets/icons/shopify.svg";
import { ToolBoxItems } from "@/components/Toolboxitems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Shopify",
    iconType: ShopifyIcon,
  }
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cooking",
    top: "5%",
    left: "50%",
    emoji: "🍳",
  },
  {
    title: "Traveling",
    top: "35%",
    left: "10%",
    emoji: "🌍",
  },
  {
    title: "Gaming",
    top: "40%",
    left: "35%",
    emoji: "🎮",
  },
  {
    title: "Reading",
    top: "45%",
    left: "70%",
    emoji: "📚",
  },
  {
    title: "Music",
    top: "65%",
    left: "5%",
    emoji: "🎵",
  },
  {
    title: "Sports",
    top: "70%",
    left: "45%",
    emoji: "🏀",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about who I am and what I do"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description=" Explore the books shaping my perpspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="  Explore the technologies and tools i use to carft exceptional
                digital experiences"
              />

              <ToolBoxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my inerests and hobbies beyond the code"
              />

              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((item) => (
                 
                    <motion.div drag dragConstraints={constrainRef}
                      key={item.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: item.left,
                        top: item.top,
                      }}
                    >
                      <span className="font-medium text-zinc-900 dark:text-white">
                        {item.title}
                      </span>
                      <span>{item.emoji}</span>
                    </motion.div>
                 
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 -z-10"></div>
                <Image src={smileEmoj} alt="Smile Emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
