import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
