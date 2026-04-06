import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Verified Buyer",
    text: "The Radiance Serum has completely changed my morning ritual. My skin feels brighter and more hydrated than ever before. Truly a luxury experience.",
    rating: 5,
    image: "/3.jpeg"
  },
  {
    name: "James Chen",
    role: "Skin Enthusiast",
    text: "I've tried dozens of cleansers, but the Gentle Oat Cleanser is the only one that doesn't leave my skin feeling tight. It's incredibly soothing.",
    rating: 5,
    image: "/5.jpeg"
  },
  {
    name: "Sarah Miller",
    role: "Dermatologist",
    text: "As a professional, I'm impressed by the ingredient transparency and the clinical efficacy of Exelus formulations. Highly recommended.",
    rating: 5,
    image: "/1.jpeg"
  },
  {
    name: "Michael Ross",
    role: "Verified Buyer",
    text: "The Mineral Sun Shield is the first SPF I've used that actually feels like a high-end moisturizer. No white cast, just a healthy glow.",
    rating: 5,
    image: "/2.jpeg"
  },
  {
    name: "Aisha Khan",
    role: "Beauty Blogger",
    text: "I love the philosophy behind Exelus. The Overnight Retinol Oil is my holy grail for texture and fine lines. It's magic in a bottle.",
    rating: 5,
    image: "/4.jpeg"
  },
  {
    name: "David Park",
    role: "Verified Buyer",
    text: "Simple, effective, and beautiful packaging. Exelus has made my skincare routine something I actually look forward to every day.",
    rating: 5,
    image: "/6.jpeg"
  }
];

export const Reviews = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
            Community Love
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-brand-paper mb-6">Real Stories, <br /><span className="italic opacity-80">Real Results</span></h2>
          <p className="text-brand-paper/60 max-w-2xl mx-auto">Join thousands of satisfied customers who have transformed their skin with Exelus science-backed rituals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-surface p-10 rounded-[2.5rem] shadow-sm relative border border-brand-paper/5 hover:border-brand-olive/20 transition-colors group"
            >
              <Quote className="absolute top-8 right-8 text-brand-olive/10 group-hover:text-brand-olive/20 transition-colors" size={48} />
              <div className="flex items-center space-x-4 mb-8">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-olive/20" />
                <div>
                  <h4 className="font-serif text-lg text-brand-paper">{t.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-olive/60">{t.role}</span>
                </div>
              </div>
              <div className="flex space-x-1 text-brand-olive mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-paper/70 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
