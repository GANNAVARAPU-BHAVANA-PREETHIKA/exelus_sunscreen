import React, { useState, useEffect, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Edit2, Trash2, Plus, Save, X, Package, DollarSign, Tag, Star, LogOut, 
  Search, Filter, LayoutDashboard, ShoppingBag, Users, TrendingUp, AlertTriangle,
  CheckCircle, Clock, ChevronRight
} from 'lucide-react';
import { Product } from '../data/products';
import { useOrders, OrderStatus } from '../context/OrderContext';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, PieChart, Pie
} from 'recharts';

type AdminTab = 'dashboard' | 'products' | 'orders';

export const Admin = () => {
  const { products, updateProduct, addProduct, deleteProduct } = useProducts();
  const { orders, updateOrderStatus } = useOrders();
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Dashboard Stats
  const stats = useMemo(() => {
    const totalValue = products.reduce((acc, p) => acc + (p.price * p.stock), 0);
    const lowStock = products.filter(p => p.stock < 10).length;
    const totalSales = orders.reduce((acc, o) => o.status !== 'Cancelled' ? acc + o.total : acc, 0);
    
    return [
      { label: 'Total Products', value: products.length, icon: Package, color: 'text-blue-400' },
      { label: 'Inventory Value', value: `₹${totalValue.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-400' },
      { label: 'Total Sales', value: `₹${totalSales.toLocaleString()}`, icon: ShoppingBag, color: 'text-brand-olive' },
      { label: 'Low Stock Items', value: lowStock, icon: AlertTriangle, color: 'text-amber-400' },
    ];
  }, [products, orders]);

  // Chart Data
  const stockData = useMemo(() => {
    return products.map(p => ({
      name: p.name.length > 15 ? p.name.substring(0, 12) + '...' : p.name,
      stock: p.stock,
      fullName: p.name
    })).sort((a, b) => a.stock - b.stock).slice(0, 8);
  }, [products]);

  const salesData = useMemo(() => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toISOString().split('T')[0];
    }).reverse();

    return last7Days.map(date => {
      const dayTotal = orders
        .filter(o => o.date === date && o.status !== 'Cancelled')
        .reduce((acc, o) => acc + o.total, 0);
      return {
        date: new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
        sales: dayTotal
      };
    });
  }, [orders]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, categoryFilter]);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm({ ...product });
  };

  const handleSave = () => {
    if (editForm) {
      updateProduct(editForm);
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleAdd = () => {
    const newProduct: Product = {
      id: Math.random().toString(36).substring(2, 9),
      name: 'New Product',
      category: 'Uncategorized',
      price: 0,
      rating: 5,
      reviews: 0,
      image: '/7.jpeg',
      description: '',
      ingredients: [],
      benefits: [],
      stock: 0
    };
    addProduct(newProduct);
    handleEdit(newProduct);
    setActiveTab('products');
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-bg px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <span className="text-brand-olive uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Management</span>
            <h1 className="text-5xl font-serif text-brand-paper">Admin Console</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex bg-brand-surface p-1 rounded-full border border-brand-paper/5">
              {(['dashboard', 'products', 'orders'] as AdminTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                    activeTab === tab 
                      ? 'bg-brand-olive text-brand-ink' 
                      : 'text-brand-paper/40 hover:text-brand-paper'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="text-brand-paper/40 hover:text-red-400 p-3 rounded-full transition-colors bg-brand-surface border border-brand-paper/5"
              title="Logout"
            >
              <LogOut size={18} />
            </motion.button>
          </div>
        </div>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-brand-surface border border-brand-paper/5 p-6 rounded-3xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-brand-bg ${stat.color}`}>
                      <stat.icon size={20} />
                    </div>
                    <TrendingUp size={16} className="text-emerald-400 opacity-50" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-paper/40 block mb-1">{stat.label}</span>
                  <span className="text-2xl font-serif text-brand-paper">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-brand-surface border border-brand-paper/5 p-8 rounded-3xl">
                <h3 className="text-xl font-serif text-brand-paper mb-8">Stock Inventory Levels</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stockData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        stroke="#ffffff40" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#ffffff40" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                        itemStyle={{ color: '#c5b358' }}
                      />
                      <Bar dataKey="stock" radius={[4, 4, 0, 0]}>
                        {stockData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.stock < 10 ? '#f87171' : '#c5b358'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-brand-surface border border-brand-paper/5 p-8 rounded-3xl">
                <h3 className="text-xl font-serif text-brand-paper mb-8">Sales Trend (Last 7 Days)</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis 
                        dataKey="date" 
                        stroke="#ffffff40" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#ffffff40" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                        itemStyle={{ color: '#c5b358' }}
                        formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Sales']}
                      />
                      <Bar dataKey="sales" fill="#c5b358" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Products View */}
        {activeTab === 'products' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-paper/30" size={18} />
                <input 
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-paper/5 rounded-2xl pl-12 pr-4 py-4 text-brand-paper focus:border-brand-olive outline-none transition-all"
                />
              </div>
              <div className="flex space-x-4">
                <div className="relative min-w-[160px]">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-paper/30" size={16} />
                  <select 
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-paper/5 rounded-2xl pl-12 pr-4 py-4 text-brand-paper appearance-none focus:border-brand-olive outline-none transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <button 
                  onClick={handleAdd}
                  className="bg-brand-olive text-brand-ink px-8 py-4 rounded-2xl text-xs uppercase tracking-widest font-bold flex items-center whitespace-nowrap"
                >
                  <Plus size={16} className="mr-2" /> Add New
                </button>
              </div>
            </div>

            {/* Products List */}
            <div className="grid gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-brand-surface border border-brand-paper/5 rounded-3xl p-6 md:p-8"
                  >
                    {editingId === product.id ? (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 mb-2 block">Product Name</label>
                            <input
                              type="text"
                              value={editForm?.name}
                              onChange={(e) => setEditForm(prev => prev ? { ...prev, name: e.target.value } : null)}
                              className="w-full bg-brand-bg border border-brand-paper/10 rounded-xl px-4 py-3 text-brand-paper focus:border-brand-olive outline-none transition-colors"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 mb-2 block">Price (₹)</label>
                              <input
                                type="number"
                                value={editForm?.price}
                                onChange={(e) => setEditForm(prev => prev ? { ...prev, price: Number(e.target.value) } : null)}
                                className="w-full bg-brand-bg border border-brand-paper/10 rounded-xl px-4 py-3 text-brand-paper focus:border-brand-olive outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 mb-2 block">Stock</label>
                              <input
                                type="number"
                                value={editForm?.stock}
                                onChange={(e) => setEditForm(prev => prev ? { ...prev, stock: Number(e.target.value) } : null)}
                                className="w-full bg-brand-bg border border-brand-paper/10 rounded-xl px-4 py-3 text-brand-paper focus:border-brand-olive outline-none transition-colors"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 mb-2 block">Category</label>
                            <input
                              type="text"
                              value={editForm?.category}
                              onChange={(e) => setEditForm(prev => prev ? { ...prev, category: e.target.value } : null)}
                              className="w-full bg-brand-bg border border-brand-paper/10 rounded-xl px-4 py-3 text-brand-paper focus:border-brand-olive outline-none transition-colors"
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 mb-2 block">Image URL</label>
                            <input
                              type="text"
                              value={editForm?.image}
                              onChange={(e) => setEditForm(prev => prev ? { ...prev, image: e.target.value } : null)}
                              className="w-full bg-brand-bg border border-brand-paper/10 rounded-xl px-4 py-3 text-brand-paper focus:border-brand-olive outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase tracking-widest text-brand-paper/40 mb-2 block">Description</label>
                            <textarea
                              value={editForm?.description}
                              onChange={(e) => setEditForm(prev => prev ? { ...prev, description: e.target.value } : null)}
                              className="w-full bg-brand-bg border border-brand-paper/10 rounded-xl px-4 py-3 text-brand-paper focus:border-brand-olive outline-none transition-colors h-32 resize-none"
                            />
                          </div>
                          <div className="flex justify-end space-x-4 pt-4">
                            <button
                              onClick={() => setEditingId(null)}
                              className="text-brand-paper/60 hover:text-brand-paper transition-colors uppercase tracking-widest text-[10px] font-bold"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSave}
                              className="bg-brand-olive text-brand-ink px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center"
                            >
                              <Save size={14} className="mr-2" /> Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-bg border border-brand-paper/10 flex-shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-serif text-brand-paper mb-1">{product.name}</h3>
                              <p className="text-brand-olive text-[10px] uppercase tracking-widest font-bold">{product.category}</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-end space-x-6 mt-4 md:mt-0">
                              <div className="text-center">
                                <span className="text-[10px] uppercase tracking-widest text-brand-paper/40 block mb-1">Price</span>
                                <span className="text-brand-paper font-bold">₹{product.price.toLocaleString()}</span>
                              </div>
                              <div className="text-center">
                                <span className="text-[10px] uppercase tracking-widest text-brand-paper/40 block mb-1">Stock</span>
                                <span className={`font-bold ${product.stock < 10 ? 'text-red-400' : 'text-brand-paper'}`}>
                                  {product.stock} units
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-brand-paper/60 line-clamp-2 mb-6">{product.description}</p>
                          <div className="flex items-center justify-center md:justify-start space-x-4">
                            <button
                              onClick={() => handleEdit(product)}
                              className="p-3 rounded-full bg-brand-paper/5 text-brand-paper hover:bg-brand-olive hover:text-brand-ink transition-all"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="p-3 rounded-full bg-brand-paper/5 text-brand-paper hover:bg-red-500/20 hover:text-red-400 transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredProducts.length === 0 && (
                <div className="py-24 text-center">
                  <Package className="mx-auto text-brand-paper/10 mb-4" size={48} />
                  <p className="text-brand-paper/40 font-serif text-xl">No products found matching your search.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Orders View (Mock) */}
        {activeTab === 'orders' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-brand-surface border border-brand-paper/5 rounded-3xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-brand-paper/5">
                    <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Order ID</th>
                    <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Customer</th>
                    <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Date</th>
                    <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Total</th>
                    <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Status</th>
                    <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-brand-paper/40 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-brand-paper/5 hover:bg-brand-paper/[0.02] transition-colors group">
                      <td className="px-8 py-6 text-brand-paper font-mono text-sm">{order.id}</td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-brand-paper text-sm">{order.customerName}</span>
                          <span className="text-brand-paper/40 text-[10px]">{order.customerEmail}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-brand-paper/60 text-sm">{order.date}</td>
                      <td className="px-8 py-6 text-brand-paper font-bold text-sm">₹{order.total.toLocaleString()}</td>
                      <td className="px-8 py-6">
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                          className={`px-3 py-1 rounded-full text-[8px] uppercase tracking-widest font-black bg-brand-bg border border-brand-paper/10 outline-none cursor-pointer transition-all ${
                            order.status === 'Delivered' ? 'text-emerald-400 border-emerald-500/20' :
                            order.status === 'Processing' ? 'text-blue-400 border-blue-500/20' :
                            order.status === 'Shipped' ? 'text-brand-olive/40 border-brand-olive/20' :
                            order.status === 'Cancelled' ? 'text-red-400 border-red-500/20' :
                            'text-amber-400 border-amber-500/20'
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-8 py-6">
                        <button className="text-brand-paper/40 hover:text-brand-olive transition-colors">
                          <ChevronRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-brand-olive/5 border border-brand-olive/10 p-6 rounded-3xl flex items-center space-x-4">
              <div className="p-3 bg-brand-olive/10 rounded-2xl text-brand-olive">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-brand-paper font-serif">Order Sync Active</h4>
                <p className="text-xs text-brand-paper/60">Orders are automatically synced from the storefront every 5 minutes.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
