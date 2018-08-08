import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReactCalculator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}></View>
        <View style={styles.input}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 2,
    backgroundColor: 'white',
  },
  input: {
    flex: 8,
    backgroundColor: 'black',
  },
});