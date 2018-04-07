import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from './GlobalStyles';

const CardTitle = props => (
  <View style={[GlobalStyles.cardTitleView]}>
    <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}>{props.title} </Text>
  </View>
);

export default CardTitle;
