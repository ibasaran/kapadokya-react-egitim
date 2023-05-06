import {View, Text, TouchableOpacity} from 'react-native';


const NotificationsScreen = ({navigation}) => {
    return (
        <View>
            <Text>Merhaba Bildirimler Ekranı</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {name:'Notification ekranından geliyorum'})}>
                <Text>Detay ekrana git</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NotificationsScreen;