import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import {
  View,
  Animated,
  Alert,
  Text,
} from 'react-native';


import SplashCard from './SplashCard';
import { GlobalStyles } from '../../GlobalStyles';

const ANDROID_SERVER_URL_SAVED = 'ws://192.168.1.70:3000/websocket';
const ANDROID_SERVER_URL = 'ws://192.168.200.142:3000/websocket';

Meteor.connect(ANDROID_SERVER_URL);

const AppComponent = (props) => {
  const state = {
    topSpacerHeight: new Animated.Value(0),
  };

  const navToActiveGameList = () => {
    props.navigation.navigate('MysteryList');
  };

  const keyExtract = item => item.id; // TODO add underscore to id

  return (
    <View style={GlobalStyles.rootAppContainer}>
      <SplashCard onNavToActiveGameList={() => navToActiveGameList()} />
    </View>
  );
};

AppComponent.propTypes = {
  navigation: PropTypes.object,
};

AppComponent.defaultProps = {
  navigation: null,
};

const Landing = createContainer(() => {
  Meteor.subscribe('items');
  return {
    count: Meteor.collection('items').find().length,
    items: Meteor.collection('items').find(),
  };
}, AppComponent);

export default Landing;
