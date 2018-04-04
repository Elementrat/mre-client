import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import EmptyState from '../../EmptyState';

import { GlobalStyles } from '../../GlobalStyles';

const localStyles = StyleSheet.create({
  centerListitems: {
    flex: 1,
  },
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

      <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
        <View style={[GlobalStyles.cardTitleView]}>
          <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}>Mysteries</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={[GlobalStyles.cardPad]}>
          <FlatList
            data={props.mysteries}
            keyExtractor={keyExtract}
            style={localStyles.centerListitems}
            renderItem={({ item }) =>
              (
                <TouchableOpacity
                  style={[GlobalStyles.listItemCard, GlobalStyles.bottomAccent]}
                  onPress={() =>
                  navToMysteryDetails(item._id)}
                >
                  <View style={GlobalStyles.column}>
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={{ uri: item.thumbnailURI }}
                    />
                  </View>

                  <View style={GlobalStyles.column}>
                    <Text style={GlobalStyles.boldLine}>{item.name}</Text>
                    <Text>
                      {item.minPlayers} - {item.maxPlayers} players
                    </Text>
                  </View>
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
