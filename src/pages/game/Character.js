import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles } from '../../GlobalStyles';
import CardTitle from '../../CardTitle';

const Character = ({ character, pageKey }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key={pageKey}>
    <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title={`${character.name}'s story`} />
      <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>{'Who are you?'} </Text>
          <Text>{character.backstory} </Text>
        </View>

      </ScrollView>
    </View>
  </View>
);

Character.propTypes = {
  character: PropTypes.object,
};

Character.defaultProps = {
  character: null,
};

export default Character;
