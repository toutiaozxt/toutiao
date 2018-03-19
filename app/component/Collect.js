


// import React, { Component } from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   FlatList
// } from 'react-native';


// export default class Collect extends Component {
//     constructor(){
//         super(props);

//     }

//     render(){
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={[
//                         {key: 'zx1'},
//                         {key: 'zxt2'},
//                         {key: 'zxt3'},
//                         {key: 'zxt4jlkjlkjljlkjlkjlkjkjljkjlkjlkjlkjkjlkjlkjlkjljkj'},
//                         {key: 'zxtlkjlkjlkjlkljkjljlkjlkjlkjlkjlklkjlkjlkjlkljlk4'},
//                         {key: 'zxt4nnkjlknlknlkjlkjlkjlklkjlkjlkjlknlknlkmlkjlkjlklm'},
//                         {key: 'zxtnjlklnlkjklm,nkjkjbkljlknkn4'},
//                         {key: 'zxt3'},
//                         {key: 'zxt4'}
//                     ]}
//                     onpress= {()=>_openNews()} 
//                     renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
//                     scrollToIndex= {{index: 0}}
//                 />
//             </View>
//         );
//     }



//     _openNews(){

//     }
// }


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     },
//     item: {
//         color: '#1f3134',
//         fontSize: 18,
//         paddingBottom: 20,
//         paddingTop: 20,
//         height: 90,
//         // backgroundColor: '#4169e1',

//         marginLeft: 16,
//         marginRight: 16,
//         borderBottomWidth: 1,
//         // borderWidth: 2
//         // borderRidus: 5,
//     }
// })

















import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';

var ITEM_HEIGHT = 10;

export default class FlatListDemo extends Component {

    // _flatList;

    _empty = (item) => {
        return<Text>这是空的</Text>
    }

    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }

    render() {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + '1122'});
        }

        return (
            <View style={{flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>{
                    //this._flatList.scrollToEnd();
                    //this._flatList.scrollToIndex({viewPosition:0,index:8});
                    this._flatList.scrollToOffset({animated: true, offset: 1800});
                }}/>
                <View style={{flex:1}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListEmptyComponent={this._empty}   //列表为空时渲染这个
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}

                        //numColumns ={3}
                        //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        //getItemLayout={(data,index)=>(
                        //{length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
                        //)}

                        //onEndReachedThreshold={5}
                        //onEndReached={(info)=>{
                        //console.warn(info.distanceFromEnd);
                        //}}

                        //onViewableItemsChanged={(info)=>{
                        //console.warn(info);
                        //}}
                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});