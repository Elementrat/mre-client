import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

const Objectives = ({character}) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="3">
    <View style={GlobalStyles.card}>
      <Text style={[GlobalStyles.cardTitle, GlobalStyles.centered]}>Objectives</Text>
      <Text style={GlobalStyles.boldLine}>{'These are in your best interest to accomplish before the evening continues. Keep an eye on what others are doing too!'} </Text>
      <FlatList
        data={character.objectives}
        keyExtractor={x => x._id}
        renderItem={({ item }) =>
        (<View style={GlobalStyles.listItem}><Text>{item.name}</Text></View>)}
      />
    </View>
  </View>
);

export default Objectives;
