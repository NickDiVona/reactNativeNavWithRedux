import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Screen 1</Text>
      </View>
    );
  }
}

export default Screen1;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
});
