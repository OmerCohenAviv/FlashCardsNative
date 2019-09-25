import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const quizTitle = (props) => {
    const { deckName, totalCards, currentCardPosition } = props
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {`${deckName} Quiz!`}
                </Text>
                <Text>
                    {`This is Card ${currentCardPosition} out of ${totalCards}`}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        fontStyle: 'italic'
    }

})

export default quizTitle;