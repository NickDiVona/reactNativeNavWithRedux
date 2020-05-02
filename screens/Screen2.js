import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Screen 2</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.logOutButtonStyle}
        >
          <View>
            <Text>Logout</Text>
          </View>
        </TouchableOpacity>
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
  },
  logOutButtonStyle: {
    backgroundColor: 'mediumaquamarine',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  }
});
