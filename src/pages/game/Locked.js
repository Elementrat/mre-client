import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';

const Locked = () => {
  return (
    <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title="Locked Card" />
      <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>{'Locked'} </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Locked;


/*

    <View style={GlobalStyles.viewPagerPageStyle} key="5">
      <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
        <CardTitle title="Locked Card" />

        <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
          <View style={GlobalStyles.section}>
            <Text style={GlobalStyles.boldLine}>{'Locked'} </Text>
          </View>
        </ScrollView>
      </View>
    </View>);

    */