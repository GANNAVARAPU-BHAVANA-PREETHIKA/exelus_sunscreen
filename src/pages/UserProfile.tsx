import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, LogOut, Package, Heart, Settings, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const UserProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { icon: Package, label: 'Order History', description: 'Track and manage your orders' },
    { icon: Heart, label: 'Wishlist', description: 'Your favorite skincare rituals' },
    { icon: Settings, label: 'Account Settings', description: 'Update your profile and security' },
    { icon: Shield, label: 'Privacy', description: 'Manage your data and preferences' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 rounded-full bg-brand-surface border border-brand-paper/10 flex items-center justify-center text-brand-olive shadow-2xl">
              <User size={64} strokeWidth={1} />
            </div>
            <div className="text-center md:text-left">
              <span className="text-brand-olive uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Member Profile</span>
              <h1 className="text-5xl font-serif text-brand-paper mb-2">{user.name}</h1>
              <p className="text-brand-paper/40 text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 text-brand-paper/40 hover:text-red-400 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Sign Out</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-surface p-8 rounded-[2.5rem] border border-brand-paper/5 hover:border-brand-olive/20 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center text-brand-olive group-hover:scale-110 transition-transform">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-brand-paper mb-1">{item.label}</h3>
                    <p className="text-sm text-brand-paper/40 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-brand-paper/10 group-hover:text-brand-olive group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-12 rounded-[3rem] bg-brand-surface/50 border border-brand-paper/5 text-center">
          <h3 className="text-2xl font-serif text-brand-paper mb-4">Exelus Rewards</h3>
          <p className="text-brand-paper/40 text-sm mb-8 max-w-md mx-auto">
            You have <span className="text-brand-olive font-bold">450 points</span>. 
            Redeem them for exclusive products and early access to new collections.
          </p>
          <button className="bg-brand-olive text-brand-ink px-12 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all">
            View Rewards
          </button>
        </div>
      </div>
    </div>
  );
};
