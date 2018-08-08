import React from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';

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
