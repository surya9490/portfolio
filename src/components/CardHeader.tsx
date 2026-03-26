import { twMerge } from "tailwind-merge";

export default function CardHeader({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <div className="size-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h3>
      </div>
      {description && (
        <p className="text-sm lg:text-base max-w-xs text-zinc-500 dark:text-zinc-400 mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
