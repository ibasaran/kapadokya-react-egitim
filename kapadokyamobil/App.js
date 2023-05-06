
import {Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson'
import { faAngry } from '@fortawesome/free-solid-svg-icons/faAngry'
import 'react-native-gesture-handler';
import AboutPage from './src/screens/AboutPage';
import ProfilePage from './src/screens/ProfilePage';

const TabNavigator = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
           <TabNavigator.Navigator screenOptions={
            ({route}) => (
                {
                    tabBarIcon: ({focused, color, size}) => {
    
                        if (route.name === 'HomeTab') {
                            
                            return focused ? (<FontAwesomeIcon  icon={faAngry} />) : (<FontAwesomeIcon  icon={faHome} />)
                        } else if (route.name === 'About') {
                            return (<FontAwesomeIcon  icon={faBook} />)
                        }
    
                    },
                    tabBarStyle: {
                        backgroundColor:'white'
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'blue'
                 }
            )
           }>
                <TabNavigator.Screen name='HomeTab' component={HomeStack}
                    options={{
                        headerShown:false,
                        
                    }}
                ></TabNavigator.Screen>
                <TabNavigator.Screen name='About' component={AboutPage}
                    options={{
                       
                    }}
                ></TabNavigator.Screen>
                <TabNavigator.Screen name='Notification' component={NotificationsScreen}
                    options={{
                        tabBarIcon: ({focused}) => (focused ? <FontAwesomeIcon  icon={faAngry} /> : <FontAwesomeIcon  icon={faBell} />)
                    }}
                
                ></TabNavigator.Screen>
                <TabNavigator.Screen name='Profile' component={ProfilePage}
                    options={{
                        tabBarIcon: () => (<FontAwesomeIcon  icon={faPerson} />)
                    }}
                ></TabNavigator.Screen>
           </TabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default App;