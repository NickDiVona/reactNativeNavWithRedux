//SYSTEM IKPORTS
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
//USER IMPORTS
import AppNavigator from './navigation/AppNavigation';
import appDataStore from './redux/configureStore';

class App extends Component {
  render() {
    return (
      <Provider store={appDataStore}>
        <SafeAreaView style={styles.containerStyle}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});
