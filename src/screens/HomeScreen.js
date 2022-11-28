import React from 'react';
import {
  ScrollView,
  Box,
  useColorModeValue,
  VStack,
  Avatar,
  Text,
  Button,
} from 'native-base';
import imgSource from '../images/homeImg.png';
import Masthead from '../components/Masthead';
import SideBarToggle from '../components/SideBarToggle';
import {Linking} from 'react-native';
const HomeScreen = () => {
  return (
    <Box flex={1}>
      <Masthead imgSource={imgSource}>
        <SideBarToggle />
      </Masthead>
      <ScrollView
        flex={1}
        bg={useColorModeValue('warmGray.50', 'warmGray.900')}
        p={4}
        mt={-4}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}>
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Avatar
              size="xl"
              borderRadius={100}
              bg="cyan.500"
              borderWidth={3}
              borderColor="warmGray.300"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
          </Box>
          <Text fontSize="md" w="full" textAlign="justify">
            我是沈維晉，是為前端工程師，喜歡吸收各種科技新知，學習新技術與分享技術經驗。5年網站開發經驗，實作參與超過
            30 個大小 RWD 專案
          </Text>
          <Button
            colorScheme="red"
            size="lg"
            borderRadius="full"
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/%E7%B6%AD%E6%99%89-%E6%B2%88-87aa00125/',
              )
            }>
            Go to Linkedin
          </Button>
          <Button
            colorScheme="primary"
            size="lg"
            borderRadius="full"
            onPress={() => Linking.openURL('https://github.com/zxcv13579')}>
            Go to GitHub
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
