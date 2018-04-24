


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Slider
//   Video,
} from 'react-native';

import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';



const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
  let h = 0, i = 0, s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }
  // 补零
  let zero = function (v) {
    return (v >> 0) < 10 ? "0" + v : v;
  };
  return [zero(h), zero(i), zero(s)].join(":");
}


export default class Videos extends Component {


    constructor(props){
        super(props);
        this.state = {
            videoUrl: "http://124.129.157.208:8810/SD/2017qingdao/xiaoxueEnglish/grade3/b/1.mp4",
            videoCover: "http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png",
            videoWidth: screenWidth,
            videoHeight: screenWidth * 9/16, // 默认16：9的宽高比
            showVideoCover: true,    // 是否显示视频封面
            showVideoControl: false, // 是否显示视频控制组件
            isPlaying: false,        // 视频是否正在播放
            currentTime: 0,        // 视频当前播放的时间
            duration: 0,           // 视频的总时长
            isFullScreen: false,     // 当前是否全屏显示
            playFromBeginning: false, // 是否从头开始播放
        }
    }

    // componentDidMount() {
    //     this.requestData();
    // }


    _separator = () => {
        return <View style={{height:20,backgroundColor:'#f3f3f2',}}/>
    }

    _renderItem = (item) => {
        let video={
            title: "这是第"+item.item.key+"个",
            commentNum: 4,
            name: '快手',
            duration: '3:10',
        }

        return (
        <View style={styles.videoStyle}>
            <View style={styles.videoStyleContent}>
                <Video 
                    source={require('../images/big_buck_bunny.mp4')} // 视频的URL地址，或者本地地址，都可以. 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal. 
                    volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数 
                    muted={false}                // true代表静音，默认为false. 
                    paused={!this.state.isPlaying}               // true代表暂停，默认为false 
                    resizeMode="contain"           // 视频的自适应伸缩铺放行为，
                    repeat={false}                // 是否重复播放 
                    playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                    onLoadStart={this._onLoadStart} // 当视频开始加载时的回调函数
                    onLoad={this._onLoaded}    // 当视频加载完毕时的回调函数
                    onProgress={this._onProgressChanged}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                    onEnd={this._onPlayEnd}           // 当视频播放完毕后的回调函数
                    onError={this._onPlayError}    // 当视频不能加载，或出错后的回调函数
                    style={{width: this.state.videoWidth, height: this.state.videoHeight}}
                    progressUpdateInterval={250.0}
                    //poster="https://baconmockup.com/300/200/" // uri to an image to display until the video plays
                    ref={(ref) => {this.videoplayer = ref}}                                      // Store reference
                    onBuffer={this._onBuffering}               // Callback when remote video is buffering
                    //onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                />
                <TouchableWithoutFeedback onPress={() => { this.hideControl() }}>
                    <View
                        style={{
                            position: 'absolute',
                            elevation: 1,
                            top: 0,
                            left: 0,
                            //right: 0,
                            flex: 1,
                            width: this.state.videoWidth,
                            height: this.state.videoHeight,
                            backgroundColor: this.state.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        {
                            this.state.isPlaying ? null :
                            <TouchableWithoutFeedback onPress={() => { this.onPressPlayButton() }}>
                                <Image
                                style={styles.playButton}
                                source={require('../images/icon_video_play.png')}
                                />
                            </TouchableWithoutFeedback>
                        }
                    </View>
                </TouchableWithoutFeedback>
                {
                    this.state.showVideoControl ?
                        <View style={[styles.control, {width: this.state.videoWidth}]}>
                            <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlPlayPress() }}>
                                <Image
                                    style={styles.playControl}
                                    source={this.state.isPlaying ? require('../images/icon_control_pause.png') : require('../images/icon_control_play.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.time}>{formatTime(this.state.currentTime)}</Text>
                            <Slider
                                style={{flex: 1}}
                                maximumTrackTintColor={'#999999'}
                                minimumTrackTintColor={'#00c06d'}
                                thumbImage={require('../images/icon_control_slider.png')}
                                value={this.state.currentTime}
                                minimumValue={0}
                                maximumValue={this.state.duration}
                                onValueChange={(currentTime) => { this.onSliderValueChanged(currentTime) }}
                            />
                            <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
                            <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlShrinkPress() }}>
                                <Image
                                    style={styles.shrinkControl}
                                    source={this.state.isFullScreen ? require('../images/icon_control_shrink_screen.png') : require('../images/icon_control_full_screen.png')}
                                />
                            </TouchableOpacity>
                        </View> : null
                }
            </View>
            <View style={styles.videoStyleComment}>
                <View style={{alignItems: 'center',flexDirection: 'row',flex:6}}>
                    <Image style={{height:25,width:25}} source={require('../images/search.png')}/>
                    <Text style={{fontSize: 15,color: 'red',}}>xiguashipin</Text>
                </View>
                <View style={{alignItems: 'center',justifyContent: 'flex-end',flexDirection: 'row',flex:4}}>
                    <Image style={{height:25,width:25}} source={require('../images/search.png')}/>
                    <Text>4</Text>
                    {/*<Image />*/}
                </View>
            </View>
        </View>
        );

    }

    handleRefresh = () =>{
        this.setState({
            page: 1,
            refreshing: true,
            loading: false,
            data: [],
        }, ()=>{
            this.requestData();
        })
    }


    requestData = () => {
        const url = 'https://api.github.com/user/zxt0825/repos';
        fetch(url).then(res => {
            console.log('start fetch');
            return res.json();
        }).then(res => {
            this.setState({
            data: [...this.state.data, ...res],
            error: res.error||null,
            loading: false,
            refreshing: false,
            })
        }).catch(err => {
            console.log('==> catch error', err);
            this.setState({error: err, loading: false, refreshing: false,})
        })
    }


