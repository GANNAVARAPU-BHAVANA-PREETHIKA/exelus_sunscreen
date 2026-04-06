import React from 'react';
import { motion } from 'motion/react';

export const SaleRibbon = () => {
  return (
    <div className="w-full bg-brand-olive overflow-hidden py-3 border-y border-brand-paper/10">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap items-center space-x-12"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-brand-ink">
              Spring Sale is Live — Up to 30% Off
            </span>
            <div className="w-2 h-2 rounded-full bg-brand-ink/30" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-brand-ink italic">
              Limited Time Only
            </span>
            <div className="w-2 h-2 rounded-full bg-brand-ink/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
