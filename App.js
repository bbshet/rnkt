import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from './pages/Home'
import Classification from "./pages/Classification";
import BookSelf from "./pages/BookSelf";
import Mine from "./pages/Mine";

const BottomTabs = createBottomTabNavigator()
const getTabBarIcon = (name) => ({color, size}) => <MaterialCommunityIcons name={name} color={color} size={size}/>
export default function App() {
    return (
        <NavigationContainer>
            {/*<stack.Navigator>*/}
            {/*  <stack.Screen name={'Home'} component={Home} />*/}
            {/*</stack.Navigator>*/}
            <BottomTabs.Navigator>
                <BottomTabs.Screen name='Home' component={Home}
                                   options={{
                                       title: '首页',
                                       // headerShown: false,
                                       tabBarIcon: getTabBarIcon('home'),
                                   }}/>
                <BottomTabs.Screen name='Category' component={Classification} options={{
                    title: '分类',
                    headerShown: false,
                    tabBarIcon: getTabBarIcon('image-album')
                }}/>
                <BottomTabs.Screen name='BookSelf' component={BookSelf} options={{
                    title: '书架',
                    headerShown: false,
                    tabBarIcon: getTabBarIcon('bookshelf')
                }}/>
                <BottomTabs.Screen name='Mine' component={Mine} options={{
                    title: '我的',
                    headerShown: false,
                    tabBarIcon: getTabBarIcon('account'),
                    tabBarStyle: {
                        position: 'absolute',
                        borderTopColor: 'rgba(0, 0, 0, .2)',
                    },
                }}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
