import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const question = (props) => {
    const { question } = props
    return (
        <View>
            <Text style={styles.text}>
                {question}
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
        backgroundColor: 'rgb(245, 170, 66)'
    }
})
export default question;