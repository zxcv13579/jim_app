import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {responsiveImgHeight} from '../utils';
import {FlatList, Text, Image, Box, Center} from 'native-base';
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
      pt={4}
      flex={1}
      keyExtractor={item => item.title}
      // 滾動條
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <Center>
          <Box w={300} mb={4}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PortfolioWebView', {
                  title: item.title,
                  uri: item.uri,
                })
              }>
              <Image
                w="100%"
                h={height}
                resizeMode="contain"
                source={item.imgSource}
                alt={item.title}
                borderRadius={10}
              />
              <Text fontWeight="bold" fontSize="lg">
                {item.title}
              </Text>
            </TouchableOpacity>
          </Box>
        </Center>
      )}
    />
  );
};

export default FlatListBox;
