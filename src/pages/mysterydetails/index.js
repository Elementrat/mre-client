import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { GlobalStyles } from '../../GlobalStyles';

const localStyles = StyleSheet.create({

  bold: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const MysteryDetailsComponent = (props) => {
  const gameID = props.navigation.state.params.mysteryID;

  const navToGameLobby = (gameID) => {
    // props.navigation.navigate('GameLobby');
  };

  const keyExtract = item => item.name; // TODO add underscore to id

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <ScrollView style={GlobalStyles.card}>
        <Text style={GlobalStyles.cardTitle}>{props.mystery.name}</Text>
        <Text style={GlobalStyles.boldLine}>Summary </Text>
        <Text style={GlobalStyles.marginBottom}>{props.mystery.summary} </Text>
        <Text style={GlobalStyles.boldLine}>Characters  </Text>


        <FlatList style={{flexShrink: 0}}
          data={props.mystery.characters}
          keyExtractor={keyExtract}
          renderItem={({ item }) =>
            (
              <View style={GlobalStyles.listItemCard}>
                <Text style={{width:'100%', fontWeight: 'bold'}}>{item.name} </Text>
                <Text>{item.summary} </Text>
              </View>
            )
          }
        />


        <Text style={localStyles.bold}>Hosting Guide </Text>
      </ScrollView>
    </View>
  );
};

MysteryDetailsComponent.propTypes = {
  navigation: PropTypes.object,
};

MysteryDetailsComponent.defaultProps = {
  navigation: null,
};

const MysteryDetails = createContainer((props) => {
  Meteor.subscribe('mysteries');
  return {
    mystery: Meteor.collection('mysteries').findOne({ _id: props.navigation.state.params.mysteryID }),
  };
}, MysteryDetailsComponent);

export default MysteryDetails;
