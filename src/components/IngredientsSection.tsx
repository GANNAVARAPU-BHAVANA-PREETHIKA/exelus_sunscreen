import React from 'react';
import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Sparkles, Leaf } from 'lucide-react';

const ingredients = [
  {
    name: 'Vitamin C',
    benefit: 'Brightening & Antioxidant',
    description: 'Neutralizes free radicals and boosts collagen production for a radiant, even skin tone.',
    icon: Sparkles
  },
  {
    name: 'Hyaluronic Acid',
    benefit: 'Deep Hydration',
    description: 'A moisture-binding molecule that holds up to 1000x its weight in water for plump, dewy skin.',
    icon: Droplets
  },
  {
    name: 'Niacinamide',
    benefit: 'Pore Refining',
    description: 'Vitamin B3 that strengthens the skin barrier, minimizes pores, and regulates oil production.',
    icon: ShieldCheck
  },
  {
    name: 'Bakuchiol',
    benefit: 'Natural Retinol Alternative',
    description: 'A plant-derived ingredient that provides anti-aging benefits without the irritation of retinol.',
    icon: Leaf
  }
];

export const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-16 md:py-24 bg-brand-surface text-brand-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
                The Science of Beauty
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6">
                Powered by <br />
                <span className="italic opacity-80">Pure Actives</span>
              </h2>
              <p className="text-brand-paper/70 leading-relaxed">
                We combine clinically proven synthetic actives with potent botanical extracts to create formulas that deliver visible results without compromise.
              </p>
            </motion.div>
            
            <div className="pt-8 border-t border-brand-paper/10">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif mb-1">100%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Vegan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif mb-1">0%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Parabens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif mb-1">98%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Natural</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {ingredients.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-bg/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl md:rounded-[40px] border border-brand-paper/5 hover:border-brand-olive/20 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-olive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-brand-olive">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-olive mb-4">
                  {item.benefit}
                </div>
                <p className="text-sm text-brand-paper/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
