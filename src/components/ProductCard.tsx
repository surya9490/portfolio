import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
  title: string;
  link: string;
  image?: string | StaticImageData;
}

export default function ProductCard({ title, link, image }: ProductCardProps) {
  return (
    <div className="group relative bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image container with hover effect */}
      <div className="aspect-square bg-zinc-100 dark:bg-zinc-700 relative overflow-hidden">
        {image ? (
          <Image
            src={typeof image === 'string' ? image : image.src}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-zinc-400 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-normal text-zinc-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[rgb(222_29_141)] text-white rounded-md hover:bg-[rgb(222_29_141)]/90 transition-colors duration-300"
        >
          View Store
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
} 