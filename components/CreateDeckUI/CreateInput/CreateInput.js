import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const createInput = (props) => {
    const { change, value } = props
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                style={styles.textInput}
                onChangeText={change}
                placeholder='  Deck Name'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
        marginRight: 15,
        marginLeft: 15
    },
    textInput: {
        textAlignVertical: 'center',
        textAlign: 'justify',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1  ,
        borderRadius: 6
    }
});


export default createInput;