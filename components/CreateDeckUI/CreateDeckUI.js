import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CreateTitle from './CreateTitle/CreateTitle';
import CreateInput from './CreateInput/CreateInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const createDeck = (props) => {
    const { submit, valid } = props
    return (
        <View style={styles.container}>
            <View>
                <CreateTitle />
            </View>
            <View>
                <CreateInput
                    value={props.value}
                    change={props.change} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={valid ? styles.btnDisabled : styles.btn}
                    onPress={submit}
                    disabled={valid}>
                    <Text>
                        Create Deck!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        width: '40%',
        padding: 10,
        backgroundColor: 'rgb(3, 148, 252)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
        marginTop: 15,
        alignSelf: 'center',
    },
    btnDisabled: {
        width: '40%',
        padding: 10,
        backgroundColor: 'rgb(235, 91, 52)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
        marginTop: 15,
        alignSelf: 'center',
    }
});

export default createDeck;