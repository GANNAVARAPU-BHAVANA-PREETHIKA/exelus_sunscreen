import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  isAdmin: boolean;
  user: User | null;
  login: (password: string) => boolean;
  userLogin: (email: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('exelus_admin_auth') === 'true';
  });

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('exelus_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('exelus_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const userLogin = (email: string, name: string) => {
    const newUser = { id: Math.random().toString(36).substr(2, 9), email, name };
    setUser(newUser);
    localStorage.setItem('exelus_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setIsAdmin(false);
    setUser(null);
    localStorage.removeItem('exelus_admin_auth');
    localStorage.removeItem('exelus_user');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, user, login, userLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
