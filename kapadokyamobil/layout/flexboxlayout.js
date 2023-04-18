import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from 'react-native';


const MyLayout = () => {


    return (
        <SafeAreaView style={styles.background}>
            <View style={{width:100, height:50, backgroundColor:'white', alignSelf:'flex-end'}}>
            </View>
            <View style={{width:80, height:65,  backgroundColor:'yellow'}}></View>
            <View style={{width:90, backgroundColor:'brown'}}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'stretch'
    }
})

export default MyLayout;