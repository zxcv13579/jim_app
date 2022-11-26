import React from 'react';
import {Box, Heading, VStack} from 'native-base';
import Masthead from '../components/Masthead';
import SideBarToggle from '../components/SideBarToggle';
import imgSource from '../images/portfolioImg.png';
import {portfolioData} from '../constants';
import FlatListBox from '../components/FlatListBox';

const PortfolioScreen = () => {
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

export default PortfolioScreen;
