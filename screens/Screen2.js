//SYSTEM IMPORTS
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//USER IMPORTS
import { decrementCurrentCount } from '../redux/actionCreators';

class Screen2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Screen 2</Text>
        <Text style={styles.numberLabelStyle}>{this.props.counterNumber}</Text>
        <TouchableOpacity
          onPress={() => this.props.decrementCurrentCount()}
          style={styles.decrementCountButtonStyle}
        >
          <View>
            <Text>Subtract 1 from number!</Text>
          </View>
        </TouchableOpacity>
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

const mapStateToProps = (state) => {
  return {
    counterNumber: state.counterNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      decrementCurrentCount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);

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
  },
  decrementCountButtonStyle: {
    backgroundColor: 'honeydew',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10
  },
  numberLabelStyle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
