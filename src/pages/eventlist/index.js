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
  Image,
} from 'react-native';

import { GlobalStyles } from '../../GlobalStyles';

const localStyles = StyleSheet.create({

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
      <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
        <View style={[GlobalStyles.cardTitleView]}>
          <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}> Events</Text>
        </View>

        <ScrollView style={[GlobalStyles.cardPad]} contentContainerStyle={GlobalStyles.contentContainer}>
          <FlatList
            data={props.events}
            keyExtractor={keyExtract}
            renderItem={({ item }) =>
              (
                <TouchableOpacity
                  style={[GlobalStyles.listItemCard, GlobalStyles.bottomAccent]}
                  onPress={() =>
                  navToGameLobby(item._id)}
                >
                  <View style={GlobalStyles.column}>
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={{ uri: item.mysteryData.thumbnailURI }}
                    />
                  </View>
                  <View style={GlobalStyles.column}>
                    <Text style={GlobalStyles.boldLine}>
                      { item.mysteryData.name }
                    </Text>
                    <Text>
                    Hosted by { item.hostUserName }
                    </Text>
                  </View>

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