        /// -------Video组件回调事件-------
    
    _onLoadStart = () => {
        console.log('视频开始加载');
    };
    
    _onBuffering = () => {
        console.log('视频缓冲中...')
    };
    
    _onLoaded = (data) => {
        console.log('视频加载完成');
        this.setState({
        duration: data.duration,
        });
    };
    
    _onProgressChanged = (data) => {
        console.log('视频进度更新');
        if (this.state.isPlaying) {
        this.setState({
            currentTime: data.currentTime,
        })
        }
    };
    
    _onPlayEnd = () => {
        console.log('视频播放结束');
        this.setState({
        currentTime: 0,
        isPlaying: false,
        playFromBeginning: true
        });
    };
    
    _onPlayError = () => {
        console.log('视频播放失败');
    };
    
    ///-------控件点击事件-------
    
    /// 控制播放器工具栏的显示和隐藏
    hideControl() {
        if (this.state.showVideoControl) {
        this.setState({
            showVideoControl: false,
        })
        } else {
        this.setState(
            {
            showVideoControl: true,
            },
            // 5秒后自动隐藏工具栏
            () => {
            setTimeout(
                () => {
                this.setState({
                    showVideoControl: false
                })
                }, 5000
            )
            }
        )
        }
    }
    
    /// 点击了播放器正中间的播放按钮
    onPressPlayButton() {
        let isPlay = !this.state.isPlaying;
        this.setState({
        isPlaying: isPlay,
        showVideoCover: false
        });
        if (this.state.playFromBeginning) {
        this.videoPlayer.seek(0);
        this.setState({
            playFromBeginning: false,
        })
        }
    }
    
    /// 点击了工具栏上的播放按钮
    onControlPlayPress() {
        this.onPressPlayButton();
    }
    
    /// 点击了工具栏上的全屏按钮
    onControlShrinkPress() {
        if (this.state.isFullScreen) {
        Orientation.lockToPortrait();
        } else {
        Orientation.lockToLandscape();
        }
    }
    
    /// 进度条值改变
    onSliderValueChanged(currentTime) {
        this.videoPlayer.seek(currentTime);
        if (this.state.isPlaying) {
        this.setState({
            currentTime: currentTime
        })
        } else {
        this.setState({
            currentTime: currentTime,
            isPlaying: true,
            showVideoCover: false
        })
        }
    }
    
    /// 屏幕旋转时宽高会发生变化，可以在onLayout的方法中做处理，比监听屏幕旋转更加及时获取宽高变化
    _onLayout = (event) => {
        //获取根View的宽高
        let {width, height} = event.nativeEvent.layout;
        console.log('通过onLayout得到的宽度：' + width);
        console.log('通过onLayout得到的高度：' + height);
        
        // 一般设备横屏下都是宽大于高，这里可以用这个来判断横竖屏
        let isLandscape = (width > height);
        if (isLandscape){
        this.setState({
            videoWidth: width,
            videoHeight: height,
            isFullScreen: true,
        })
        } else {
        this.setState({
            videoWidth: width,
            videoHeight: width * 9/16,
            isFullScreen: false,
        })
        }
        Orientation.unlockAllOrientations();
    };
    
    /// -------外部调用事件方法-------
    
    ///播放视频，提供给外部调用
    playVideo() {
        this.setState({
        isPlaying: true,
        showVideoCover: false
        })
    }
    
    /// 暂停播放，提供给外部调用
    pauseVideo() {
        this.setState({
        isPlaying: false,
        })
    }
    
    /// 切换视频并可以指定视频开始播放的时间，提供给外部调用
    switchVideo(videoURL, seekTime) {
        this.setState({
        videoUrl: videoURL,
        currentTime: seekTime,
        isPlaying: true,
        showVideoCover: false
        });
        this.videoPlayer.seek(seekTime);
    }


    render(){
        let data = [];
        for (let i = 0; i < 3; i++) {
            data.push({key: i, title: i + ''});
        }

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
                {/*<View style={{flex: 0,height: 100}}>
                    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
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
                </View>*/}
                <View>
                    <FlatList 
                        data={data}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={this._separator}
                        //refreshing={this.state.refreshing}
                        //onRefresh={this.handleRefresh}
                        //onEndReached={this.handleLoadMore}
                        //onEndReachedThreshold={0}
                    />
                </View>
            </View>
        );
    }





}





const styles= StyleSheet.create({
    videoStyle: {
        borderWidth:1,
        flexDirection:'column',
        flexWrap:'nowrap',
        // height: 200,
        flex: 1,
    },
    videoStyleContent: {
        // height: 160,
        // borderWidth: 1,
        flex: 1,
    },
    videoStyleComment: {
        padding: 5,
        flexDirection: 'row',
        borderWidth: 1,
    },
    // videoStyleContentControlBar: {
    //     position: 'absolute',
    //     // flex: 1,
    //     backgroundColor: '#515151',
    //     opacity: 0.5,
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    // },
    // videoStyleContentControlBarTitle: {
    //     position: 'absolute',
    //     // width: Dimensions.get('window').width,
    //     // alignSelf: 'center',
    //     textAlign: 'center',
    //     backgroundColor: '#515151',
    //     opacity: 0.5,
    //     top:0,
    //     left: 0,
    //     right: 0,
    //     height: 24,
    //     fontSize: 18
    // },
    playButton: {
        width: 50,
        height: 50,
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    control: {
        flexDirection: 'row',
        height: 44,
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    videoStyleVideo: {

    },
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
    container: {
        flex:1,
    }
})