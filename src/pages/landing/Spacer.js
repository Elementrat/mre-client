import React from 'react';
import { View, StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  spacer: {
    borderColor: 'rgba(230,230,230,255)',
    width: '95%',
    height: '100%',
    flexShrink: 1,
    backgroundColor: 'white',
  },
  top: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  bottom: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});

const Spacer = () => (
  <View style={[localStyles.spacer]} />
);

export default Spacer;
