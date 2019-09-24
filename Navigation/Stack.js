import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import { Tabs } from './Tabs';
import Deck from '../containers/Deck/Deck';
import Quiz from '../containers/Quiz/Quiz';
import AddQuestion from '../containers/AddQuestion/AddQuestion';

 export const mainStackNavigator = createStackNavigator({
    Home: {
        screen: Tabs
    },
    Deck : {
        screen: Deck
    },
    Quiz: {
        screen: Quiz
    },
    AddQuestion: {
        screen: AddQuestion
    }
});