import {useState} from 'react';
import {
    TextInput,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';

const TextInputComponent = () => {

    const [text, setText] = useState();

    return (
        <SafeAreaView>
            <TextInput style={styles.input}
                onChangeText={setText}
                value={text}
                keyboardType='numeric'
            ></TextInput>
            <Text>{text}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth:1
    }
})

export default TextInputComponent;