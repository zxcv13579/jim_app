import React from 'react';
import {Box, NativeBaseProvider, StatusBar, Text} from 'native-base';

const GlobalContainer = ({children}) => {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};

const App = () => {
  return (
    <GlobalContainer>
      <Box safeArea>
        <Text>Hello NativeBase</Text>
        <StatusBar />
      </Box>
    </GlobalContainer>
  );
};

export default App;
