
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions
} from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class NewsDetail extends Component{

    constructor(props) {
        super(props);
        // const { state } = props.navigation;
        this.state= {
            // title: this.props.navigation.state.params.title,
            url: this.props.navigation.state.params.url,
        }        
    }

    


    static navigationOptions = ({ navigation }) => ({title: `${navigation.state.params.title}` })
    // {
    //     // Nav options can be defined as a function of the navigation prop:
    //     // title: ({ navigation }) => `Chat with ${navigation.state.params.title}`,  //state.params.title,
    // };

    // componentDidMount() {
    //     // alert(this.state.tilte);
    //     // console.log(this.state.url)
    // }

  render() {

    return (
        <View style={{flex:1}}>
            <WebView 
                    automaticallyAdjustContentInsets={true}                          //设置是否自动调整内容
                    contentInset={{top:10,left:10,bottom:10,right:10}}
                    startInLoadingState={true}                                      //是否开启页面加载的状态
                    javaScriptEnabled={true}                                        //是否开启 JavaScript
                    source={{uri: this.state.url}}
                    //onNavigationStateChange：                                        //当导航状态发生变化的时候调用。
                    //onLoadStart：                                                    //当网页开始加载的时候调用。
                    //onError：                                                        //当网页加载失败的时候调用。
                    //onLoad：                                                         //当网页加载结束的时候调用。
                    //onLoadEnd：                                                      //当网页加载结束调用，不管是成功还是失败。
                    //renderLoading：                                                  //WebView组件正在渲染页面时触发的函数，只有 startInLoadingState 为 true 时该函数才起作用。
                    //renderError：                                                    //监听渲染页面出错的函数。
                    style={{width:screenWidth, height:screenHeight}}
            >
            </WebView>
        </View>
    );
  }




}
