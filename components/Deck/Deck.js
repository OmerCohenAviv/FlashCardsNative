import React from 'react';
import { View } from 'react-native';
import DeckTitle from '../UI/TextHeader/TextHeader'

const deck = ( props ) => {
    const { title, Cards } = props
    return (
        <View>
            {/* <CardsInside Cards={Cards.length} />
            <NewCard />
            <StartQuiz   /> */}
        </View>
    );
};


export default deck;