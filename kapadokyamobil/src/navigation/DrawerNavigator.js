
import {Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import 'react-native-gesture-handler';
import AboutPage from './src/screens/AboutPage';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
            <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}




const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HomeStack" component={HomeStack}
                    options={{
                        headerShown:false
                    }}
                ></Drawer.Screen>
                <Drawer.Screen name="Notifications" component={NotificationsScreen}></Drawer.Screen>
                <Drawer.Screen name="About" component={AboutPage}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;