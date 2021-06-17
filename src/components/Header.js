import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.title}>בחירות ישראל 2021</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate(props?.buttonText)}
    >
      <Text style={styles.buttonText}>{props?.buttonText}</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'pink',
    height: 100,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#68a0cf',
    width: 60,
    height: 20,
    right: 10,
    top: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    top: 23,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
Header.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.object,
  buttonText: PropTypes.string,
};
export default Header;
