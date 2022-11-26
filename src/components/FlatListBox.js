import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {responsiveImgHeight} from '../utils';
import {FlatList, Text, Image, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const FlatListBox = ({data}) => {
  const navigation = useNavigation();
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
          <TouchableOpacity
            onPress={() => navigation.navigate('PortfolioWebView')}>
            <Image
              w="100%"
              h={height}
              resizeMode="contain"
              source={item.imgSource}
              alt={item.title}
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        </VStack>
      )}
      horizontal
    />
  );
};

export default FlatListBox;
