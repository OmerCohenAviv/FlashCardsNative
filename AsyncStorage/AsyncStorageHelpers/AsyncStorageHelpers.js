
import { AsyncStorage } from 'react-native';


// getDecks() //Getting all Decks Title (Main Page)
// getDeck() // getting a deck data. (After showing a spec Deck)
// saveDeckTitle() //Creating a deck
// addCardToDeck() //Creating a new Card to a spec Deck.

const allDecksJSON = JSON.stringify('ALL_DECKS');

const allDecksObject = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'How are you today',
                answer: 'Fine Thank You'
            },
            {
                question: 'Where are u from',
                answer: 'Israel'
            }
        ]
    },
    Math: {
        title: 'Math',
        questions: [
            {
                question: 'how much is 2x2',
                answer: '4?'
            },
            {
                question: 'is root of 2 Real number?',
                answer: 'yes.'
            },
            {
            question: 'are you sick?',
            answer: 'no?'
            }
        ]
    }
}

//Setting allDecks (demo object is given)
export async function initDecks() {
    console.log('init')
    return await AsyncStorage.setItem('ALL_DECKS', JSON.stringify(allDecksObject))
};
//fetching allDecks 
export async function getDecks() {
    return await AsyncStorage.getItem('ALL_DECKS')
};
//Fetching specific Deck
export const getDeck = (deckID) => {
    let deck = ''
    AsyncStorage.getItem('ALL_DECKS')
        .then((allDecks) => {
            deck = allDecks.filter((deck) => deck === deckID)
        })
        .catch((error) => console.log('error'))
    return deck;
};
//Creating a new Deck by title.
export const saveDeckTitle = (title) => {
    AsyncStorage.mergeItem(allDecksJSON, title)
};
//Adding a question to a given deck (title)
export const addCardToDeck = (title, card) => {
    const deck = JSON.parse(getDeck(title));
    const copyedCard = card;
    const updatedDeck = JSON.stringify({ ...copyedCard, ...deck });
    AsyncStorage.mergeItem(allDecksJSON, updatedDeck);
};

