import React from 'react';
import { IngredientsSection } from '../components/IngredientsSection';

export const IngredientsPage = () => {
  return (
    <div className="pt-28">
      <IngredientsSection />
      
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
            Our Standards
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-brand-paper mb-6 leading-tight">Clean Beauty <br /><span className="italic opacity-80">Without Compromise</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-brand-surface p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-brand-paper/5">
            <h3 className="text-2xl font-serif text-brand-paper mb-6">What We Include</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-brand-paper/70">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mr-4" />
                Clinically proven active ingredients
              </li>
              <li className="flex items-center text-brand-paper/70">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mr-4" />
                Sustainably sourced botanical extracts
              </li>
              <li className="flex items-center text-brand-paper/70">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mr-4" />
                Natural preservatives and stabilizers
              </li>
              <li className="flex items-center text-brand-paper/70">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive mr-4" />
                Cold-pressed organic oils
              </li>
            </ul>
          </div>
          <div className="bg-brand-surface p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-brand-paper/5">
            <h3 className="text-2xl font-serif text-brand-paper mb-6">What We Exclude</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-brand-paper/70 opacity-50">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-4" />
                Parabens and Sulfates
              </li>
              <li className="flex items-center text-brand-paper/70 opacity-50">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-4" />
                Synthetic Fragrances and Dyes
              </li>
              <li className="flex items-center text-brand-paper/70 opacity-50">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-4" />
                Phthalates and Formaldehyde
              </li>
              <li className="flex items-center text-brand-paper/70 opacity-50">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-4" />
                Mineral Oils and Silicones
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
