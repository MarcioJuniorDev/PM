import React from "react";
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';
import AuthProvider from "./src/contexts/auth";

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}