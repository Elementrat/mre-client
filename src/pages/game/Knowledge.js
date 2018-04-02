import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

const Knowledge = ({character}) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="4">
    <View style={GlobalStyles.card}>
      <Text style={[GlobalStyles.cardTitle, GlobalStyles.centered]}>Knowledge</Text>
      <Text style={GlobalStyles.boldLine}>Only YOU know these things. Use them in scheming, bribing, and maintaining your innocence.</Text>
      <FlatList
        data={character.knowledge}
        keyExtractor={x=> x._id}
        renderItem={({ item }) =>
          (<View style={GlobalStyles.listItemCard}><Text>{item.name}</Text></View>)}
      />
    </View>
  </View>
);

export default Knowledge;
