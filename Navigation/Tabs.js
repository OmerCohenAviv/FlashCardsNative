import React from 'react';
import { Platform } from 'react-native';
import HomePage from '../containers/HomePage/HomePage';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';

export const Tabs = createMaterialTopTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'All Decks',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='credit-card' size={25} color={tintColor} />
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'yellow' : 'yellow',
        style: {
            fontSize: 25,
            fontWeight: 'bold',
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? 'lightblue' : 'lightblue',
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    },

});

