import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
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
            const fetchedDecks = JSON.parse(allDecks)
            this.setState({ allDecks: fetchedDecks })
        });
    };
    componentDidUpdate() {
        getDecks().then((allDecksFetched) => {
            if (allDecksFetched !== JSON.stringify(this.state.allDecks)) {

                return this.setState({ allDecks: JSON.parse(allDecksFetched) })
            }
            else return;
        })
    };
    clickDeckHandler = (card) => {
        const { navigation } = this.props
       return navigation.navigate('Deck', {
            deckData: card
        })
    };

    render() {

        if (this.state.allDecks !== null) {
            return (
                <View style={{ flex: 1 }}>
                    <TextHeader title='All Decks!' />
                    <ShowAllDecks
                        clickDeck={(card) => this.clickDeckHandler(card)}
                        allDecks={this.state.allDecks}
                        showDeck={this.state.showDeck} />
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

