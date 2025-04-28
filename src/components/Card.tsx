import { ComponentPropsWithoutRef } from "react";
import grainImage from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: 'default' | 'glass';
}

export const Card = ({
  className,
  children,
  variant = 'default',
  ...other
}: CardProps) => {
  const variantClasses = {
    default: "bg-white dark:bg-gray-800",
    glass: "bg-white/10 dark:bg-zinc-800/10 backdrop-blur-md"
  };

  return (
    <div
      className={twMerge(
        `${variantClasses[variant]} rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-zinc-200/20 dark:after:outline-white/20 after:pointer-events-none transition-colors duration-300`,
        className
      )} 
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5 dark:opacity-10 transition-opacity duration-300"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
