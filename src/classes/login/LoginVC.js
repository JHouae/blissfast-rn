import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet, DeviceEventEmitter } from 'react-native';
import { connect } from 'react-redux';
import { screen } from '../../common/common';

class LoginVC extends Component {
  
  dismissHandle = () => {
    DeviceEventEmitter.emit('showLoginVC', false);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> LoginVC </Text>
        <Button title='dismiss' onPress={this.dismissHandle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: screen.width,
    height: screen.height,

  },
});

export default connect()(LoginVC);
