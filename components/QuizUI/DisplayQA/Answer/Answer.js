import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const answer = (props) => {
    const { answer } = props
    return (
        <View>
            <Text style={styles.text}>
                {answer}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 15,
        padding: 6,
        borderRadius: 6,
        backgroundColor: 'rgb(66, 245, 191)'
    }
})

export default answer;