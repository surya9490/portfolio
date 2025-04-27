'use client';

import ProductCard from './ProductCard';
import { StaticImageData } from 'next/image';

interface Project {
  title: string;
  link: string;
  image: string | StaticImageData;
  tags: string[];
}

interface ProductGridProps {
  products: Project[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product: Project, index: number) => (
        <ProductCard
          key={index}
          title={product.title}
          link={product.link}
          image={typeof product.image === 'string' ? product.image : product.image.src}
        />
      ))}
    </div>
  );
}