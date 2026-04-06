import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[100px] bg-brand-surface mb-6 border border-brand-paper/5">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        
        {/* Quick Add Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-4 right-4 bg-brand-olive text-brand-ink p-3 rounded-full shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:text-brand-olive z-10"
        >
          <Plus size={20} />
        </button>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-brand-paper/80 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full text-brand-ink">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-1 text-brand-olive">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
              className={i >= Math.floor(product.rating) ? "opacity-30" : ""}
            />
          ))}
          <span className="text-[10px] text-brand-paper/50 ml-1">({product.reviews})</span>
        </div>
        
        <h3 className="text-lg font-serif text-brand-paper group-hover:text-brand-olive transition-colors flex items-center justify-between">
          {product.name}
          <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
        
        <p className="text-brand-olive font-bold tracking-wider">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};
