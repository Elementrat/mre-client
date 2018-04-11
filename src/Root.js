import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import PropTypes from 'prop-types';

import { StackNavigator } from 'react-navigation';

import EventList from './pages/eventlist';
import EventLobby from './pages/eventlobby';
import Landing from './pages/landing';
import MysteryList from './pages/mysterylist';
import MysteryDetails from './pages/mysterydetails';
import Debug from './pages/debug';
import Game from './pages/game';

import { mock } from './Mocks';

const CAFE_TONE_SERVER_URL = 'ws://192.168.0.5:3000/websocket';
const HOME_SERVER_URL = 'ws://192.168.0.29:3000/websocket';
const BLUEWHALE_SERVER_URL = 'ws://172.30.1.21:3000/websocket';
const MANGWON_COFFEE_SERVER_URL = 'ws://172.30.1.58:3000/websocket';
const HOLA_SERVER_URL = 'ws://192.168.35.19:3000/websocket';
const OLAN_SERVER_URL = 'ws://192.168.123.155:3000/websocket';
const RANDO_MANGWON = 'ws://192.168.25.57:3000/websocket';
const BOOKTIQUE_5 = 'ws://192.168.35.238:3000/websocket';
const BOOKTIQUE_2_4 = 'ws://192.168.35.238:3000/websocket';
const FLATLAND = 'ws://192.168.1.40:3000/websocket';
const ORANGE = 'ws://192.168.0.13:3000/websocket';
const ORANGE_4 = 'ws://192.168.0.56:3000/websocket';

const ANDROID_SERVER_URL = BOOKTIQUE_5;

const Stack = StackNavigator(
  {
    Landing: { screen: Landing },
    EventList: { screen: EventList },
    EventLobby: { screen: EventLobby },
    MysteryList: { screen: MysteryList },
    MysteryDetails: { screen: MysteryDetails },
    Debug: { screen: Debug },
    Game: { screen: Game },
  },
  {
    headerMode: 'none',
    initialRouteName: 'EventList',
    initialRouteParams: {
      eventID: 'n7xcavkcz8jEZ4AEs',
    }
  }
);

class Root extends Component {
  componentWillMount() {
    Meteor.connect(ANDROID_SERVER_URL);
  }

  render() {
    return (
      <Stack />
    );
  }
}

Root.propTypes = {
// count: PropTypes.number,
};

Root.defaultProps = {
// count: -1,
};

export default createContainer(() => {
  Meteor.subscribe('mysteries');

  return {
    count: Meteor.collection('items').find().length,
  };
}, Root);
