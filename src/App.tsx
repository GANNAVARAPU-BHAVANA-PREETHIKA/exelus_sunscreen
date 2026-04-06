import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { IngredientsPage } from './pages/Ingredients';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import { Admin } from './pages/Admin';
import { AdminLogin } from './pages/AdminLogin';
import { UserLogin } from './pages/UserLogin';
import { UserProfile } from './pages/UserProfile';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <OrderProvider>
          <CartProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <Cart />
              
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ingredients" element={<IngredientsPage />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/login" element={<UserLogin />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </OrderProvider>
    </ProductProvider>
  </AuthProvider>
  );
}

export default App;
