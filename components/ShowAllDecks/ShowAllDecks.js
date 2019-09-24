import React from 'react';
import { FlatList } from 'react-native';
import DeckTitleBtn from './DeckTitleBtn/DeckTitleBtn';
import Deck from '../Deck/Deck';


const showAllDecks = (props) => {
    let { allDecks, showDeck, clickDeck } = props
    const _renderItem = ({ item }) => {
        return < DeckTitleBtn
            card={item}
            title={item.title}
            key={item.title}
            questionsLength={item.questions.length}
            clickDeck={ clickDeck } />
    };
    if (showDeck === false) {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={Object.values(allDecks)}
                renderItem={_renderItem}
                keyExtractor={item => item.title}
            />
        );
    }
    else return (
        <Deck  title='check' />
    )
};

export default showAllDecks;