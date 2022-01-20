import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import BottomTabNav from './bottomTabNav';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name="HomeScreen"/>
            <Stack.Screen component={ProductScreen} name="ProductScreen"/>
        </Stack.Navigator>
    )
}

export default HomeStack
