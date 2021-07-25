import React, { createContext, useContext, useEffect, useState } from 'react';
// import api from '@lib/api';
import Router, { useRouter } from 'next/router';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState('aang');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // const validate = async () => {
    //   setLoading(true);
    //   const token = localStorage.getItem('token');
    //   api.defaults.headers.Authorization = `Bearer ${token}`;
    //   try {
    //     const response = await api.get('/auth/validate');
    //     setUser(response.data.data);
    //   } catch (error) {
    //     console.log(error.data);
    //   }
    //   setLoading(false);
    // };

    const handleResetError = () => {
      setError(null);
    };

    router.events.on('routeChangeStart', handleResetError);
    // validate();

    return () => {
      router.events.off('routeChangeStart', handleResetError);
    };
  }, []);

  const login = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/login', payload);

      api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;
      localStorage.setItem('token', response.data.data.token);

      setUser(response.data.data);
      router.push('/');
    } catch (error) {
      setError(error.response.data.errors[0]);
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    // delete api.defaults.headers.Authorization;
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
