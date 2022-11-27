import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({route}) => {
  const {uri} = route.params;
  return <WebView source={{uri}} startInLoadingState />;
};

export default WebViewScreen;
