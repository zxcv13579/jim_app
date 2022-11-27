import React from 'react';
import {Box, useColorModeValue} from 'native-base';
import imgSource from '../images/homeImg.png';
import Masthead from '../components/Masthead';
import SideBarToggle from '../components/SideBarToggle';
const HomeScreen = () => {
  return (
    <Box flex={1}>
      <Masthead imgSource={imgSource}>
        <SideBarToggle />
      </Masthead>
      <Box
        flex={1}
        bg={useColorModeValue('warmGray.50', 'warmGray.900')}
        p={4}
        mt={-4}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      />
    </Box>
  );
};

export default HomeScreen;
