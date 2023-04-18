import React, {useState} from "react";
import { TouchableHighlight, View, Text } from "react-native";

const TouchableHighlightComponent = () => {

    const [count,setCount] = useState(0);

    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <View>
                <Text>{count}</Text>
            </View>
            <TouchableHighlight
                onPress={() => setCount(count + 1)}
                style={{padding:10, backgroundColor:'grey'}}
            >
                <View>
                    <Text>
                        Dokun Bana
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )

}

export default TouchableHighlightComponent;