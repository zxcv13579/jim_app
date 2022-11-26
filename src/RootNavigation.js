import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from './components/SideBar';
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './screens/WebViewScreen';
import PortfolioScreen from './screens/PortfolioScreen';
const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <SideBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="webview" component={WebViewScreen} />
      {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
    </Drawer.Navigator>
  );
};

export default RootNavigation;
