import React from 'react';
import {Box} from 'native-base';
import imgSource from '../images/homeImg.png';
import Masthead from '../components/Masthead';
import SideBarToggle from '../components/SideBarToggle';
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
      <Masthead imgSource={imgSource}>
        <SideBarToggle />
      </Masthead>
    </Box>
  );
};

export default HomeScreen;
