import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

const Items = ({ character, currencyName }) => {

  let { items } = character;
  items.unshift({ name: currencyName, count: character.currency, _id: 'cur' });

  return (
    <View style={{ height: '100%', width: '100%', padding: 10, borderWidth: 0, flexShrink: 0, flexGrow: 1 }} key="5">
      <View style={GlobalStyles.card}>
        <Text style={[GlobalStyles.cardTitle, GlobalStyles.centered]}>Items</Text>
        <Text style={GlobalStyles.boldLine}>{'Things you have. Buy, sell or trade as you see fit.'} </Text>
        <FlatList
          data={items}
          keyExtractor={x => x._id}
          renderItem={({ item }) =>
          (<View style={GlobalStyles.listItemCard}><Text>{item.count} {item.name}</Text></View>)}
        />
      </View>
    </View>);
};

export default Items;
