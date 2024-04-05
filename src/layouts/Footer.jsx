import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 MeetToDoList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  text: {
    color: '#222',
    fontSize: 16,
  },
});

export default Footer;