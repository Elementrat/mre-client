import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

import { GlobalStyles, colors } from '../../GlobalStyles';

const EventLobbyComponent = (props) => {
  const eventID = props.navigation.state.params.eventID;
  const keyExtract = item => item.name; // TODO add underscore to id

  const localStyles = StyleSheet.create({
    cardBox: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },

    miniCard: {
      width: 100,
      padding: 15,
      marginHorizontal: 10,
      marginBottom: 10,
      backgroundColor: 'white',
      elevation: 1,
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    miniCardPad: {
      marginBottom: 10,
    },

    characterBox: {
      borderColor: colors.barelyVisibleGrey,
      borderStyle: 'dotted',
      flex: 1,
    },

    characterBoxTitle: {
      textAlign: 'center',
      flexShrink: 0,
      fontSize: 16,
      padding: 10,
      backgroundColor: colors.darkAccent,
      color: 'white',
      marginBottom: 15,
    },

    miniCardText: {
      height: 20,
      color: 'black',
    },
  });

  const attemptJoinEventAsCharacter = (eventID, characterID) =>{
    props.navigation.navigate('Game', { eventID, characterID });
  };

  const characters = props.event.mysteryData.characters;

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <View style={[GlobalStyles.card]}>
        <Text style={GlobalStyles.cardTitle}> {props.event.mysteryData.name} </Text>

        <View style={localStyles.characterBox}>
          <Text style={localStyles.characterBoxTitle}> {`Please choose your character`} </Text>
          <View style={localStyles.cardBox}>
            {
              characters.map(x => (
                <TouchableOpacity key={x.name} 
                  onPress={() => attemptJoinEventAsCharacter(props.event._id, x._id)}
                >
                  <View style={localStyles.miniCard} >
                    <Image resizeMode="stretch" style={[{ width: 60, height: 60 }, localStyles.miniCardPad]} />
                    <Text style={[GlobalStyles.centered, localStyles.miniCardText]}> {x.name} </Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
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
