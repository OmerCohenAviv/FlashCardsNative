import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { saveDeckTitle } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import CreateDeckUI from '../../components/CreateDeckUI/CreateDeckUI';

class CreateDeck extends Component {
    state = {
        DeckTextValue: null
    };
    componentDidMount() {
        console.log('mounted')
    }
    changeTextHandler = (text) => {
        this.setState({ DeckTextValue: text })
    };
    submitNewDeck = () => {
        const { navigation } = this.props
        saveDeckTitle(this.state.DeckTextValue)
        Keyboard.dismiss()
        navigation.navigate('Home', {
            allDecks: null
        })
        this.setState({DeckTextValue: null})
    }
    render() {
        return (
            <View style={{flex:1}}>
                <CreateDeckUI
                    submit={this.submitNewDeck}
                    value={this.state.DeckTextValue}
                    valid={this.state.DeckTextValue === null || this.state.DeckTextValue.trim() === ''}
                    change={this.changeTextHandler} />
            </View>
        );
    };
};


export default CreateDeck;