import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-brand-paper/10"
            >
              <img 
                src="/1.jpeg" 
                alt="Brand Story"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-brand-olive flex items-center justify-center p-8 text-center hidden md:flex"
            >
              <p className="text-brand-ink font-serif italic text-lg">
                "Beauty is a reflection of your inner health."
              </p>
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-7xl font-serif leading-tight text-brand-paper">
                Ethical Beauty, <br />
                <span className="italic opacity-80">Proven Results</span>
              </h2>
            </motion.div>
            <p className="text-brand-paper/70 leading-relaxed text-lg">
              Founded in 2022, Exelus was born from a desire to simplify skincare without sacrificing luxury or efficacy. We believe that what you put on your skin should be as clean as what you put in your body.
            </p>
            <p className="text-brand-paper/70 leading-relaxed">
              Our products are formulated in small batches in our California lab, ensuring the highest potency and freshness. Every ingredient is ethically sourced and dermatologically tested for all skin types.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-brand-paper">Cruelty Free</h4>
                <p className="text-xs text-brand-paper/50 uppercase tracking-widest font-bold">Leaping Bunny Certified</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-brand-paper">Sustainable</h4>
                <p className="text-xs text-brand-paper/50 uppercase tracking-widest font-bold">Recyclable Packaging</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-48 grid md:grid-cols-3 gap-16">
          <div className="text-center space-y-6">
            <div className="text-5xl font-serif text-brand-olive italic">01</div>
            <h3 className="text-2xl font-serif text-brand-paper">Transparency</h3>
            <p className="text-brand-paper/60 text-sm leading-relaxed">We list every single ingredient and its purpose. No hidden fillers, no secrets. Just pure, effective skincare.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="text-5xl font-serif text-brand-olive italic">02</div>
            <h3 className="text-2xl font-serif text-brand-paper">Innovation</h3>
            <p className="text-brand-paper/60 text-sm leading-relaxed">Our R&D team constantly explores new botanical extracts and stabilized actives to push the boundaries of clean beauty.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="text-5xl font-serif text-brand-olive italic">03</div>
            <h3 className="text-2xl font-serif text-brand-paper">Community</h3>
            <p className="text-brand-paper/60 text-sm leading-relaxed">Exelus is more than a brand; it's a collective of individuals committed to conscious self-care and radiant health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
