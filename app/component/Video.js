


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'
import Swiper from 'react-native-swiper';




export default class News extends Component{
    //constructor:{

    render(){
        return(
            <View style={styles.container}>
                <ScrollableTabView
                    style={styles.scrollVideo}
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarPosition= 'overlayTop'
                    onChangeTab={(obj)=>{console.log('index:'+obj.i)}}          //选中tab获取下标
                    initialPage={0}                     //起始页下标
                    onScroll={(position) => {console.log('scroll pposition:' + position)}}   //float类型
                    tabBarUnderlineStyle={styles.lineStyle}
                    tabBarActiveTextColor='#38b48b'
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
                <View style={{flex: 0,height: 100}}>
                    <Swiper style={styles.wrapper} showsButtons={false}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }





}





const styles= StyleSheet.create({
    scrollVideo: {
            flex: 0,
            height: 50,
            backgroundColor: '#f3f3f2',        //背景乳白色
            // margin: 20,
    },
    lineStyle: {
            backgroundColor: '#515151',
            width: 0,
            alignItems: 'center',
            height: 4,
    },
    wrapper: {
            flex: 0,
            height: 150,
    },
    slide1: {
        flex: 0,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        height: 100,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 0,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})