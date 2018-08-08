import React from 'react';
import { Text, View } from 'react-native';

import styles from '../Styles';

class InputButton extends React.Component {
  render() {
    return (
      <View style={styles.inputButton}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </View>
    );
  }
}

export default InputButton;