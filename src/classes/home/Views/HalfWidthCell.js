import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { screen } from '../../../common/common'

export default class HalfWidthCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: this.props.record.img }}></Image>
        <View>
          <View>
            <Text>{this.props.record.contentName}</Text>
            <Text>{this.props.record.originalPrice}</Text>
          </View>
          <Text>{this.props.record.price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: screen.width / 2,
    height: screen.width / 2 + 55,
  },
  img: {
    width: screen.width / 2,
    height: screen.width / 2,
  }
});
