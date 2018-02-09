import React, { Component } from 'react';
import {  View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { screen } from '../../../common/common'

export default class WidgetAd extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.adClick} style={styles.container}>
        <Image source={{uri: this.props.adImg}} style={styles.img}/>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: screen.width,
    height: 95,
  },
  img: {
    width: screen.width,
    height: 95,
  }
});