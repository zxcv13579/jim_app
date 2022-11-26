import React from 'react';
import {Box, Text} from 'native-base';

const HomeScreen = () => {
  return (
    <Box
      flex={1}
      _light={{
        bg: 'muted.200',
      }}
      _dark={{
        bg: 'coolGray.800',
      }}>
      <Text>HomeScreen</Text>
    </Box>
  );
};

export default HomeScreen;
