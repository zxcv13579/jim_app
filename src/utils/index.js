import {Dimensions} from 'react-native';

export const SIZE = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const responsiveImgHeight = ({
  expectWidth,
  originWidth,
  originHeight,
}) => {
  const ratio = expectWidth / originWidth;
  return Math.floor(originHeight * ratio);
};
