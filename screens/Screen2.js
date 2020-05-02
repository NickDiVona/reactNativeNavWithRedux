import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Screen 2</Text>
      </View>
    );
  }
}

export default Screen2;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightsalmon'
  }
});
