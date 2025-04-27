'use client';

import ProductCard from './ProductCard';

interface Product {
  title: string;
  link: string;
  image?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product: Product, index: number) => (
        <ProductCard
          key={index}
          title={product.title}
          link={product.link}
          image={product.image}
        />
      ))}
    </div>
  );
} 