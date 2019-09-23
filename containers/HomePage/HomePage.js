import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextHeader from '../../components/UI/TextHeader/TextHeader';

class HomePage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
               <TextHeader title='All Decks!' />
            </View>
        );
    };
};


export default HomePage;

