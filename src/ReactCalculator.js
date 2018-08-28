import React from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';
import InputButton from './Components/InputButton';

const inputButtons = [
  ['C', '+/-', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

export default class ReactCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      inputValue: 0,
      previousInputValue: 0,
      selectedOperator: null,
    };
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
          highlight={this.state.selectedOperator === input}
          key={r + '-' + i}
          onPress={this._onInputButtonPressed.bind(this, input)}
          />);
      }
      views.push(<View style={styles.inputRow} key={'row-' + r}>{inputRow}</View>);
    }
    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input);
      case 'string':
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(num) {
    this.setState({
      inputValue: (this.state.inputValue * 10) + num,
    });
  }

  _handleStringInput(str) {
    switch (str) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          selectedOperator: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
        });
        break;
      case '=':
        let op = this.state.selectedOperator,
            inputValue = this.state.inputValue,
            previousInputValue = this.state.previousInputValue;
        
        if (!op) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + op + inputValue),
          selectedOperator: null,
        });
        break;
      case 'c':
        this.setState({
          previousInputValue: 0,
          inputValue: 0,
          selectedOperator: null,
        });
        break;
    }
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
