import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { getDecks } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import DeckTitleBtn from './DeckTitleBtn/DeckTitleBtn';


const showAllDecks = (props) => {
    let { allDecks, showDeck } = props
    const _renderItem = ({ item }) => {
        return < DeckTitleBtn title={item.title} key={item.title} questionsLength={item.questions.length} />
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
};

export default showAllDecks;