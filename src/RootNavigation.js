import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import WebViewScreen from './screens/WebViewScreen';
const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="webview"
      // drawerContent={props => <SideBar {...props} />}
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="webview" component={WebViewScreen} />
      {/* <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} /> */}
    </Drawer.Navigator>
  );
};

export default RootNavigation;
