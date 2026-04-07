import React from 'react';
import { Hero } from '../components/Hero';
import { SaleRibbon } from '../components/SaleRibbon';
import { IngredientsSection } from '../components/IngredientsSection';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-brand-bg">
      <Hero />
      <SaleRibbon />
      
      {/* Quick Collection Preview */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
          The Ritual
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-10 md:mb-16 text-brand-paper leading-tight">
          Experience the <span className="italic opacity-80">Exelus Glow</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[120px] lg:rounded-[150px] bg-brand-beige border border-brand-paper/5">
            <img src="/banner.jpeg" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" alt="Cleanse" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 text-center bg-gradient-to-t from-brand-bg/95 via-brand-bg/50 to-transparent">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-paper mb-3">Cleanse</h3>
              <p className="text-sm text-brand-paper/70 mb-6">Purify without stripping moisture.</p>
              <Link to="/shop" className="text-brand-olive text-xs uppercase tracking-widest font-bold flex items-center justify-center group-hover:text-brand-paper transition-colors">Shop Now <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[120px] lg:rounded-[150px] bg-brand-beige border border-brand-paper/5">
            <img src="/2.jpeg" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" alt="Treat" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 text-center bg-gradient-to-t from-brand-bg/95 via-brand-bg/50 to-transparent">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-paper mb-3">Treat</h3>
              <p className="text-sm text-brand-paper/70 mb-6">Targeted solutions for every concern.</p>
              <Link to="/shop" className="text-brand-olive text-xs uppercase tracking-widest font-bold flex items-center justify-center group-hover:text-brand-paper transition-colors">Shop Now <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] sm:rounded-[120px] lg:rounded-[150px] bg-brand-beige border border-brand-paper/5 sm:col-span-2 lg:col-span-1">
            <img src="/7.jpeg" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" alt="Hydrate" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 text-center bg-gradient-to-t from-brand-bg/95 via-brand-bg/50 to-transparent">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-paper mb-3">Hydrate</h3>
              <p className="text-sm text-brand-paper/70 mb-6">Lock in moisture for 24 hours.</p>
              <Link to="/shop" className="text-brand-olive text-xs uppercase tracking-widest font-bold flex items-center justify-center group-hover:text-brand-paper transition-colors">Shop Now <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </div>
        </div>
      </section>

      <IngredientsSection />
      <BeforeAfterSection />
    </div>
  );
};
