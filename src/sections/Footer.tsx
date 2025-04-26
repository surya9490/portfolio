import ArrowUpRight from "../assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-clip">
      <div
        className="absolute inset-0 -z-10 h-[100px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] "
      ></div>
      <div className="container">
        <div className="border-t border-zinc-200 dark:border-white/15 py-6 text-sm flex felx-row justify-between items-c gap-8">
          <div className="text-zinc-500 dark:text-white/40">© 2024, All rights reserved.</div>
          <nav className=" flex flex-row items-center justify-between gap-8">
            <a href="https://www.linkedin.com/in/surya-kiran-palipireddy-0bb873217" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-white">
              <span className="font-semibold">Linkedin</span>
              <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
