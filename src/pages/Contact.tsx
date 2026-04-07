import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[10px] font-bold text-brand-olive mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-tight text-brand-paper">
                We'd Love to <br />
                <span className="italic opacity-80">Hear From You</span>
              </h2>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-brand-paper font-serif text-xl mb-1">Email Us</h4>
                  <p className="text-brand-paper/50 text-sm">hello@exelusskincare.com</p>
                  <p className="text-brand-paper/50 text-sm">support@exelusskincare.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-brand-paper font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-brand-paper/50 text-sm">+1 (888) LUMINA-GLOW</p>
                  <p className="text-brand-paper/50 text-sm">Mon-Fri: 9am - 6pm PST</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-brand-paper font-serif text-xl mb-1">Visit Us</h4>
                  <p className="text-brand-paper/50 text-sm">742 Radiant Way, Suite 100</p>
                  <p className="text-brand-paper/50 text-sm">Santa Monica, CA 90401</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-brand-surface p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-brand-paper/5"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-paper/20 py-3 focus:outline-none focus:border-brand-olive transition-colors text-brand-paper" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-paper/20 py-3 focus:outline-none focus:border-brand-olive transition-colors text-brand-paper" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-brand-paper/20 py-3 focus:outline-none focus:border-brand-olive transition-colors text-brand-paper" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-brand-paper/20 py-3 focus:outline-none focus:border-brand-olive transition-colors text-brand-paper resize-none" placeholder="How can we help you today?" />
              </div>
              <button className="w-full bg-brand-olive text-brand-ink py-4 sm:py-5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold flex items-center justify-center group hover:bg-white transition-colors">
                Send Message
                <Send size={18} className="ml-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
