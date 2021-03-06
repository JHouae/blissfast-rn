import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import WebVC from '../base/WebVC';

const Navigator = StackNavigator({
  Home:{screen: Home},
  WebVC:{screen: WebVC},
},{
  initialRouteName:'Home',
})

export default class HomeNav extends Component {
  render() {
    return (
      <Home />
    );
  }
}
