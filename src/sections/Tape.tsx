import { Fragment } from "react";
import StarIcon from "../assets/icons/star.svg";

const words = [
  "Shopify Expert",
  "Performance",
  "Responsive",
  "Accessible",
  "Scalable",
  "Custom Themes",
  "SEO Optimised",
  "API Integrations",
  "Liquid",
  "React",
  "Conversion Focused",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-20 overflow-x-clip">
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(4)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm tracking-wide">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-12 text-white/60" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
