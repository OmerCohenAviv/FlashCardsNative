import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const questionsInside = (props) => {
    const { questionsInside, deckName } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {`There ${questionsInside} Cards inside '${deckName}' Deck`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic'
    }
})

export default questionsInside;