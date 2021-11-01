import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Map from '../screens/Map';

const screens = {
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Mapa Geral' navigation={navigation} />
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