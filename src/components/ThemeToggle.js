import React from 'react';
import {HStack, Text, Switch, useColorMode} from 'native-base';

const ThemeToggle = ({...props}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack
      space={2}
      w="full"
      justifyContent="center"
      alignItems="center"
      {...props}>
      <Text>light</Text>
      <Switch
        isChecked={colorMode !== 'light' ? true : false}
        onToggle={toggleColorMode}
      />
      <Text>dark</Text>
    </HStack>
  );
};

export default ThemeToggle;
