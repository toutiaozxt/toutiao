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
  View,
  Button
} from 'react-native';

// import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'
import TabNavigator from 'react-native-tab-navigator'


import News from '../component/News'
import Videos from '../component/Videos'
import Collect from '../component/Collect'
// import NewsScreen from './NewsScreen'




export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'News'
        }
    }


    _onpress=()=>{
        alert("111");
    }

    showDetail = (item) =>{
        const { navigate } = this.props.navigation;    
        navigate('newsScreen',{ title: item.title, url: item.url });
        // alert(item.title);
    }




    render() {
        // const { navigate } = this.props.navigation;    
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
                        renderIcon={() => <Image style={styles.icon} source={require("../images/news.png")} />}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("../images/newsSelected.png")} />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'News' })}>
                        <View style={styles.page0}>
                            {/*<Button title='detail' onPress={()=>navigate('newsScreen')}>This is Video Page</Button>*/}
                            <News click={(item)=>this.showDetail(item)} title='11111' />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Video'}
                        title="视频"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../images/video.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon]} source={require("../images/videoSelected.png")} />}
                        onPress={() => this.setState({ selectedTab: 'Video' })}>
                        <View style={styles.page0}>
                            <Videos />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'collect'}
                        title="收藏"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../images/collect.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon]} source={require("../images/collectSelected.png")} />}
                        onPress={() => this.setState({ selectedTab: 'collect' })}>
                        <View style={styles.page0}>
                            <Text style={{fontSize:18,color: 'blue'}}>This is test Page</Text>
                            <Collect />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Profile'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../images/mine.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("../images/mineSelected.png")} />}
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
    icon: {
        height: 22,
        width: 22,
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
})
