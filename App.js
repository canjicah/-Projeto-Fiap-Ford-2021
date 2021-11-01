import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import Gastos from './screens/gastos';
import Login from './screens/login';
export default function App() {
    return (
      <Navigator/>
  
    );
}