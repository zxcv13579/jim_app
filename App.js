import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/RootNavigation';

const GlobalContainer = ({children}) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <GlobalContainer>
      <RootNavigation />
      <StatusBar />
    </GlobalContainer>
  );
};

export default App;
