import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, SectionList, DeviceEventEmitter, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import api from '../../network/api';
import { get } from '../../network/network';
import { requestBanner, requestRecommend, requestColumnPop } from '../../actions/homeActions';
import Banner from './Views/Banner';
import HalfWidthCell from './Views/HalfWidthCell';
import FullWidthCell from './Views/FullWidthCell';
import WidgetHeader from './Views/WidgetHeader';
import WidgetAd from './Views/WidgetAd';
import SectionSpace from './Views/SectionSpace';


class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    headerStyle: {
      backgroundColor: '#06C1AE',
    }
  });
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(requestBanner());
    this.props.dispatch(requestRecommend());
    this.props.dispatch(requestColumnPop());
  }

  bannerItemClick = (record) => {
    console.log(record);
    console.log(this.props);
    // this.props.navigation.navigate('WebVC', { record: record });
    // DeviceEventEmitter.emit('showLoginVC');
    this.props.navigation.navigate('LoginVC');
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

  renderRecommendItem = ({ item }) => {
    return (
      <HalfWidthCell key={item.contentId} record={item} />
    );
  }

  render() {

    const listHeader = (
      <Banner
        bannerArray={this.props.bannerArray}
        itemClick={this.bannerItemClick}
      />
    );

    return (
      <ScrollView>
        {listHeader}
        {this.props.columnPopArray.map((value, index) => {
          return (
            <View key={value.moduleId}>
              <WidgetHeader title={value.title} subTitle={value.subTitle} titleColor={value.titleColor} />
              {value.adImg ? <WidgetAd adImg={value.adImg}/> : null}
              {value.contentShowType === '2C' ?
                <FlatList
                  numColumns={2}
                  data={value.contentArr}
                  ItemSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#f6f6f6',}}></View>}
                  renderItem={({ item, separators }) => (
                    <HalfWidthCell record={item} />
                  )}
                  keyExtractor={(record) => record.contentId}
                /> :
                <FlatList
                  data={value.contentArr}
                  ItemSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#f6f6f6',}}></View>}
                  renderItem={({ item, separators }) => (
                    <FullWidthCell record={item} />
                  )}
                  keyExtractor={(record) => record.contentId}
                />}
              <SectionSpace />
            </View>
          )
        })}
        {this.props.recommendArray.map((value, index) => {
          return (
            <View key={value.moduleId}>
              <WidgetHeader title={value.title} subTitle={value.subTitle} />
              {value.adImg ? <WidgetAd adImg={value.adImg}/> : null}
              {value.contentShowType === '2C' ?
                <FlatList
                  numColumns={2}
                  ItemSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#f6f6f6',}}></View>}
                  data={value.contentArr}
                  renderItem={({ item, separators }) => (
                    <HalfWidthCell record={item} />
                  )}
                  keyExtractor={(record) => record.contentId}
                /> :
                <FlatList
                  data={value.contentArr}
                  ItemSeparatorComponent={() => <View style={{height: 5, backgroundColor: '#f6f6f6',}}></View>}
                  renderItem={({ item, separators }) => (
                    <FullWidthCell record={item} />
                  )}
                  keyExtractor={(record) => record.contentId}
                />}
              <SectionSpace />
            </View>
          )
        })}
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);

  return {
    bannerArray: state.home.bannerArray,
    recommendArray: state.home.recommendArray,
    columnPopArray: state.home.columnPopArray,
  }
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  listViewStyle: {
    flexDirection: 'row',
    // //多行显示  
    flexWrap: "wrap",
    alignItems: 'flex-start',
  },
});


