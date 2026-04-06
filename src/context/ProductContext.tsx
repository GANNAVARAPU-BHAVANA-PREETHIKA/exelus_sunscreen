import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, products as initialProducts } from '../data/products';

interface ProductContextType {
  products: Product[];
  updateProduct: (updatedProduct: Product) => void;
  addProduct: (newProduct: Product) => void;
  deleteProduct: (id: string) => void;
  updateStock: (id: string, newStock: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const defaultProductImages = new Map(initialProducts.map((product) => [product.id, product.image]));

const normalizeProductImages = (savedProducts: Product[]) => {
  return savedProducts.map((product, index) => {
    const defaultImage = defaultProductImages.get(product.id);
    const fallbackImage = initialProducts[index % initialProducts.length]?.image ?? '/banner.jpeg';
    const normalizedImage = defaultImage ?? (product.image.startsWith('/') ? product.image : fallbackImage);

    return {
      ...product,
      image: normalizedImage,
    };
  });
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('exelus_products');
    return savedProducts ? normalizeProductImages(JSON.parse(savedProducts)) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('exelus_products', JSON.stringify(products));
  }, [products]);

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateStock = (id: string, newStock: number) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: newStock } : p));
  };

  return (
    <ProductContext.Provider value={{ products, updateProduct, addProduct, deleteProduct, updateStock }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
