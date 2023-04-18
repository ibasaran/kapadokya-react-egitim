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
            <View style={{width:100, height:75, backgroundColor:'white'}}>
            </View>
            <View style={{width:100, height:75,  backgroundColor:'yellow'}}></View>
            <View style={{width:100, height:75, backgroundColor:'brown'}}></View>
            <View style={{width:100, height:75, backgroundColor:'black'}}></View>
            <View style={{width:100, height:75, backgroundColor:'orange'}}></View>
            <View style={{width:100, height:95, backgroundColor:'blue'}}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'baseline',
        flexWrap:'wrap',
        alignContent: 'center'
    }
})

export default MyLayout;