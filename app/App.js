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


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'Home'}
                        //标题
                        title="首页"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon} source={require("./images/icon1.png")} />}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("./images/icon1.png")} />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'Home' })}>
                        <View style={styles.page0}>
                            <ScrollableTabView
                                style={styles.container}
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
                        renderIcon={() => <Image style={styles.icon} source={require("./images/icon1.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon]} source={require("./images/icon1.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Video' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,padding:15,color: 'blue'}}>This is Video Page</Text>
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
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Profile'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./images/icon1.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("./images/icon1.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Profile' })}>
                        <View style={styles.page1}>
                            <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is Profile Page</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 32,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    },
    wrapper: {
        height: 50,
    },
    slide1: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 0,
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

//klklklkl