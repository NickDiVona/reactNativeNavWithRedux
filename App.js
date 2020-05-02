import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AppNavigator from './navigation/AppNavigation';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <AppNavigator />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});
