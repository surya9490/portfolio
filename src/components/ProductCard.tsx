import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  title: string;
  link: string;
  image?: string | StaticImageData;
}

export default function ProductCard({ title, link, image }: ProductCardProps) {
  return (
    <div className="group glass-card overflow-hidden hover:border-violet-200/50 dark:hover:border-violet-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/5">
      {/* Image */}
      <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-800/50 relative overflow-hidden">
        {image ? (
          <Image
            src={typeof image === "string" ? image : image.src}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-zinc-300 dark:text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-heading font-bold text-zinc-900 dark:text-white mb-3">
          {title}
        </h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
        >
          View Store
          <svg
            className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
