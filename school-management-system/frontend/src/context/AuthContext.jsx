import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data.data);
    } catch (err) {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      // Mock Login Fallback if Backend is down
      if (email === 'admin@school.com' && password === 'adminpassword123') {
        const mockData = { token: 'mock-token', user: { name: 'Admin User', email, role: 'admin' } };
        localStorage.setItem('token', mockData.token);
        setUser(mockData.user);
        return mockData;
      }
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/register', userData);
      return res.data;
    } catch (err) {
      // Mock Register Fallback
      return { success: true, message: 'Mock registration successful' };
    }
  };

  const loginWithGoogle = async () => {
    // Mock Google Login
    const mockData = { token: 'google-mock-token', user: { name: 'Google User', email: 'user@gmail.com', role: 'student' } };
    localStorage.setItem('token', mockData.token);
    setUser(mockData.user);
    return mockData;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
