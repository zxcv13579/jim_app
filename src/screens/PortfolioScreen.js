import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Heading, VStack} from 'native-base';
import Masthead from '../components/Masthead';
import SideBarToggle from '../components/SideBarToggle';
import imgSource from '../images/portfolioImg.png';
import {portfolioData} from '../constants';
import FlatListBox from '../components/FlatListBox';
import WebViewScreen from './WebViewScreen';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Box flex={1}>
      <Masthead imgSource={imgSource} title={'作品集'}>
        <SideBarToggle />
      </Masthead>
      <VStack alignItems="center" p={4}>
        <Heading
          size={'xl'}
          borderBottomWidth="10px"
          borderBottomColor="amber.500">
          WEBSITE
        </Heading>
        <FlatListBox data={portfolioData} />
      </VStack>
    </Box>
  );
};

const PortfolioScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="PortfolioHome"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="PortfolioHome"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PortfolioWebView"
        component={WebViewScreen}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default PortfolioScreen;
