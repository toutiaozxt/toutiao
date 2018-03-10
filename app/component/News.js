


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'



export default class News extends Component{
  // constructor(){

  // }


  render(){
    return (
      <View style={styles.container}>
          <ScrollableTabView
              style={styles.scrollNews}
              renderTabBar={() => <ScrollableTabBar />}
              tabBarPosition= 'overlayTop'
              onChangeTab={(obj)=>{console.log('index:'+obj.i,_onpress())}}          //选中tab获取下标
              initialPage={0}                     //起始页下标
              onScroll={(position) => {console.log('scroll pposition:' + position)}}   //float类型
              tabBarUnderlineStyle={styles.lineStyle}
              tabBarActiveTextColor='#f3f3f2'
              tabBarInactiveTextColor='#515151'
              >
              <Text style={styles.textStyle} tabLabel='热点'/>
              <Text tabLabel='科技'/>
              <Text tabLabel='武汉'/>
              <Text tabLabel='Tab4'/>
              <Text tabLabel='Tab5'/>
              <Text tabLabel='Tab6'/>
              <Text tabLabel='Tab6'/>
              <Text tabLabel='Tab6'/>
              <Text tabLabel='Tab6'/>
          </ScrollableTabView>
          <View></View>
      </View>
    );
  }



  _onpress() {
    console.log('ok')
  }


}



const styles= StyleSheet.create({
  scrollNews: {
        flex: 0,
        height: 50,
        backgroundColor: '#38b48b',     //绿色
        // margin: 20,
  },
  lineStyle: {
        backgroundColor: '#515151',
        // width: 10,
        alignItems: 'center',
        height: 4,
  },
})