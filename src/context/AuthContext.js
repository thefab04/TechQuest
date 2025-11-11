import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // Do not persist authentication across app restarts
    // Always start unauthenticated
  }, []);

  useEffect(() => {
    console.log('isAuthenticated changed:', isAuthenticated);
  }, [isAuthenticated]);

  const login = (token, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    localStorage.removeItem('guest');
    setIsAuthenticated(true);
    setIsGuest(false);
  };

  const guestLogin = () => {
    // Clear previous user data
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.setItem('guest', 'true');
    setIsAuthenticated(true);
    setIsGuest(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('guest');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setIsGuest(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isGuest, login, guestLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
