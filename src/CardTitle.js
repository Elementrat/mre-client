import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from './GlobalStyles';

const localStyles = StyleSheet.create({
  emptyText: {
    color: 'rgb(200,200,200)',
    textAlign: 'center',
  },
  emptyStateContainer: {
    width: '100%',
    padding: 25,
    alignSelf: 'flex-start',
  }
});

const CardTitle = props => (
  <View style={[GlobalStyles.cardTitleView]}>
    <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}>{props.title} </Text>
  </View>
);

export default CardTitle;
