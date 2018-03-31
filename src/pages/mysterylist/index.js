import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import EmptyState from '../../EmptyState';

import { GlobalStyles } from '../../GlobalStyles';

const localStyles = StyleSheet.create({
  centerListitems: {
    flex: 1,
  }
});

const MysteryListComponent = (props) => {
  const navToMysteryDetails = (mysteryID) => {
    props.navigation.navigate('MysteryDetails', {
      mysteryID,
    });
  };

  const navToDebug = () => {
    props.navigation.navigate('Debug');
  };

  const keyExtract = item => item.name; // TODO add underscore to id

  const mockMysteries = [
    { name: 'Murder in the Keep', id: 1 },
    { name: 'Base Station Gamma', id: 5 },
  ];

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <ScrollView style={[GlobalStyles.card]}>
        <Text style={GlobalStyles.cardTitle}>Mysteries</Text>

        <FlatList
          data={props.mysteries}
          keyExtractor={keyExtract}
          style={localStyles.centerListitems}
          renderItem={({ item }) =>
            (
              <TouchableOpacity
                style={[GlobalStyles.listItemCard]}
                onPress={() =>
                navToMysteryDetails(item._id)}
              >
                <Text > {item.name}
                </Text>
                <Text>
                  {item.minPlayers} - {item.maxPlayers} players
                </Text>
              </TouchableOpacity>
            )
            }
        />
        <TouchableOpacity
          style={[GlobalStyles.listItemCard]}
          onPress={() =>
          navToDebug()}
        >
          <Text>Debug Menu </Text>
        </TouchableOpacity>

        <EmptyState text={
          `Make sure to check back.
We're always adding more!`}
        />
      </ScrollView>
    </View>
  );
};

MysteryListComponent.propTypes = {
  navigation: PropTypes.object,
  mysteries: PropTypes.array,
};

MysteryListComponent.defaultProps = {
  navigation: null,
  mysteries: [],
};

const MysteryList = createContainer(() => {
  Meteor.subscribe('mysteries');
  return {
    count: Meteor.collection('mysteries').find().length,
    mysteries: Meteor.collection('mysteries').find(),
  };
}, MysteryListComponent);

export default MysteryList;
