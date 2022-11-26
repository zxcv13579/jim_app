import React, {useCallback} from 'react';
import {Box, HStack, IconButton} from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SideBarToggle = () => {
  const navigation = useNavigation();
  const handleDrawerOpen = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);
  return (
    <HStack w="full" h={40} alignItems="center" alignContent="center" p={4}>
      <TouchableOpacity onPress={handleDrawerOpen}>
        <Box w={10} h={10} bg="amber.200" />
      </TouchableOpacity>
      {/* <IconButton
        size="lg"
        borderRadius={100}
        icon={<Feather name="menu" size={20} color="black" />}
        onPress={handleDrawerOpen}
      /> */}
    </HStack>
  );
};

export default SideBarToggle;
