
import {Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            
            >
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        title:"Ana Sayfa",
                        headerTitle: (props) => <Image style={{width:150, height:50}} source={{uri:'https://assets.turbologo.com/blog/tr/2019/09/19134602/instagram-logo-illustration.png'}}/>,
                        headerRight: ({navigation}) => (
                            <TouchableOpacity>
                                <FontAwesomeIcon icon={ faBell } />
                            </TouchableOpacity>
                            
                        )
                    }}
                />
                <Stack.Screen name="Detail" component={DetailScreen}
                    options={
                        ({route}) => ({title: route.params.name})
                    }
                />
                <Stack.Screen name="Notifications" component={NotificationsScreen} 
                    options={{
                        title:'Bildirimler'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;