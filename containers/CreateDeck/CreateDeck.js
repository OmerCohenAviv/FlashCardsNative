import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { saveDeckTitle } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import TextHeader from '../../components/UI/TextHeader/TextHeader';

class CreateDeck extends Component {
    state = {
        DeckTextValue: null
    };

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

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextHeader title='Create Deck!' />
                <View>
                    <TextInput
                            accessibilityLabel='hey'
                        placeHolder='Deck Name Goes here!'
                        style={{ justifyContent: 'center', borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={this.changeTextHandler}
                        value={this.state.DeckTextValue} />
                    <TouchableOpacity

                        onPress={this.submitNewDeck}
                        disabled={this.state.DeckTextValue === null || this.state.DeckTextValue.trim() === ''}
                        style={this.state.DeckTextValue === null || this.state.DeckTextValue.trim() === '' ? styles.SubmitDisabledBtn : styles.SubmitBtn}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    SubmitBtn: {
        alignItems: 'center',
        marginTop: 15,
        padding: 7,
        backgroundColor: 'lightgreen'
    },
    SubmitDisabledBtn: {
        alignItems: 'center',
        marginTop: 15,
        padding: 7,
        backgroundColor: 'red'
    }
})

export default CreateDeck;