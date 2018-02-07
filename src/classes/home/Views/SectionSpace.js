import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    height: 10,
  },
});