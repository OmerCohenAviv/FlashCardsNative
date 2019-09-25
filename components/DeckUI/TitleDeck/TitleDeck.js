import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const titleDeck = (props) => {
    const { title } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {`${title}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       marginBottom: 10,
       alignItems: 'center'
    },
    text: {
        fontSize: 45,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black'
    }
})

export default titleDeck;