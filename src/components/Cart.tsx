import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-brand-paper/60 backdrop-blur-sm z-[100]"
      />

      {/* Cart Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-bg z-[101] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-5 sm:p-8 border-b border-brand-paper/5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <ShoppingBag size={24} className="text-brand-olive" />
            <h2 className="text-xl sm:text-2xl font-serif text-brand-paper whitespace-nowrap">Your Cart</h2>
            <span className="bg-brand-olive/10 text-brand-olive text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest whitespace-nowrap">
              {totalItems} Items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-brand-paper/5 rounded-full transition-colors text-brand-paper/40 hover:text-brand-paper"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-5 sm:p-8 space-y-6 sm:space-y-8 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-brand-paper/5 flex items-center justify-center text-brand-paper/20">
                <ShoppingBag size={40} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-paper mb-2">Your cart is empty</h3>
                <p className="text-brand-paper/40 text-sm max-w-[200px] mx-auto">Discover our collection and start your radiance journey.</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-brand-olive text-brand-ink px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 sm:gap-6"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-brand-surface border border-brand-paper/5 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-brand-paper leading-tight pr-2">{item.name}</h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-paper/20 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-brand-olive text-[10px] uppercase tracking-widest font-bold mb-4">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4 bg-brand-paper/5 rounded-full px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-brand-paper/40 hover:text-brand-olive transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold text-brand-paper w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-brand-paper/40 hover:text-brand-olive transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-brand-paper text-sm sm:text-base">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-8 border-t border-brand-paper/5 bg-brand-surface/50 backdrop-blur-md">
            <div className="flex items-center justify-between mb-8">
              <span className="text-brand-paper/40 uppercase tracking-widest text-xs font-bold">Subtotal</span>
              <span className="text-2xl font-serif text-brand-paper">₹{totalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full bg-brand-olive text-brand-ink py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] font-black shadow-xl shadow-brand-olive/10 hover:bg-white transition-colors">
              Checkout Now
            </button>
            <p className="text-center text-[10px] text-brand-paper/30 mt-6 uppercase tracking-widest">
              Free shipping on all luxury orders
            </p>
          </div>
        )}
      </div>
    </>
  );
};
