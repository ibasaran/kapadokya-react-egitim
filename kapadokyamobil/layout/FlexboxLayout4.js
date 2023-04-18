import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';


const MyLayout = () => {

    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('Henüz bir işlem yapmadınız')

    // flexShrink:1  -> boyut buyukse diger elemanların gorunmesi icin kendini kucult
    // flexGrow:1 -> ekrana gore kucuk kalırsan kendini sıgdır.

    const artir = () => {
        setCount(count + 1)
        setMessage('Artırdınız')
    }

    const azalt = () => {
        setCount(count -1);
        setMessage('Azalttınız.')
    }



    return (
        <SafeAreaView style={styles.background}>
            <View style={{ flex:5, flexDirection:'column', 
                justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1, flexDirection:'row', 
                            justifyContent:'flex-end', flexGrow:1, width:'100%'
                            }}>
                        <Text style={{fontSize:24}}>{message}</Text>
                    </View>
                    <View style={{flex:10, justifyContent:'center'}}>
                        <Text style={{fontSize:200}}>{count}</Text>
                    </View>
            </View>
            <View style={{ flex:1, flexDirection:'row', 
                            justifyContent:'center', alignItems:'center'}}>
                    <TouchableHighlight style={styles.button}
                        onPress={azalt}
                    >
                        <Text>
                            - Azalt
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                        onPress={artir}
                    >
                        <Text>
                            + Artır
                        </Text>
                    </TouchableHighlight>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    background: {
        flex:1,
    },
    button: {
        backgroundColor: '#F6D55C',
        padding: 10,
        borderRadius: 20,
        height:40,
        width:60,
        margin:10
    }
})

export default MyLayout;