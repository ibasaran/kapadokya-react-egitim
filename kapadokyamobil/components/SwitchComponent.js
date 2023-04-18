import { useState } from "react";
import { Switch, StatusBar, SafeAreaView, StyleSheet } from "react-native"

const SwitchComponent = () => {

    const [isEnabled, setIsEnabled] = useState(false)

    return (
        <SafeAreaView style={isEnabled ? styles.darkMode: styles.lightMode}>
            <StatusBar  backgroundColor={isEnabled ? 'black': 'white'} 
                hidden={false}
                barStyle={isEnabled ? 'light-content':'dark-content'}
            />
            <Switch 
                value={isEnabled}
                onValueChange={() => setIsEnabled(!isEnabled)}
            />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: 'black'
    },
    lightMode: {
        backgroundColor: 'white'
    }
})

export default SwitchComponent;