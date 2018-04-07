import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';
import Locked from './Locked';

const Knowledge = ({ character, locked, pageKey }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key={pageKey}>

    {
    locked
    ? <Locked />
    : <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title="Knowledge" />
      <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>Only YOU know these things. Use them in scheming, bribing, and maintaining your innocence.</Text>
        </View>
        <FlatList
          data={character.knowledge}
          keyExtractor={x => x._id}
          renderItem={({ item }) =>
            (<View style={GlobalStyles.listItem}><Text>{item.name}</Text></View>)}
        />
      </ScrollView>
    </View>
  }
  </View>
);


export default Knowledge;
