import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
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
      <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
        <View style={[GlobalStyles.cardTitleView]}>
          <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}>{props.mystery.name}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
          <View style={GlobalStyles.section}>
            <Text style={GlobalStyles.boldLine}>Summary </Text>
            <Text style={GlobalStyles.marginBottom}>{props.mystery.summary} </Text>
          </View>

          <View style={GlobalStyles.section}>
            <Text style={GlobalStyles.boldLine}>Characters  </Text>

            <FlatList
              data={props.mystery.characters}
              keyExtractor={keyExtract}
              renderItem={({ item }) =>
                (
                  <View style={GlobalStyles.listItem}>
                    <View style={GlobalStyles.column}>
                      <Image
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                        source={{ uri: item.thumbnailURI }}
                      />
                    </View>
                    <View style={GlobalStyles.column}>
                      <Text style={GlobalStyles.boldLine}>{item.name} </Text>
                      <Text>{item.summary} </Text>
                    </View>
                  </View>
                )
              }
            />
          </View>
          <Text style={localStyles.bold}>Hosting Guide </Text>
        </ScrollView>

      </View>
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
