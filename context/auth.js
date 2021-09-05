import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '@lib/api';
import Router, { useRouter } from 'next/router';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const validate = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const token = localStorage.getItem('token');

        if (!!token) {
          api.defaults.headers.Authorization = `Bearer ${token}`;
          await api.get('/studygroup');
          setUser(true);
          resolve(true);
        } else {
          setError(404);
          reject(false);
        }
      } catch (error) {
        const status = error.response.status;
        reject(false);
        setError(status);
      }
    });
  };

  useEffect(() => {
    const handleResetError = () => {
      setError(null);
    };

    const waitForValidation = () => {
      setLoading(true);
      validate().finally(() => {
        setLoading(false);
      });
    };

    router.events.on('routeChangeStart', handleResetError);
    waitForValidation();
    return () => {
      router.events.off('routeChangeStart', handleResetError);
    };
  }, []);

  const login = (payload) => {
    return new Promise(async (res, rej) => {
      setError(null);
      try {
        const response = await api.post('/user/login', payload);
        const token = response.data.data.token;
        api.defaults.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem('token', token);
        setUser(token);
        router.push('/');
        res();
      } catch (error) {
        // console.log(error.response.data);
        setError(error.response.data.data);
        rej(error.response.data.data);
      }
    });
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
