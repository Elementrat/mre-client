import React from 'react';
import { View, Text, Alert, FlatList, ScrollView } from 'react-native';
import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';
import Locked from './Locked';

const Objectives = ({ character, locked }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="3">

    {
      locked
        ? <Locked />
        : <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
          <CardTitle title="Objectives" />
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
    }

  </View>
);

export default Objectives;


/*
const Objectives = ({ character }) => (
    <View style={GlobalStyles.viewPagerPageStyle} key="5">
      <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
        <CardTitle title="Objectives" />
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

*/
