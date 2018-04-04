import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';

const Character = ({ character }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="2">
    <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title={`${character.name}'s story`} />
      <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
        <Text style={GlobalStyles.boldLine}>{'Who are you?'} </Text>
        <Text>{character.backstory} </Text>
        </ScrollView>
    </View>
  </View>
);

export default Character;
