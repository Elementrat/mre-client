import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';
import Locked from './Locked';

const Items = ({ character, locked, currencyName }) => {
  const { items } = character;
  items.unshift({ name: currencyName, count: character.currency, _id: 'cur' });

  return (
    <View style={GlobalStyles.viewPagerPageStyle} key="5">
      {
      locked
        ? <Locked />
        : <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
          <CardTitle title="Items" />
          <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
            <View style={GlobalStyles.section}>
              <Text style={GlobalStyles.boldLine}>{'Things you have. Buy, sell or trade as you see fit.'} </Text>
            </View>
            <FlatList
              data={items}
              keyExtractor={x => x._id}
              renderItem={({ item }) =>
              (<View style={GlobalStyles.listItemCard}><Text>{item.count} {item.name}</Text></View>)}
            />
          </ScrollView>
          </View>
      }
    </View>
  );
};

export default Items;
