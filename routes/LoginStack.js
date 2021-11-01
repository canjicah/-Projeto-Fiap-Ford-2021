import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Login from '../screens/login';

const screens = {
  About: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        
      }
    },
  },
}

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'white', height: 2 },
  }
});

export default LoginStack;