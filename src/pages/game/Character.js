import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

const Character = ({ character }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="2">
    <View style={GlobalStyles.card}>
      <Text style={[GlobalStyles.cardTitle, GlobalStyles.centered]}>{character.name}'s Story</Text>
      <Text style={GlobalStyles.boldLine}>{'Who are you?'} </Text>
      <Text>{character.backstory} </Text>
    </View>
  </View>
);

export default Character;
