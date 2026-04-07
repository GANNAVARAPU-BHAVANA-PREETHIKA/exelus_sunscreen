import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { motion } from 'motion/react';

export const Shop = () => {
  const { products } = useProducts();

  return (
    <div className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16 gap-6">
        <div className="max-w-lg">
          <span className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight text-brand-paper">
            Curated for Your <br />
            <span className="italic opacity-80">Unique Skin Needs</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          <button className="text-sm uppercase tracking-widest font-bold border-b-2 border-brand-olive pb-1 text-brand-paper">All Products</button>
          <button className="text-sm uppercase tracking-widest font-bold text-brand-paper/40 hover:text-brand-olive transition-colors pb-1">Best Sellers</button>
          <button className="text-sm uppercase tracking-widest font-bold text-brand-paper/40 hover:text-brand-olive transition-colors pb-1">New</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Featured Collection Banner */}
      <section className="mt-20 md:mt-32">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[520px] md:min-h-0 md:aspect-[21/9] flex items-center border border-brand-paper/5">
          <img 
            src="/6.jpeg" 
            alt="Collection Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-brand-ink/50" />
          <div className="relative z-10 px-6 sm:px-10 md:px-24 py-12 text-brand-paper max-w-2xl">
            <span className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[10px] font-bold mb-4 block text-brand-olive">Limited Edition</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-8 leading-tight">The Hydration <br /> Essentials Set</h2>
            <p className="text-brand-paper/80 mb-8 md:mb-10 text-base md:text-lg">A complete 4-step routine to restore moisture and strengthen your skin barrier. Save 20% when you buy the set.</p>
            <button className="bg-brand-olive text-brand-ink px-8 md:px-10 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-brand-olive transition-colors">
              Shop the Set
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
