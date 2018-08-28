import React from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';
import InputButton from './Components/InputButton';

const inputButtons = [
  ['C', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

export default class ReactCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = { inputValue: 0 };
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input);
    }
  }

  _handleNumberInput(number) {
    this.setState({
      inputValue: (this.state.inputValue * 10) + number,
    });
  }

  _renderInputButtons() {
    let views = [];
    for (let r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];
      let inputRow = [];
      for (let i = 0; i < row.length; i++) {
        let input = row[i];
        inputRow.push(<InputButton 
          value={input} 
          key={r + '-' + i}
          onPress={this._onInputButtonPressed.bind(this, input)}
          />);
      }
      views.push(<View style={styles.inputRow} key={'row-' + r}>{inputRow}</View>);
    }
    return views;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={styles.input}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }
}
