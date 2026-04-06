import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { motion } from 'motion/react';

export const Shop = () => {
  const { products } = useProducts();

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
        <div className="max-w-lg">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-brand-paper">
            Curated for Your <br />
            <span className="italic opacity-80">Unique Skin Needs</span>
          </h2>
        </div>
        <div className="flex space-x-6">
          <button className="text-sm uppercase tracking-widest font-bold border-b-2 border-brand-olive pb-1 text-brand-paper">All Products</button>
          <button className="text-sm uppercase tracking-widest font-bold text-brand-paper/40 hover:text-brand-olive transition-colors pb-1">Best Sellers</button>
          <button className="text-sm uppercase tracking-widest font-bold text-brand-paper/40 hover:text-brand-olive transition-colors pb-1">New</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Featured Collection Banner */}
      <section className="mt-32">
        <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] flex items-center border border-brand-paper/5">
          <img 
            src="/6.jpeg" 
            alt="Collection Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-brand-ink/50" />
          <div className="relative z-10 px-12 md:px-24 text-brand-paper max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block text-brand-olive">Limited Edition</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">The Hydration <br /> Essentials Set</h2>
            <p className="text-brand-paper/80 mb-10 text-lg">A complete 4-step routine to restore moisture and strengthen your skin barrier. Save 20% when you buy the set.</p>
            <button className="bg-brand-olive text-brand-ink px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-brand-olive transition-colors">
              Shop the Set
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
