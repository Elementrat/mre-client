import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

import { GlobalStyles } from '../../GlobalStyles';
import { mocks } from '../../Mocks';

const DebugComponent = (props) => {
  const addSampleMystery = () => {
    const myst = mocks().getSampleMystery();
    Meteor.call('Mysteries.insertOne', myst, (err, res) => {

    });
  };

  const addSampleEvent = () => {
    const event = mocks().getSampleEvent();
    Meteor.call('Events.insertOne', event, (err, res) => {
    });
  };

  const clearMysteries = () => {
    Meteor.call('Mysteries.removeAll', (err, res) => {
    });
  };

  const clearEvents = () => {
    Meteor.call('Events.removeAll', (err, res) => {
    });
  };

  const clearConnections = () => {
    Meteor.call('Connections.removeAll', (err, res) => {

    });
  };

  const goEventList = () => {
    props.navigation.navigate('EventList');
  };

  const goMysteryList = () => {
    props.navigation.navigate('MysteryList');
  };

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <ScrollView style={[GlobalStyles.card]} contentContainerStyle={GlobalStyles.contentContainer}>
        
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>Links  </Text>
       
          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => goMysteryList()}
          >
            <Text> Mysteries </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => goEventList()}
          >
            <Text> Events  </Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>{ props.mysteryCount} Mysteries </Text>        
          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => clearMysteries()}
          >
            <Text> Clear Mysteries </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => addSampleMystery()}
          >
            <Text> Insert Sample Mystery </Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>{ (props.eventCount)} Events   </Text>
          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => clearEvents()}
          >
            <Text> Clear Events </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => addSampleEvent()}
          >
            <Text> Insert Sample Event </Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>{ props.connectionCount} Connections </Text>
          <TouchableOpacity
            style={GlobalStyles.listItemCard}
            onPress={() => clearConnections()}
          >
            <Text> Clear Connections </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const Debug = createContainer(() => {
  Meteor.subscribe('mysteries');
  Meteor.subscribe('events');
  Meteor.subscribe('connections');

  return {
    eventCount: Meteor.collection('events').find().length,
    mysteryCount: Meteor.collection('mysteries').find().length,
    connectionCount: Meteor.collection('connections').find().length,
  };
}, DebugComponent);

export default Debug;
