import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { screen } from '../../../common/common'

export default class WidgetHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.title} </Text>
        <Text style={styles.subTitle}> {this.props.subTitle} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: screen.width,
    height: 49,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 15,
  },
  subTitle: {
    fontSize: 12,
  }
});
