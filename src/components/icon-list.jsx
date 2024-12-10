import Image from "next/image";
import Link from "next/link";

export default function IconList({ list }) {
  return (
    <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
      {list.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project._id}
          className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
        >
          <Image
            src={project.logo}
            width={60}
            height={60}
            alt={project.name}
            className="bg-zinc-800 rounded-md p-2"
          />
          <div>
            <h2 className="font-semibold mb-1">{project.name}</h2>
            {project && project.tagline && <div className="text-sm text-zinc-400">{project.tagline}</div>}
          </div>
        </Link>
      ))}
    </section>
  )
}