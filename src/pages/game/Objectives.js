import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';

const Objectives = ({character}) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="3">
    <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title={"Objectives"} />

      <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>{'These are in your best interest to accomplish before the evening continues. Keep an eye on what others are doing too!'} </Text>
        </View>
        <FlatList
          data={character.objectives}
          keyExtractor={x => x._id}
          renderItem={({ item }) =>
          (<View style={GlobalStyles.listItem}><Text>{item.name}</Text></View>)}
        />
      </ScrollView>
    </View>
  </View>
);

export default Objectives;
