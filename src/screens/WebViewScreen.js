import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />
  );
};

export default WebViewScreen;
