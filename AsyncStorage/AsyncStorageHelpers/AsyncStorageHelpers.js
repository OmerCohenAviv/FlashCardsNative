
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
    }
}


export async function initDecks() {  
    console.log('init')
   return await AsyncStorage.mergeItem( 'ALL_DECKS', JSON.stringify(allDecksObject) )
};

export async function getDecks() {
   return await AsyncStorage.getItem('ALL_DECKS')
};

export const getDeck = (deckID) => {
    let deck = ''
    AsyncStorage.getItem('ALL_DECKS')
        .then((allDecks) => {
            deck = allDecks.filter((deck) => deck === deckID)
        })
        .catch((error) => console.log('error'))
    return deck;
};


export const saveDeckTitle = (title) => {
    AsyncStorage.mergeItem(allDecksJSON, title)
};

export const addCardToDeck = (title, card) => {
    const deck = JSON.parse(getDeck(title));
    const copyedCard = card;
    const updatedDeck = JSON.stringify({ ...copyedCard, ...deck });
    AsyncStorage.mergeItem(allDecksJSON, updatedDeck);
};

