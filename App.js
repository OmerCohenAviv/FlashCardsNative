import React, { Component } from 'react';
import { View, StatusBar, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import { getDecks, initDecks } from './AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import { mainStackNavigator } from './Navigation/Stack';
import { createAppContainer } from 'react-navigation';

const StatusBarFlashCards = (...props) => {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent  {...props} />
    </View>
  );
};

const AppContainer = createAppContainer(mainStackNavigator)

class App extends Component {
  state = {
    initStorage: false
  };
  componentWillMount() {
    const { initStorage } = this.state
    getDecks().then((allDecksFetched) => {
      if (allDecksFetched === null) {
        initDecks()
        return this.setState({ initStorage: true })
      }
      if (allDecksFetched && !initStorage) {
        this.setState({ initStorage: true })
      }
    })
  };

  render() {
    let AppContainerVar = <ActivityIndicator size="large" color="#0000ff" />
    if (this.state.initStorage) {
      AppContainerVar = <AppContainer />
    };
    return (
      <View style={styles.container}>
        <StatusBarFlashCards />
        {AppContainerVar}
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
