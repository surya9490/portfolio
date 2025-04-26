import { Fragment } from "react";
import StarIcon from "../assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User-Friendly",
  "Maintainable",
  "Responsive",
  "Search Optimized",
  "Usable",
  "Reusable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(4)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-zinc-900 dark:text-white uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-12 fill-[url(#tape-icon-gradient)]" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <svg className="size-0">
        <linearGradient id="tape-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </div>
  );
};
