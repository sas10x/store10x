import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import ProductScreen from '../screens/ProductScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
            <Tab.Screen
                component={HomeStack}
                name="home"
                options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="home" color={color} size={25} />
                ),
                }}
            />
            <Tab.Screen 
                component={HomeScreen} 
                name="profile"
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="user" color={color} size={19} />
                    )
                }}
            />
            <Tab.Screen 
                component={ShoppingCartScreen} 
                name="cart"
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="shopping-cart" color={color} size={19} />
                    )
                }}
            />
            <Tab.Screen 
                component={ProductScreen} 
                name="menu"
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="menu" color={color} size={19} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNav;
