import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '@lib/api';
import Router, { useRouter } from 'next/router';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const validate = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(true);
      }
      setLoading(false);
    };

    const handleResetError = () => {
      setError(null);
    };

    router.events.on('routeChangeStart', handleResetError);
    validate();

    return () => {
      router.events.off('routeChangeStart', handleResetError);
    };
  }, []);

  const login = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/user/login', payload);

      api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;
      localStorage.setItem('token', response.data.data.token);
      setUser(response.data.data.token);
      router.push('/');
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    delete api.defaults.headers.Authorization;
  };

  return (
    <AuthenticationContext.Provider
      value={{
        login,
        logout,
        isLoggedIn: !!user,
        isLoading: loading,
        user: user,
        error,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticationContext);
