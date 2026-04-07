import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsCartOpen } = useCart();
  const { user } = useAuth();
  const { products } = useProducts();
  const location = useLocation();
  const navigate = useNavigate();

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-bg/95 backdrop-blur-xl z-[70] px-4 py-8 sm:p-12 flex flex-col items-center overflow-y-auto"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 sm:top-12 sm:right-12 text-brand-paper/40 hover:text-brand-olive transition-colors"
            >
              <X size={32} />
            </button>

            <div className="w-full max-w-3xl mt-20 sm:mt-24">
              <div className="relative">
                <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-brand-olive" size={22} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search our collection..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-paper/10 rounded-3xl sm:rounded-[2rem] py-4 sm:py-6 pl-12 sm:pl-16 pr-5 sm:pr-8 text-xl sm:text-2xl font-serif text-brand-paper focus:border-brand-olive outline-none transition-all shadow-2xl"
                />
              </div>

              {searchQuery && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 sm:mt-12 space-y-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-paper/30 ml-4">Suggested Products</span>
                  <div className="grid gap-4">
                    {filteredProducts.map(product => (
                      <button
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-3xl bg-brand-surface/50 border border-brand-paper/5 hover:border-brand-olive/20 transition-all group text-left"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-bg border border-brand-paper/10">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-serif text-brand-paper group-hover:text-brand-olive transition-colors">{product.name}</h4>
                          <p className="text-[10px] uppercase tracking-widest text-brand-olive/60 font-bold">{product.category}</p>
                        </div>
                        <ArrowRight size={20} className="text-brand-paper/10 group-hover:text-brand-olive group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                    {filteredProducts.length === 0 && (
                      <p className="text-center text-brand-paper/40 py-12 italic">No products found matching your search.</p>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={cn(
        "w-full transition-all duration-500",
        isScrolled ? "glass-nav py-3 md:py-4 shadow-sm" : "bg-transparent py-4 md:py-6"
      )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase text-brand-olive font-bold">
          Exelus
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-xs xl:text-sm uppercase tracking-widest font-medium transition-colors relative group",
                location.pathname === link.href ? "text-brand-olive" : "text-brand-paper/70 hover:text-brand-olive"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-brand-olive transition-all duration-300",
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-brand-paper/70 hover:text-brand-olive transition-colors p-1"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => navigate(user ? '/profile' : '/login')}
            className="text-brand-paper/70 hover:text-brand-olive transition-colors p-1 relative group"
          >
            <User size={20} strokeWidth={1.5} />
            {user && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-olive rounded-full border border-brand-bg" />
            )}
            {user && (
              <div className="absolute top-full right-0 mt-4 bg-brand-surface border border-brand-paper/10 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-paper/60">Hi, {user.name.split(' ')[0]}</span>
              </div>
            )}
          </button>
          <button 
            className="text-brand-paper/70 hover:text-brand-olive transition-colors relative cursor-pointer p-1"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-olive text-brand-ink text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            className="lg:hidden text-brand-paper/70 hover:text-brand-olive transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-bg z-[60] flex flex-col p-6 sm:p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif tracking-widest uppercase text-brand-olive font-bold">Exelus</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 sm:space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={cn(
                    "text-2xl sm:text-3xl font-serif transition-colors",
                    location.pathname === link.href ? "text-brand-olive" : "text-brand-paper hover:text-brand-olive"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
