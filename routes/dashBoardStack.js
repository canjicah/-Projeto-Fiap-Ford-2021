import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import dashBoard from '../screens/dashBoard';

const screens = {
  dashBoardStack: {
    screen: dashBoard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Dashboard' navigation={navigation} />
      }
    },
  },
}

const dashBoardStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#000080', height: 100 },
  }
});

export default dashBoardStack;