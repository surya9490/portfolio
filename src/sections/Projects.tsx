import nasherMiles from "@/assets/images/nashermilesfinal.png";
import ucb from "@/assets/images/ucb-final.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "../assets/icons/check-circle.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Nasher Miles",
    year: "2024",
    title: "Shopify store",
    results: [
      { title: "Developed and maintained a Shopify store" },
      { title: "increased the mobile traffic by 35%" },
      { title: "improved the page speed by 50%" },
    ],
    link: "https://nashermiles.com/",
    image: nasherMiles,
  },
  {
    company: "United Colors of Benetton",
    year: "2024",
    title: "E-commerce store",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://in.benetton.com/",
    image: ucb,
  }
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center ">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 text-center bg-clip-text text-zinc-900 dark:text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-zinc-700 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-zinc-500 dark:text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          See how i transformed concepts into engaging digital experiences
        </p>
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 
                inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-zinc-900 dark:text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-zinc-500 dark:text-white/50 md:text-base"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span> {result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                inline-flex justify-center items-center gap-2 mt-8"
                    >
                      <span> Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
