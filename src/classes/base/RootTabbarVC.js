import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, DeviceEventEmitter } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import TabbarItem from '../../components/TabbarItem';

import HomeNav from '../home/HomeNav';
import NearNav from '../nearBy/NearNav';
import OrderNav from '../order/OrderNav';
import MineNav from '../mine/MineNav';

import ErrorVC from './ErrorVC';
import LoginVC from '../login/LoginVC';


const TabRouteConfigs = {
  HomeNav: {
    screen: HomeNav,
    path: '/home',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '点餐',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ width: 40, height: 40 }}
          source={focused ? require('../../images/tabbar/diancanSelected.png')
            : require('../../images/tabbar/diancan.png')}
        />
      )
    })
  },
  NearNav: {
    screen: NearNav,
    path: '/near',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '餐盒',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ width: 30, height: 30 }}
          source={focused ? require('../../images/tabbar/foodboxSelected.png')
            : require('../../images/tabbar/foodbox.png')}
        />
      )
    }),
  },
  OrderNav: {
    screen: OrderNav,
    path: '/order',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '订单',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ width: 40, height: 40 }}
          source={focused ? require('../../images/tabbar/orderSelected.png')
            : require('../../images/tabbar/order.png')}
        />
      )
    }),
  },
  MineNav: {
    screen: MineNav,
    path: '/mine',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{width: 40, height: 40 }}
          source={focused ? require('../../images/tabbar/mineSelected.png')
            : require('../../images/tabbar/mine.png')}
        />
      )
    }),
  },
};
const TabNavigatorConfigs = {
  // initialRouteName: 'MineVC',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
  },
};
const Tabbar = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

class RootTabbarVC extends Component {
  componentDidMount() {
    this.loginListen = DeviceEventEmitter.addListener('showLoginVC', (e) => {
      this.props.navigation.navigate('LoginVC');
    });
  }

  componentWillUnmount() {
    this.loginListen.remove();
  }

  render() {
    return (
      <Tabbar />
    );
  }
};

const StackRouteConfigs = {
  Tab: { screen: RootTabbarVC, },
  LoginVC: { screen: LoginVC, },
};
const StackNavigatorConfigs = {
  navigationOptions: {
    header: null,
  },
  mode: 'modal',
}
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

class Root extends Component {
  render() {
    return (
      <Navigator />
    );
  }
};

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Root);

