import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';

const Knowledge = ({character}) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="4">
    <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title={"Knowledge"} />
      
      <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>

      <Text style={GlobalStyles.boldLine}>Only YOU know these things. Use them in scheming, bribing, and maintaining your innocence.</Text>
        <FlatList
          data={character.knowledge}
          keyExtractor={x=> x._id}
          renderItem={({ item }) =>
            (<View style={GlobalStyles.listItem}><Text>{item.name}</Text></View>)}
        />
      </ScrollView>
    </View>
  </View>
);

export default Knowledge;
