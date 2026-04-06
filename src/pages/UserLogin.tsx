import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, User, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { userLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, we just log them in with the provided name/email
    userLogin(email, isLogin ? 'Valued Customer' : name);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-6 pt-20">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-surface p-10 rounded-[2.5rem] border border-brand-paper/5 shadow-2xl"
        >
          <div className="text-center mb-10">
            <span className="text-brand-olive uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
              {isLogin ? 'Welcome Back' : 'Join the Ritual'}
            </span>
            <h1 className="text-4xl font-serif text-brand-paper mb-2">
              {isLogin ? 'Customer Login' : 'Create Account'}
            </h1>
            <p className="text-brand-paper/40 text-sm">
              {isLogin ? 'Access your personalized skincare journey' : 'Start your journey to radiant skin'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-paper/20" size={18} />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-paper/10 rounded-2xl py-4 pl-12 pr-4 text-brand-paper focus:border-brand-olive outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-paper/20" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-bg border border-brand-paper/10 rounded-2xl py-4 pl-12 pr-4 text-brand-paper focus:border-brand-olive outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-olive ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-paper/20" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-brand-bg border border-brand-paper/10 rounded-2xl py-4 pl-12 pr-4 text-brand-paper focus:border-brand-olive outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-olive text-brand-ink py-5 rounded-2xl text-xs uppercase tracking-[0.3em] font-black shadow-xl shadow-brand-olive/10 hover:bg-white transition-all flex items-center justify-center group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] uppercase tracking-widest font-bold text-brand-paper/40 hover:text-brand-olive transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 text-brand-paper/30">
            <CheckCircle2 size={16} className="text-brand-olive/40" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Exclusive Offers</span>
          </div>
          <div className="flex items-center space-x-3 text-brand-paper/30">
            <CheckCircle2 size={16} className="text-brand-olive/40" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Order Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};
