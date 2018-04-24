

import HomeScreen from '../screen/HomeScreen'
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Button,
  AppRegistry,
  Dimensions
} from 'react-native';

import ScrollableTabView , {DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view'



export default class News extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      loading: false,
      refreshing: false,
    };
  }



  componentDidMount() {
    this.requestData();
  }


  _separator = () => {
      return <View style={{height:2,backgroundColor:'#515151',marginLeft:20,marginRight:20}}/>
  }

  _renderItem = ({item}) => {
      return (
        <TouchableNativeFeedback
          onPress={()=>this.props.click(item)}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={{padding:20,flexDirection:'row',flexWrap:'nowrap',flex: 1}}>
              <View style={{flex: 6,flexWrap:'wrap',paddingRight: 15}}>
                  <Text style={{fontSize:20,fontWeight:'bold',paddingBottom: 30,}}>{item.title}</Text>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{paddingRight:10}}>{item.source}</Text>
                      <Text style={{paddingRight:10}}>{item.replyCount}</Text>
                      <Text>{item.mtime}</Text>
                  </View>
              </View>
              <Image style={{flex:4,resizeMode: 'contain'}} source={{uri:item.imgsrc}}/>
          </View>
        </TouchableNativeFeedback>
        
      );

  }



  requestData = () => {
    const url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html';
    const key = 'T1348647853363';
    fetch(url)
    .then(res => {
      // console.log('start fetch');
      return res.json();
    })
    .then(res => {
      // let jsonData = res[key];
      this.setState({
        data: [...this.state.data, ...res[key]],
        error: res.error||null,
        loading: false,
        refreshing: false,
      });
      console.log(this.state.data);
      // for(let i=0;i < jsonData.length;i++){
      //   this.state.data.push(jsonData[i]);
      // };
      // console.log(this.state.data);
    }).catch(err => {
      console.log('==> catch error', err);
      this.setState({error: err, loading: false, refreshing: false,})
    })
  }

  // 空布局
  _renderEmptyView = () => (
    <View  style={{flex:1}}>
      <TouchableWithoutFeedback onPress={this.handleRefresh}>
        <View style={styles.emptyViewContainer}>
          <Text style={{color:'#333',textAlign: 'center',marginBottom: 5,}}>没有内容哦！</Text>
          <Text style={{color:'#333',textAlign: 'center',marginBottom: 5,}}>点击文字刷新！</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  // 下拉刷新
  // _renderRefresh = () => {
  //     // this.setState({refreshing: true})//开始刷新
  //     // //这里模拟请求网络，拿到数据，3s后停止刷新
  //     // setTimeout(() => {
  //     //     CustomToastAndroid.show('没有可刷新的内容！', CustomToastAndroid.SHORT);
  //     //     this.setState({refreshing: false});
  //     // }, 3000);
  //     this.requestData;
  // };
  handleRefresh = () =>{
    this.setState({
      // page: 1,
      refreshing: true,
      loading: false,
      data: [],
    }, ()=>{
      this.requestData();
    })
  }

  // 上拉加载更多
  _onEndReached = () => {
      this.requestData;
  };


  render(){
    



    return (
      <View style={styles.container}>
          <ScrollableTabView
              style={styles.scrollNews}
              renderTabBar={() => <ScrollableTabBar />}
              tabBarPosition= 'overlayTop'
              onChangeTab={(obj)=>{alert('index:'+obj.i)}}          //选中tab获取下标
              initialPage={0}                     //起始页下标
              onScroll={(position) => {console.log('scroll pposition:' + position)}}   //float类型
              tabBarUnderlineStyle={styles.lineStyle}
              tabBarActiveTextColor='#f3f3f2'
              tabBarInactiveTextColor='#515151'
              >
              <Text style={styles.textStyle} tabLabel='推荐'/>
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
                underlineColorAndroid='transparent'         // 下划线透明
                //onChangeText={(query) =>{  
                   // this.setState({  
                    //    query:query,  
                    //    loaded:false,  
                   // });                                     // 当内容改变时执行该方法  
                //}}  
                //   onFocus={() =>console.log('onFocus')} //选中文本框  
                //   onBlur={() =>console.log('onBlur')}//离开文本框  
                //  onChange={() =>console.log('onChange')}//文本框内容变化  
                //  onChangeText={(text) =>console.log(text)}//文本框内容变化，变化的内容  
                //  onEndEditing={() =>console.log('onEndEditing')}//文本框编译结束  
                //   onSubmitEditing={() =>console.log('onSubmitEditing')}//按下回车键 
              />
          </View>
          <View>
              {/*<Button onPress={()=>console.log(this.state.data)} title={this.props.title}></Button>*/}
              <FlatList 
                  data={this.state.data}
                  renderItem={this._renderItem.bind(this)}
                  keyExtractor={item => item.docid}
                  ref={ ref => this.flatList = ref }

                  ItemSeparatorComponent={this._separator}
                  ListEmptyComponent={ this._renderEmptyView }
                  //ListHeaderComponent={this.renderHeader}
                  //ListFooterComponent={this.renderFooter}

                  //onRefresh={this.handleRefresh}
                  refreshing={this.state.refreshing}    //判断刷新状态
                  onRefresh={ this.handleRefresh }     //下拉刷新
                  onEndReached={this.handleLoadMore}      //上拉加载
                  onEndReachedThreshold={0.5}               //距离最低端多远刷新，0~1
                  //numColumns ={3}
              />
          </View>
      </View>
    );
  }



  _onpress() {
    alert('ok')
  }


}






const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:80
  },
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
  },
  emptyViewContainer: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f2',
  },
})



