import React, {useMemo} from 'react';
import {responsiveImgHeight} from '../utils';
import {FlatList, Text, Image, VStack} from 'native-base';

const FlatListBox = ({data}) => {
  const height = useMemo(() => {
    return responsiveImgHeight({
      expectWidth: 300,
      originWidth: 2880,
      originHeight: 1412,
    });
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <VStack w={300} p={5}>
          <Image
            w="100%"
            h={height}
            resizeMode="contain"
            source={item.imgSource}
            alt={item.title}
          />
          <Text>{item.title}</Text>
        </VStack>
      )}
      horizontal
    />
  );
};

export default FlatListBox;
