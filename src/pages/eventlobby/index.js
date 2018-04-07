import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import { GlobalStyles, colors } from '../../GlobalStyles';
import CardTitle from '../../CardTitle';

const EventLobbyComponent = (props) => {
  const eventID = props.navigation.state.params.eventID;
  const keyExtract = item => item.name; // TODO add underscore to id

  const localStyles = StyleSheet.create({
    characterBoxTitle: {
      textAlign: 'center',
      flexShrink: 0,
      fontSize: 16,
      padding: 10,
      backgroundColor: colors.darkAccent,
      color: 'white',
      marginBottom: 15,
    },
  });

  const attemptJoinEventAsCharacter = (eventID, characterID) => {
    props.navigation.navigate('Game', { eventID, characterID });
  };

  const characters = props.event.mysteryData.characters;

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
        <CardTitle title={props.event.mysteryData.name} />

        <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad} contentContainerStyle={GlobalStyles.contentContainer}>
          <Text style={localStyles.characterBoxTitle}> {'Choose your character'} </Text>
          <FlatList
            data={props.event.mysteryData.characters}
            keyExtractor={keyExtract}
            renderItem={({ item }) =>
              (
                <TouchableOpacity
                  style={[GlobalStyles.listItemCard]}
                  onPress={() =>
                  attemptJoinEventAsCharacter(props.event._id, item._id)}
                >
                  <View style={GlobalStyles.column}>
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                      source={{ uri: item.thumbnailURI }}
                    />
                  </View>
                  <View style={GlobalStyles.column}>
                    <Text style={GlobalStyles.boldLine}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )
              }
          />
        </ScrollView>
      </View>
    </View>
  );
};

const EventLobbyContainer = createContainer((props) => {
  Meteor.subscribe('events');

  const event = Meteor.collection('events').findOne({ _id: props.navigation.state.params.eventID });

  return {
    event,
  };
}, EventLobbyComponent);

export default EventLobbyContainer;
