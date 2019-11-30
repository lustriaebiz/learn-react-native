
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

/**
 * screen
 */
import CekEmas from './../screen/CekEmas';
import CekOngkir from './../screen/CekOngkir';
import Home from './../screen/Home';
/** */

/**
 * routes
 */
const routeConfig = {
  Home : { screen : Home },
  Emas : { screen : CekEmas },
  Ongkir : { screen : CekOngkir }
};
/** */

/**
 * config
 */
const stackNavigatorConfig = {
  initialRouteName: 'Home',
}
/** */

const RootStack = createStackNavigator(routeConfig, stackNavigatorConfig);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
