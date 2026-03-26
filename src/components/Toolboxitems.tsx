import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";
import { Fragment } from "react";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-1 outline-zinc-200/50 dark:outline-zinc-800 rounded-lg hover:outline-violet-300/50 dark:hover:outline-violet-500/30 transition-colors duration-300"
              >
                <TechIcon component={item.iconType} />
                <span className="font-medium text-zinc-700 dark:text-zinc-300 text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
