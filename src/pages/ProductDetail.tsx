import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingBag, ArrowLeft, Shield, Sparkles, Leaf, CheckCircle2 } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      window.scrollTo(0, 0);
    } else {
      navigate('/shop');
    }
  }, [id, products, navigate]);

  if (!product) return null;

  return (
    <div className="pt-32 min-h-screen bg-brand-bg pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-brand-paper/40 hover:text-brand-olive transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Collection</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[3/4] rounded-[40px] overflow-hidden bg-brand-surface border border-brand-paper/5"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-brand-paper/80 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full text-brand-ink border border-brand-ink/20">
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center space-x-2 text-brand-olive mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                    className={i >= Math.floor(product.rating) ? "opacity-30" : ""}
                  />
                ))}
                <span className="text-[10px] text-brand-paper/40 uppercase tracking-widest ml-2">
                  {product.reviews} Verified Reviews
                </span>
              </div>
              <h1 className="text-6xl font-serif text-brand-paper mb-6 leading-tight">{product.name}</h1>
              <p className="text-3xl font-serif text-brand-olive">₹{product.price.toLocaleString()}</p>
            </div>

            <p className="text-brand-paper/60 text-lg leading-relaxed max-w-xl">
              {product.description}
            </p>

            <div className="flex flex-col space-y-6 pt-4">
              <button 
                onClick={() => addToCart(product)}
                className="w-full max-w-md bg-brand-olive text-brand-ink py-6 rounded-2xl text-xs uppercase tracking-[0.4em] font-black shadow-2xl shadow-brand-olive/20 hover:bg-white transition-all flex items-center justify-center space-x-4 group"
              >
                <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                <span>Add to Collection</span>
              </button>
              <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest text-brand-paper/30 font-bold">
                <span className="flex items-center"><Shield size={14} className="mr-2 text-brand-olive/40" /> Secure Checkout</span>
                <span className="flex items-center"><Leaf size={14} className="mr-2 text-brand-olive/40" /> 100% Organic</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-brand-paper/5">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-olive font-bold mb-6 flex items-center">
                  <Sparkles size={14} className="mr-2" /> Key Benefits
                </h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-brand-paper/60">
                      <CheckCircle2 size={16} className="mr-3 text-brand-olive shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-olive font-bold mb-6 flex items-center">
                  <Leaf size={14} className="mr-2" /> Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, i) => (
                    <span key={i} className="bg-brand-paper/5 px-3 py-1.5 rounded-lg text-[10px] text-brand-paper/50 border border-brand-paper/5">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="mt-32 pt-32 border-t border-brand-paper/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <span className="text-brand-olive uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Testimonials</span>
              <h2 className="text-5xl font-serif text-brand-paper">Customer Reviews</h2>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="flex items-center justify-end space-x-1 text-brand-olive mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Based on {product.reviews} reviews</p>
              </div>
              <div className="h-12 w-px bg-brand-paper/10" />
              <div className="text-4xl font-serif text-brand-paper">{product.rating}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Elena V.", date: "2 days ago", comment: "Absolutely transformative. My skin has never looked more radiant and even-toned. A staple in my ritual.", rating: 5 },
              { name: "Marcus R.", date: "1 week ago", comment: "The texture is divine. It absorbs instantly and leaves a subtle glow that lasts all day. Worth every rupee.", rating: 5 },
              { name: "Sophia L.", date: "2 weeks ago", comment: "I've tried many luxury serums, but this one stands out for its purity and immediate results. Highly recommend.", rating: 4 }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-surface p-8 rounded-[40px] border border-brand-paper/5 relative group hover:border-brand-olive/20 transition-colors"
              >
                <div className="flex items-center space-x-1 text-brand-olive mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill={j < review.rating ? "currentColor" : "none"} className={j >= review.rating ? "opacity-30" : ""} />
                  ))}
                </div>
                <p className="text-brand-paper/70 italic leading-relaxed mb-8">"{review.comment}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-brand-paper/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-paper">{review.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-paper/30">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
