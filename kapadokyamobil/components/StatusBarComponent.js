import { useState } from 'react';
import {
    StatusBar,
    View,
    Text,
    SafeAreaView,
    TouchableHighlight
} from 'react-native';

const StatusBarComponent = () => {

    const [showBar, setShowBar] = useState(false)

    return (
        <SafeAreaView>
            <StatusBar
                hidden={showBar}
                backgroundColor="white"
                barStyle="dark-content"
            ></StatusBar>
            <Text>Merhaba</Text>
            <TouchableHighlight onPress={() => setShowBar(false)}>
                <Text>Status Bar Göster</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setShowBar(true)}>
                <Text>Status Bar Kaldır</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )

}

export default StatusBarComponent;