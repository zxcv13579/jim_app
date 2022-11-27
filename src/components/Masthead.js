import React from 'react';
import {VStack, Image, Heading, Box} from 'native-base';

const Masthead = ({imgSource, title, children}) => {
  return (
    <VStack w="full" h={300} bg="amber.300">
      <Image
        source={imgSource}
        alt="text"
        w="full"
        h={300}
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
      />
      {children}
      <Box flex={1} />
      {title && (
        <Heading color="white" p={4} size="xl" mb={2}>
          {title}
        </Heading>
      )}
    </VStack>
  );
};

export default Masthead;
