import React, { createContext, useContext, useState, useEffect } from 'react';

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  date: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date' | 'status'>) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  deleteOrder: (orderId: string) => void;
  getUserOrders: (email: string) => Order[];
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem('exelus_orders');
    if (savedOrders) return JSON.parse(savedOrders);
    
    // Initial mock orders if none exist
    return [
      { 
        id: 'ORD-7721', 
        customerId: 'user-1',
        customerName: 'Ananya Sharma', 
        customerEmail: 'ananya@example.com',
        date: '2024-03-20', 
        total: 4200, 
        status: 'Delivered',
        items: []
      },
      { 
        id: 'ORD-8812', 
        customerId: 'user-2',
        customerName: 'Rahul Verma', 
        customerEmail: 'rahul@example.com',
        date: '2024-03-21', 
        total: 1850, 
        status: 'Processing',
        items: []
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('exelus_orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderData: Omit<Order, 'id' | 'date' | 'status'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const deleteOrder = (orderId: string) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  };

  const getUserOrders = (email: string) => {
    return orders.filter(order => order.customerEmail === email);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, deleteOrder, getUserOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
