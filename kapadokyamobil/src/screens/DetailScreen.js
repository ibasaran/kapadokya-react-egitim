import {Text, View, TouchableOpacity} from 'react-native';

const DetailScreen = ({navigation, route}) => {

    const {name} = route.params;


    return (
        <View>
            <Text>Merhaba Detail Screen</Text>
            <Text>{name}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Geri Dön</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailScreen;