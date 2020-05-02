import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.loginScreenTitleTextStyle}>LoginScreen</Text>
        <TouchableOpacity
          style={styles.loginButtonStyle}
          onPress={() => this.props.navigation.navigate('BottomTabNav')}
        >
          <View>
            <Text>Log in!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPasswordButtonStyle}
          onPress={() => this.props.navigation.navigate('Forgot')}
        >
          <View>
            <Text>Forgot password?</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightseagreen'
  },
  forgotPasswordButtonStyle: {
    backgroundColor: 'orange',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  loginButtonStyle: {
    backgroundColor: 'orange',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10
  },
  loginScreenTitleTextStyle: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'serif'
  }
});
