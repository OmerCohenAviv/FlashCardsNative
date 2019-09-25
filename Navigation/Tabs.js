import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomePage from '../containers/HomePage/HomePage';
import CreateDeck from '../containers/CreateDeck/CreateDeck';

export const Tabs = createMaterialTopTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'All Decks',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='credit-card' size={25} color={tintColor} />
        },
    },
    CreateDeck: {
        screen: CreateDeck,
        navigationOptions: {
            tabBarLabel: 'Create a Deck',
        }
    }
    
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'yellow' : 'yellow',
        style: {
            height: 56,
            color:'black',
            fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: Platform.OS === 'ios' ? 'lightgreen' : 'lightblue',
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

