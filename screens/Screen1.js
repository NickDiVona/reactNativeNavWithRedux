//SYSTEM IMPORTS
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//USER IMPORTS
import {
  incrementCurrentCount,
  decrementCurrentCount
} from '../redux/actionCreators';

class Screen1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Screen 1</Text>
        <Text style={styles.numberLabelStyle}>{this.props.counterNumber}</Text>
        <TouchableOpacity
          onPress={() => this.props.incrementCurrentCount()}
          style={styles.addOneButtonStyle}
        >
          <View>
            <Text>Add one to number!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.decrementCurrentCount()}
          style={styles.addOneButtonStyle}
        >
          <View>
            <Text>Subtract one from number!</Text>
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
      incrementCurrentCount,
      decrementCurrentCount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  numberLabelStyle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  addOneButtonStyle: {
    backgroundColor: 'lightgoldenrodyellow',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10
  }
});
