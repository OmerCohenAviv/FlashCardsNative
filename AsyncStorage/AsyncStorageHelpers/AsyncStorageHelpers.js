
import { AsyncStorage } from 'react-native';


// getDecks() //Getting all Decks Title (Main Page)
// getDeck() // getting a deck data. (After showing a spec Deck)
// saveDeckTitle() //Creating a deck
// addCardToDeck() //Creating a new Card to a spec Deck.



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
                answer: 'yes'
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
export async function getDeck(deckID) {
    return await AsyncStorage.getItem('ALL_DECKS')
        .then((allDecks) => {
            return deck = allDecks.filter((deck) => deck === deckID)
        })
        .catch((error) => console.log('error'))
};
//Creating a new Deck by title.
export const saveDeckTitle = (deckTitle) => {
    let deck = {
        [deckTitle]: {
            title: `${deckTitle}`,
            questions: [],
        }
    }
    AsyncStorage.mergeItem('ALL_DECKS', JSON.stringify(deck))
};
//Adding a question to a given deck (title)
export async function addCardToDeck(title, question, deckData) {
    let updatedDeck = {
        [title]: {
            questions: [
                ...deckData.questions,
               question
            ]
        }
    }
    updatedDeck = JSON.stringify(updatedDeck)
    return await AsyncStorage.mergeItem('ALL_DECKS', updatedDeck);
};

