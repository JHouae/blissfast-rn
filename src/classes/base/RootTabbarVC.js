import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, DeviceEventEmitter } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import TabbarItem from '../../components/TabbarItem';

import Home from '../home/Home';
import Near from '../nearBy/Near';
import Order from '../order/Order';
import Mine from '../mine/Mine';

import ErrorVC from './ErrorVC';
import LoginVC from '../login/LoginVC';


const TabRouteConfigs = {
  HomeNav: {
    screen: Home,
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
    screen: Near,
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
    screen: Order,
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
    screen: Mine,
    path: '/mine',
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={{ width: 40, height: 40 }}
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

// class RootTabbarVC extends Component {
//   render() {
//     return (
//       <Tabbar>
//       </Tabbar>
//     );
//   }
// };

const StackRouteConfigs = {
  Tab: { screen: Tabbar, },
  ErrorVC: {screen: ErrorVC},
};
const StackNavigatorConfigs = {
  // navigationOptions: {
  //   header: null,
  // },
  // mode: 'modal',
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

