export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) => {
  return (
    <>
      <div className="flex justify-center ">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 text-center bg-clip-text text-zinc-900 dark:text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-zinc-700 dark:text-white">
        {title}
      </h2>
      <p className="text-center text-zinc-500 dark:text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        {description}
      </p>
    </>
  );
};
