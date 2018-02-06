import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, DeviceEventEmitter } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import api from '../../network/api';
import { get } from '../../network/network';
import { requestBanner } from '../../actions/homeActions';
import Banner from './Views/Banner';


class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#06C1AE',
    }
  });
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(requestBanner());
  }

  bannerItemClick = (record) => {
    console.log(record);
    console.log(this.props);
    this.props.navigation.navigate('WebVC', {record: record});
  }

  showToast = () => {
    const toast = this.props.toast;
    Toast.show(toast, {
      duration: 2000, // toast显示时长
      position: Toast.positions.CENTER, // toast位置
      shadow: true, // toast是否出现阴影
      animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
      hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
      delay: 0, // toast显示的延时
    });
  }

  render() {
    return (
      <View>
        <Banner 
          bannerArray={this.props.bannerArray}
          itemClick={this.bannerItemClick}
        />
      </View>

    );
  }
}
const mapStateToProps = (state) => {  
  return {
    bannerArray: state.home.bannerArray,
  }
}

export default connect(mapStateToProps)(Home);


