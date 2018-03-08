


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


export default class Collect extends Component {
    // constructor(){
    //     super(props);

    // }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'zx1'},
                        {key: 'zxt2'},
                        {key: 'zxt3'},
                        {key: 'zxt4jlkjlkjljlkjlkjlkjkjljkjlkjlkjlkjkjlkjlkjlkjljkj'},
                        {key: 'zxtlkjlkjlkjlkljkjljlkjlkjlkjlkjlklkjlkjlkjlkljlk4'},
                        {key: 'zxt4nnkjlknlknlkjlkjlkjlklkjlkjlkjlknlknlkmlkjlkjlklm'},
                        {key: 'zxtnjlklnlkjklm,nkjkjbkljlknkn4'},
                        {key: 'zxt3'},
                        {key: 'zxt4'}
                    ]}
                    onpress= {()=>_openNews()} 
                    renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
                    scrollToIndex= {{index: 0}}
                />
            </View>
        );
    }



    _openNews(){

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    item: {
        color: '#1f3134',
        fontSize: 18,
        paddingBottom: 20,
        paddingTop: 20,
        height: 90,
        // backgroundColor: '#4169e1',

        marginLeft: 16,
        marginRight: 16,
        borderBottomWidth: 1,
        // borderWidth: 2
        // borderRidus: 5,
    }
})