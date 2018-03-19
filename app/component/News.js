


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput
} from 'react-native';

import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'



export default class News extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render(){
    return (
      <View style={styles.container}>
          <ScrollableTabView
              style={styles.scrollNews}
              renderTabBar={() => <ScrollableTabBar />}
              tabBarPosition= 'overlayTop'
              onChangeTab={(obj)=>{console.log('index:'+obj.i)}}          //选中tab获取下标
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
          <View style={styles.searchBar}>
              <Image style={{height:20,width:20}} source={require("../images/search.png")} />
              <TextInput
                style={styles.searchBarInput}
                placeholder="请在这里输入您想搜索的内容!"
                onChangeText={(text) => this.setState({text})}
                underlineColorAndroid='transparent'
              />
              {/*<Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
              </Text>*/}
          </View>
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
        width: 0,
        alignItems: 'center',
        height: 4,
  },
  searchBar: {
    height: 40,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    borderColor: '#515151',
    borderWidth: 2,
    borderRadius: 8,
    margin: 2,
    marginLeft: 4,
    marginRight: 4,
  },
  searchBarInput: {
    fontSize: 16,
    alignSelf: 'auto',
    height: 39,
    width: 370,
    // backgroundColor: 'red',
  }
})