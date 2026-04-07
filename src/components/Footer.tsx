import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-paper text-brand-ink pt-16 md:pt-24 pb-10 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="text-3xl font-serif tracking-widest uppercase font-bold">
              Exelus
            </Link>
            <p className="text-brand-ink/70 text-sm leading-relaxed max-w-xs">
              Elevating skincare to a ritual of self-care. Science-backed, botanical-infused, and dermatologically tested for your most radiant skin.
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-ink/60 hover:text-brand-ink transition-colors"><Instagram size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-ink/60 hover:text-brand-ink transition-colors"><Twitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-ink/60 hover:text-brand-ink transition-colors"><Linkedin size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-brand-ink/60 hover:text-brand-ink transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-ink/70">
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Skincare Sets</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-brand-ink/70">
              <li><Link to="/contact" className="hover:text-brand-ink transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-brand-ink transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-brand-ink transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-ink transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-ink transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h4>
            <p className="text-brand-ink/70 text-sm mb-6">Join our community for exclusive offers and skincare tips.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-brand-ink/5 border-b border-brand-ink/20 py-3 pr-10 text-sm focus:outline-none focus:border-brand-ink transition-colors text-brand-ink"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-ink/60 hover:text-brand-ink transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-brand-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-widest text-brand-ink/50 leading-relaxed">
            © 2026 Exelus Skincare. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8 text-[10px] uppercase tracking-widest text-brand-ink/50">
            <span>Cruelty Free</span>
            <span>Vegan</span>
            <span>Eco-Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
