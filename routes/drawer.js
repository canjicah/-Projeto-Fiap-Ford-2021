import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import DashBoardStack from './dashBoardStack';
import Login from './LoginStack';
import Map from './MapStack';
import Gastos from './gastosStack';
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Login:{
    screen: Login,
  },
  Gastos: {
    screen: Gastos,
  },
  Map:{
    screen: Map,
  },
  Home: {
    screen: HomeStack,
  },
  DashBoard: {
    screen: DashBoardStack,
  },
});


export default createAppContainer(RootDrawerNavigator);