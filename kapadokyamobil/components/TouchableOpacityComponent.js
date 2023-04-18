import React, {useState} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';

const TouchableOpacityComponent = (props) => {

    const [count,setCount] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>
                    {props.countText} : {count}
                </Text>
            </View>
           <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={styles.button}
           >
                <Text style={styles.buttonText}>Bana bas</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold'
    }
})

export default TouchableOpacityComponent;