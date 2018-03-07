


import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


export default class Test extends Component {
    // constructor(){
    //     super(props);

    // }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'zxt1'},
                        {key: 'zxt2'},
                        {key: 'zxt3'},
                        {key: 'zxt4jlkjlkjljlkjlkjlkjkjljkjlkjlkjlkjkjlkjlkjlkjljkj'},
                        {key: 'zxtlkjlkjlkjlkljkjljlkjlkjlkjlkjlklkjlkjlkjlkljlk4'},
                        {key: 'zxt4nnkjlknlknlkjlkjlkjlklkjlkjlkjlknlknlkmlkjlkjlklm'},
                        {key: 'zxtnjlklnlkjklm,nkjkjbkljlknkn4'},
                        {key: 'zxt4'},
                        {key: 'zxt4'}
                    ]}
                    renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    item: {
        fontSize: 18,
        padding: 10,
        height: 100,
        // backgroundColor: '#4169e1',
        margin: 5,
        borderWidth: 2,
        // borderRidus: 5,
    }
})