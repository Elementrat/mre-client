import React from 'react';
import { View, Text, Alert, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles } from '../../GlobalStyles';

import CardTitle from '../../CardTitle';
import Locked from './Locked';

const Objectives = ({ character, locked, pageKey, objectiveSets }) => {

  let objectiveList = character.objectives.a;

  for (let x = 0; x < objectiveSets.length; x += 1) {
    const setName = objectiveSets[x];
    if (setName === 'b') {
      objectiveList = [...objectiveList, ...character.objectives.b];
    }
  }

  return (
    <View style={GlobalStyles.viewPagerPageStyle} key={pageKey}>

      {
        locked
          ? <Locked />
          :
          <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
            <CardTitle title="Objectives" />
            <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
              <View style={GlobalStyles.section}>
                <Text style={GlobalStyles.boldLine}>{'These are in your best interest to accomplish before the evening continues. Keep an eye on what others are doing too!'} </Text>
              </View>
              <FlatList
                data={objectiveList}
                keyExtractor={x => x._id}
                renderItem={({ item }) =>
                (<View style={GlobalStyles.listItem}><Text>{item.name}</Text></View>)}
              />
            </ScrollView>
          </View>
      }

    </View>);
}

Objectives.propTypes = {
  character: PropTypes.object,
  locked: PropTypes.bool,
};

Objectives.defaultProps = {
  character: null,
  locked: PropTypes.bool,
};

export default Objectives;
