import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';
import { screen } from '../../../common/common'

export default class FullWidthCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: this.props.record.img}}></Image>
        <View style={styles.contentView}>
          <Text>{this.props.record.contentName}</Text>
          <View style={styles.priceView}>
            <Text style={styles.originalPrice}>原价{this.props.record.originalPrice}元</Text>
            <Text style={styles.price}>现价{this.props.record.price}元</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: screen.width,
    height: 189 + 38,
  },
  img: {
    width: screen.width,
    height: 189,
  },
  contentView: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceView: {
    flexDirection: 'row',
  },
  originalPrice: {
    fontSize: 12,
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  price: {

  }
});