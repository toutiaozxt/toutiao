


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
      <ScrollableTabView
          style={styles.scrollNews}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarPosition= 'overlayTop'
          onChangeTab={(obj)=>{console.log('index:'+obj.i)}}
          initialPage={0}
          
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
    );
  }


}



const styles= StyleSheet.create({
  scrollNews: {
        flex: 0,
        height: 50,
        backgroundColor: '#38b48b',     //绿色
        // margin: 20,
  },

})