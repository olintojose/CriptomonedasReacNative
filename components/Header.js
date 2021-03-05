import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Header = () => <Text style={styles.header}>Criptomonedas</Text>;

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#3da9fc',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fffffe',
    marginBottom: 30,
  },
});

export default Header;
