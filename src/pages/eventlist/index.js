import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { GlobalStyles } from '../../GlobalStyles';

const localStyles = StyleSheet.create({
  eventCard: {
    backgroundColor: 'rgb(20,20,20)',
    color: 'white',
    marginVertical: 2,
  },
});

const EventListComponent = (props) => {
  const navToGameLobby = (eventID) => {
    props.navigation.navigate('EventLobby', { eventID });
  };

  const navToDebug = () => {
    props.navigation.navigate('Debug');
  };

  const keyExtract = e => e._id; // TODO add underscore to id

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <ScrollView style={[GlobalStyles.card]} contentContainerStyle={GlobalStyles.contentContainer}>

        <Text style={GlobalStyles.cardTitle}>Events</Text>
       
        <FlatList
          data={props.events}
          keyExtractor={keyExtract}
          renderItem={({ item }) =>
            (
              <TouchableOpacity
                style={[GlobalStyles.listItemCard]}
                onPress={() =>
                navToGameLobby(item._id)}
              >
                <Text>
                  {item.mysteryData.name}
                </Text>
                <Text>
                   {item.startDateTime}
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
      </ScrollView>
    </View>
  );
};

EventListComponent.propTypes = {
  navigation: PropTypes.object,
};

EventListComponent.defaultProps = {
  navigation: null,
};


const EventListContainer = createContainer(() => {
  Meteor.subscribe('events');
  return {
    count: Meteor.collection('events').find().length,
    events: Meteor.collection('events').find(),
  };
}, EventListComponent);

export default EventListContainer;

