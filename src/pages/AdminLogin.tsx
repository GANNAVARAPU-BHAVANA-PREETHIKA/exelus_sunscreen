import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

export const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <span className="text-brand-olive uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Secure Access</span>
          <h1 className="text-5xl font-serif text-brand-paper mb-4">Admin Login</h1>
          <p className="text-brand-paper/40 text-sm font-light">Enter your credentials to access the Exelus console.</p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-brand-surface border border-brand-paper/5 rounded-[2.5rem] p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold ml-1">Admin Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-paper/30">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="••••••••"
                  className="w-full bg-brand-bg border border-brand-paper/10 rounded-2xl pl-12 pr-12 py-4 text-brand-paper focus:border-brand-olive outline-none transition-all placeholder:text-brand-paper/10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-paper/30 hover:text-brand-olive transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 text-red-400 bg-red-400/5 p-4 rounded-xl border border-red-400/10"
              >
                <AlertCircle size={16} />
                <span className="text-xs font-medium">{error}</span>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-brand-olive text-brand-ink py-5 rounded-2xl text-xs uppercase tracking-[0.3em] font-black shadow-xl shadow-brand-olive/10 hover:bg-white transition-colors"
            >
              Authenticate
            </motion.button>
          </form>
        </motion.div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-brand-paper/40 hover:text-brand-olive transition-colors text-[10px] uppercase tracking-widest font-bold"
          >
            Return to Storefront
          </button>
        </div>
      </div>
    </div>
  );
};
