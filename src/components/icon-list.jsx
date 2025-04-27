import Image from "next/image";
import Link from "next/link";

export default function IconList({ list }) {
  return (
    <section className="grid xl:grid-cols-3 md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-5 mb-12">
      {list && list.map((project) => (
        <Link
          href={project.url}
          key={project.name}
          className="flex items-center gap-x-4 dark:bg-[#1d1d20] bg-white border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 p-4 rounded-lg ease-in-out transition-colors duration-300 no-underline"
        >
         
            <Image
              src={project.icon}
              width={60}
              height={60}
              alt={project.name}
              className="bg-zinc-800  rounded-md p-2 m-0 transition-colors duration-300"
            />
        
          <div>
            <h4 className="font-semibold m-0 dark:text-white text-zinc-900">{project.name}</h4>
            {project && project.tagline && (
              <div className="text-sm text-zinc-500 dark:text-zinc-400">{project.tagline}</div>
            )}
          </div>
        </Link>
      ))}
    </section>
  )
}