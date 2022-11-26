import React, {useCallback} from 'react';
import {
  Heading,
  Divider,
  VStack,
  useColorModeValue,
  Avatar,
  Text,
} from 'native-base';
import SideBarButton from './SideBarButton';
import ThemeToggle from './ThemeToggle';

const SideBar = ({state, navigation}) => {
  const currentRoute = state.routeNames[state.index];

  const handlePressHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handlePressAbout = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);

  const handlePressPortfolio = useCallback(() => {
    navigation.navigate('Portfolio');
  }, [navigation]);
  return (
    <VStack
      safeArea
      p={8}
      flex={1}
      space={2}
      bg={useColorModeValue('blue.50', 'blueGray.700')}>
      <VStack justifyContent="center" alignItems="center" space={2}>
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
        <Heading>沈維晉</Heading>
        <Text font="sm">j0910290373@gmail.com</Text>
      </VStack>
      <Divider my={2} />

      <VStack w="full" space={4} flex={1}>
        <SideBarButton
          active={currentRoute === 'Home'}
          onPress={handlePressHome}>
          Home
        </SideBarButton>
        <SideBarButton
          active={currentRoute === 'About'}
          onPress={handlePressAbout}>
          About
        </SideBarButton>
        <SideBarButton
          active={currentRoute === 'Portfolio'}
          onPress={handlePressPortfolio}>
          Portfolio
        </SideBarButton>
        <ThemeToggle position="absolute" bottom={4} />
      </VStack>
    </VStack>
  );
};

export default SideBar;
