import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerContent={props => <SideBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} /> */}
    </Drawer.Navigator>
  );
};

export default RootNavigation;
