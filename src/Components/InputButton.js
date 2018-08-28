import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from '../Styles';

class InputButton extends React.Component {
  render() {
    return (
      <TouchableHighlight style={[styles.inputButton, 
                                  this.props.highlight ? styles.inputButtonHilighted : null]}
                          underlayColor="#193441"
                          onPress={this.props.onPress}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}

export default InputButton;