import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const textHeader =  ( props ) => {
    const { title } = props
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginTop: 25
    },
    titleText: {
        color: 'black',
        fontSize: 38,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
});



export default textHeader;