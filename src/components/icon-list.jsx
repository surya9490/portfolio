import Image from "next/image";
import Link from "next/link";

export default function IconList({ list }) {
  return (
    <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
      {list &&list.map((project) => (
        <Link
          href={project.url}
          key={project.name}
          className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
        >
          <Image
            src={project.icon}
            width={60}
            height={60}
            alt={project.name}
            className="bg-zinc-800 rounded-md p-2 m-0"
          />
          <div>
            <h4 className="font-semibold m-0">{project.name}</h4>
            {project && project.tagline && <div className="text-sm text-zinc-400">{project.tagline}</div>}
          </div>
        </Link>
      ))}
    </section>
  )
}