import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';

const deckTitleBtn = ({ title, questionsLength, card, clickDeck }) => {
    return (
        <View key={title} style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => clickDeck(card)}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
            <Text>There Are {questionsLength} Cards In This Deck</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width: '55%'
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'lightblue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
      },
})


export default deckTitleBtn;