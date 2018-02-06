import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Mine from './Mine';
import ErrorVC from '../base/ErrorVC';

const Navigator = StackNavigator({
  Mine:{screen: Mine},
  ErrorVC:{screen: ErrorVC},
},{
  initialRouteName:'Mine',
})

export default class MineNav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
