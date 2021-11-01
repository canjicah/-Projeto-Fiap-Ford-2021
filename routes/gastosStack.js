import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Gastos from '../screens/gastos';

const screens = {
  Gastos: {
    screen: Gastos,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Gastos' navigation={navigation} />
      }
    },
  },
}

const MapStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#000080', height: 100 },
  }
});

export default MapStack;