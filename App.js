import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, AsyncStorage,  } from 'react-native';

import Constants from 'expo-constants';
import { getDecks, saveDeckTitle, initDecks } from './AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import { Tabs, } from './Navigation/Tabs';
import { createAppContainer } from 'react-navigation';
import { getProvidesAudioData } from 'expo/build/AR';


const StatusBarFlashCards = (...props) => {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent   {...props} />
    </View>
  );
};
const AppContainer = createAppContainer(Tabs)

class App extends Component {
  state = {
    allDecks: {},
    initDeck: false
  };
  componentDidMount() {
  getDecks().then( (allDecksFetched) => {
    if (allDecksFetched === null ) {
      initDecks().then( () => {
        this.setState({initDeck: true})
      })
    }
    this.setState({allDecks: allDecksFetched})
  })

  }
  render() {
    console.log(this.state.allDecks)
    return (
      <View style={{ flex: 1 }}>
        <StatusBarFlashCards barStyle='light-content' backgroundColor='black' />
        <AppContainer />
      </View>
    );
  };
}



export default App;
