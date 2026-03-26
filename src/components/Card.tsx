import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "glass-card relative z-0 overflow-hidden transition-all duration-500",
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
};
