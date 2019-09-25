import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const createTitle = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Create A Card
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
        fontSize: 35,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black'
    }
})


export default createTitle;