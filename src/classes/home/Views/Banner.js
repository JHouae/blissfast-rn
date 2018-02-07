import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';
import PageControl from 'react-native-page-control';
import { screen } from '../../../common/common'


class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }
  }

  onScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const current = Math.ceil(x / screen.width);
    this.setState({
      currentPage: current
    })
  }
  render() {
    let bannerItems = this.props.bannerArray.map((value, index) => {
      return (<TouchableWithoutFeedback onPress={() => this.props.itemClick(value)}  key={index}>
        <Image source={{ uri: value.adImg }} style={styles.bannerItem} />
      </TouchableWithoutFeedback>)
    });
    const pageCount = this.props.bannerArray.length;

    return (
      <View>
        <ScrollView
          horizontal
          style={styles.banner}
          showsHorizontalScrollIndicator={false}
          onScroll={this.onScroll}
          scrollEventThrottle={16}
          pagingEnabled
        >
          {bannerItems}
        </ScrollView>
        <PageControl
          numberOfPages={pageCount}
          currentPage={this.state.currentPage}
          hidesForSinglePage
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 5,
    height: screen.width / 5,
  },
  banner: {
    flexDirection: 'row',
  },
  bannerItem: {
    width: screen.width,
    height: 180,
  },
});


export default Banner;
