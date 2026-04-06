import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-bg pt-24 pb-12 overflow-hidden px-6">
      {/* Central Banner Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-7xl aspect-[21/9] md:aspect-[16/7] rounded-[3rem] overflow-hidden border border-brand-paper/5 shadow-2xl shadow-brand-olive/5"
      >
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-bg/50 z-10" />
          <img 
            src="/1.jpeg"
            alt="Exelus Sunscreen Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Overlaid on Banner */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col items-center space-y-6 md:space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 md:w-12 h-px bg-brand-olive/50" />
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-brand-olive font-bold">The New Standard</span>
              <div className="w-8 md:w-12 h-px bg-brand-olive/50" />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-paper leading-[0.9] tracking-tight">
              Pure <br />
              <span className="italic text-brand-olive font-light">Luminosity</span>
            </h1>
            
            <p className="text-brand-paper/80 max-w-xl leading-relaxed text-xs md:text-base mx-auto">
              Experience the ultimate protection with our Mineral Sun Shield. 
              Formulated with non-nano zinc oxide and potent antioxidants for a weightless, invisible finish.
            </p>
            
            <Link to="/shop" className="pt-4 md:pt-8">
              <button className="group flex flex-col items-center space-y-4">
                <div className="bg-brand-olive text-brand-ink px-8 md:px-12 py-3 md:py-5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.4em] font-black shadow-2xl shadow-brand-olive/20 hover:bg-white transition-all">
                  Explore Collection
                </div>
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative vertical text - positioned relative to the section */}
      <div className="absolute left-12 bottom-12 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.4em] text-brand-paper/30 font-bold hidden xl:block">
        Est. 2024 — Organic Skincare
      </div>
      <div className="absolute right-12 bottom-12 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.4em] text-brand-paper/30 font-bold hidden xl:block">
        Mineral Sun Shield — SPF 50+
      </div>
    </section>
  );
};
