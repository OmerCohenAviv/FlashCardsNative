import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, AsyncStorage, ActivityIndicator } from 'react-native';

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
    initStorage: false
  };
  componentDidMount() {
    const { initStorage } = this.state
    getDecks().then((allDecksFetched) => {
      if (allDecksFetched === null) {
        initDecks()
        return this.setState({ initStorage: true, allDecks: JSON.parse(allDecksFetched) })
      }
      if (allDecksFetched && !initStorage) {
        this.setState({ initStorage: true })
      }
    })
  };
  componentDidUpdate() {
    getDecks().then((allDecksFetched) => {
      if( allDecksFetched !== JSON.stringify(this.state.allDecks)) {
       return this.setState({allDecks: JSON.parse(allDecksFetched)})
      }
      else return;
    })
};

  render() {
    let AppContainerVar = <ActivityIndicator size="large" color="#0000ff" />
    if (this.state.initStorage) {
      AppContainerVar = <AppContainer />
    };
    return (
      <View style={{ flex: 1 }}>
        <StatusBarFlashCards barStyle='light-content' backgroundColor='black' />
        {AppContainerVar}
      </View>
    );
  };
}



export default App;
