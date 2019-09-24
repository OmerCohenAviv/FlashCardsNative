import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import { Tabs } from './Tabs';
import Deck from '../containers/Deck/Deck';

 export const mainStackNavigator = createStackNavigator({
    Home: {
        screen: Tabs
    },
    Deck : {
        screen: Deck
    }
});