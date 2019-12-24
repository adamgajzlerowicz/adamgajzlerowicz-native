import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import codePush from 'react-native-code-push';

const uri = 'http://hackerman-consulting.com';
// const uri = 'https://onet.pl';

const App = () => {
  return (
    <View style={styles.container}>
      <WebView
        ref={ref => {
          this.webview = ref;
        }}
        source={{uri}}
        style={{marginTop: 20}}
        onNavigationStateChange={event => {
          if (event.url.indexOf(uri) < 0) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
            return false;
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const codePushOptions = {
  frequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
