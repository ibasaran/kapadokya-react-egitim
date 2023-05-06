import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';

const HomeScreen = ({navigation}) => {

    const [mytext,setMytext]= useState()


    return (
        <View>
            <Text>Merhaba Home Screen</Text>
            <TextInput onChangeText={(deger) => setMytext(deger)} value={mytext}></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {name:mytext})}>
                <Text>Detay ekranına git</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Text>Bildirimler ekranına git</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.setOptions({title: 'Degisti'})}>
                <Text>Başlığı değiştir.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;