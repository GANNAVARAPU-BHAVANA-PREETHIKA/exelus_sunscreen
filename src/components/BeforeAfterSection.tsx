import React, { useState } from 'react';
import { motion } from 'motion/react';

export const BeforeAfterSection = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-paper">Visible Transformation</h2>
          <p className="text-brand-paper/60">
            See the difference 4 weeks of our Radiance Routine can make. Our clinical studies show a 40% improvement in skin texture and 35% increase in luminosity.
          </p>
        </div>

        <div 
          className="relative aspect-video max-w-4xl mx-auto rounded-[40px] overflow-hidden cursor-ew-resize shadow-2xl border border-brand-paper/5"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <img 
            src="/3.jpeg" 
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="/5.jpeg" 
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-brand-olive z-10 flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-brand-olive shadow-xl flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-brand-bg rounded-full" />
                <div className="w-1 h-3 bg-brand-bg rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 z-20 bg-brand-paper/60 backdrop-blur-md text-brand-ink text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full border border-brand-ink/10">
            Before
          </div>
          <div className="absolute bottom-6 right-6 z-20 bg-brand-paper/60 backdrop-blur-md text-brand-ink text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full border border-brand-ink/10">
            After
          </div>
        </div>
      </div>
    </section>
  );
};
