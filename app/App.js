/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'
import Swiper from 'react-native-swiper';
import TabNavigator from 'react-native-tab-navigator'

// import {StackNavigator,TabNavigator,DrawerNavigator} from react-navigation

import Test from './component/Test'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'News'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'News'}
                        //标题
                        title="新闻"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon} source={require("./images/news.png")} />}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("./images/newsSelected.png")} />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'News' })}>
                        <View style={styles.page0}>
                            <ScrollableTabView
                                style={styles.scrollNews}
                                renderTabBar={() => <ScrollableTabBar />}

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
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Home Page</Text>
                        </View>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Video'}
                        title="视频"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./images/video.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon]} source={require("./images/videoSelected.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Video' })}>
                        <View style={styles.page0}>
                            <ScrollableTabView
                                style={styles.scrollVideo}
                                renderTabBar={() => <ScrollableTabBar />}

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
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Video Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'collect'}
                        title="收藏"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./images/collect.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon]} source={require("./images/collectSelected.png")} />}
                        onPress={() => this.setState({ selectedTab: 'collect' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,color: 'blue'}}>This is test Page</Text>
                            <Test />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Profile'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./images/mine.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("./images/mineSelected.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Profile' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is Profile Page</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    page0: {
        flex: 1,
        backgroundColor: '#f3f3f2',     //乳白色
    },
    // page1: {
    //     flex: 1,
    //     backgroundColor: 'blue'
    // },
    icon: {
        height: 22,
        width: 22,
    },
    scrollNews: {
        flex: 0,
        backgroundColor: '#38b48b',     //绿色
        // margin: 20,
    },
    scrollVideo: {
        flex: 0,
        backgroundColor: '#f3f3f2',
        // margin: 20,
    },
    tabText:{
        fontSize: 10,
        color: '#515151',               //字体灰黑色
        fontWeight: 'bold',
    },
    selectedTabText:{
        fontSize: 12,
        color: '#00a480',               //字体绿色
        fontWeight: 'bold',
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


});
