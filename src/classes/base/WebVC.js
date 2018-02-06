import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';
import { screen } from '../../common/common';

export default class WebVC extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.record.title,
  });

  render() {
    console.log(this.props);

    injectedJs = () => {
      return `
        <script><head>img{max-width:100% !important; width:auto; height:auto;}</style></head>
      `;
    }

    return (
      <WebView
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        contentInset={{top:0, left: 0, right: 0, bottom:0}}
        style={styles.webView}
        source={{uri: this.props.navigation.state.params.record.adJumpValue}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        injectedJavaScript={this.injectedJs}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 5,
    height: screen.width / 5,
  },
  webView: {
    backgroundColor: 'white',
    width: screen.width,
    height: screen.height,
  },
});
