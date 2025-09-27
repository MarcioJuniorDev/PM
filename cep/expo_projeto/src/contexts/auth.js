import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const API_URL = 'http://192.168.0.14:3333'; // IP da sua máquina

  useEffect(() => {
    async function loadStorage() {
      try {
        const storageUser = await AsyncStorage.getItem('Auth_user');
        if (storageUser) setUser(JSON.parse(storageUser));
      } catch (err) {
        console.log('Erro ao carregar usuário do AsyncStorage:', err);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function signUp(email, password, extraData) {
    setLoadingAuth(true);
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, ...extraData }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
      } else {
        console.log('Erro no cadastro:', data);
        Alert.alert('Erro', data.message || 'Não foi possível cadastrar');
      }
    } catch (err) {
      console.log('Erro na requisição signUp:', err);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
    setLoadingAuth(false);
  }

  async function signIn(email, password) {
    setLoadingAuth(true);
    try {
      const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok && data.length > 0) {
        setUser(data[0]);
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data[0]));
      } else {
        console.log('Erro no login:', data);
        Alert.alert('Erro', 'Email ou senha incorretos');
      }
    } catch (err) {
      console.log('Erro na requisição signIn:', err);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
    setLoadingAuth(false);
  }

  async function signOut() {
    try {
      await AsyncStorage.clear();
      setUser(null);
    } catch (err) {
      console.log('Erro ao sair:', err);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}