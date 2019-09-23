import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getDecks } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers'
import ShowAllDecks from '../../components/ShowAllDecks/ShowAllDecks';
import TextHeader from '../../components/UI/TextHeader/TextHeader';

class HomePage extends Component {
    state = {
        allDecks: null,
        showDeck: false,
    };
    componentDidMount() {
        getDecks().then((allDecks) => {
            const fetchedDecks = { ...JSON.parse(allDecks) }
            this.setState({ allDecks: fetchedDecks })
        });
    };
    render() {
        if (this.state.allDecks !== null ) {
            return (
                <View style={{ flex: 1 }}>
                <TextHeader title='All Decks!' />
                <ShowAllDecks allDecks={this.state.allDecks}  showDeck={this.state.showDeck}/>
            </View>
            )
        }
        else return (
            <View style={{ flex: 1 }}>
                <TextHeader title='All Decks!' />
            </View>
        );
    };
};


export default HomePage;

