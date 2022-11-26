import {HStack, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const SideBarButton = ({active, children, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <HStack
        w="full"
        p={2}
        justifyContent="center"
        alignItems="center"
        _light={{
          bg: active ? 'info.400' : undefined,
        }}
        _dark={{
          bg: active ? 'rgba(250, 250, 250, 0.2)' : undefined,
        }}>
        <Text fontSize="lg" color={active ? 'white' : undefined}>
          {children}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};

export default SideBarButton;
