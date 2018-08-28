import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  displayText: {
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  input: {
    flex: 8,
    backgroundColor: 'black',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;