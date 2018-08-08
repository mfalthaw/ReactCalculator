import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactCalculator from './src/ReactCalculator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ReactCalculator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
