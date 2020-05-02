//SYSTEM IMPORTS
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
//USER IMPORTS

class Screen1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Screen 1</Text>
        <Text>{this.props.counterNumber}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterNumber: state.counterNumber
  };
};

export default connect(mapStateToProps, null)(Screen1);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
});
