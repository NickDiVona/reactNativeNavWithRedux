import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ForgotScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Forgot password?</Text>
        <TouchableOpacity
          style={styles.goBackButtonStyle}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <View>
            <Text>Nevermind, go back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ForgotScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum'
  },
  goBackButtonStyle: {
    backgroundColor: 'mediumpurple',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  }
});
