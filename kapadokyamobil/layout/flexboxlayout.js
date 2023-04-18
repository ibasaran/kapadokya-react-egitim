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
            <View style={{width:100, height:50, backgroundColor:'white'}}>
            </View>
            <View style={{width:100, height:50,  backgroundColor:'yellow'}}></View>
            <View style={{width:100, height:50,  backgroundColor:'brown'}}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex:1,
        flexDirection:'column',
        //justifyContent:'center',
        alignItems: 'center'
    }
})

export default MyLayout;