import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from 'react-native';


const MyLayout = () => {

    // flexShrink:1  -> boyut buyukse diger elemanların gorunmesi icin kendini kucult
    // flexGrow:1 -> ekrana gore kucuk kalırsan kendini sıgdır.

    return (
        <SafeAreaView style={styles.background}>
            <View style={{flexBasis:150,flexGrow:1, flexShrink:1 ,height:75, backgroundColor:'white'}}></View>
            <View style={{width:100, height:75,  backgroundColor:'yellow'}}></View>
            <View style={{width:100, height:75, backgroundColor:'brown'}}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default MyLayout;