import React from "react";
import { FlatList, Text, View } from "react-native";


const FlatListComponent = () => {

    const data = [
        {
            id:1,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:2,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:3,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:4,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:5,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:6,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:7,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:8,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:9,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:10,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:11,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:12,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:13,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:14,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        {
            id:15,
            title: 'Süper Spor Ayakkabı',
            price: 500
        },
        
    ]

    const showDataItem = ({item}) => {
        return (
            <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <Text>------------</Text>
            </View>
        )
    }


    return (
        <FlatList 
            data={data}
            renderItem={showDataItem}
            keyExtractor={item => item.id}
        >

        </FlatList>
    )
}

export default FlatListComponent;