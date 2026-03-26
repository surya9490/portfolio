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
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest text-sm gradient-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-heading text-3xl md:text-5xl text-center mt-4 text-zinc-900 dark:text-white font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-center text-zinc-500 dark:text-zinc-400 mt-4 md:text-lg max-w-xl mx-auto">
          {description}
        </p>
      )}
    </>
  );
};
