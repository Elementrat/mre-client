import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';
import _ from 'lodash';

import {
  ViewPagerAndroid,
  View,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';

import GameMenu from './GameMenu';

import { GlobalStyles, colors } from '../../GlobalStyles';
import Host from './Host';
import Items from './Items';
import Character from './Character';
import Objectives from './Objectives';
import Knowledge from './Knowledge';
import AlertModal from './AlertModal';

const localStyles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  viewPager: {
    flex: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkAccent,
  },
});

class GameComponent extends React.Component {
  constructor(args) {
    super(args);

    this.keyExtract = item => item._id;
    this.isHost = this.props.event.hostCharacterID === this.props.character._id;
    this.currentPageIndex = 0;
    this.pages = ['You', 'Objectives', 'Knowledge', 'Items'];
    this.showModal = false;

    if (this.isHost) {
      this.pages.unshift('Host');
    }
  }

  onPageSelected(pageIndex) {
    this.currentPageIndex = Number(pageIndex);
    this.forceUpdate(); // TODO Is there a way to eliminate the need for this?
  }

  onModalTest() {
    this.showModal = true;
    this.forceUpdate();
  }

  onRequestedCloseModal() {
    this.showModal = false;
    this.forceUpdate();
  }

  onNavRequested(pageIndex) {
    // Alert.alert(Object.keys(this.menu).toString());
    // this.viewPager.setPage(1)
    // this.menu.setPage(pageIndex);
    Alert.alert('sup', pageIndex); // .nativeEvent.target.toString());
  }

  render() {
    let key = 0;

    return (
      <View style={{ width: '100%', height: '100%' }}>

        <AlertModal show={this.showModal} onRequestedClose={() => this.onRequestedCloseModal()} />

        <ViewPagerAndroid
          style={localStyles.viewPager}
          initialPage={this.currentPageIndex}
          onPageSelected={event => this.onPageSelected(event.nativeEvent.position.toString())}
        >
          { this.isHost &&
            (<Host
              pageKey={key += 1}
              event={this.props.event}
              onTest={() => this.onModalTest()}
            />
            )}
          <Character pageKey={key += 1} character={this.props.character} />
          <Objectives pageKey={key += 1} character={this.props.character} />
          <Knowledge pageKey={key += 1} character={this.props.character} />
          <Items pageKey={key += 1} currencyName={this.props.event.mysteryData.currencyName} character={this.props.character} />

        </ViewPagerAndroid>

        <GameMenu pages={this.pages} currentPageIndex={this.currentPageIndex} />
      </View>
    );
  }
}

GameComponent.propTypes = {
  event: PropTypes.object,
  character: PropTypes.object,
};

GameComponent.defaultProps = {
  event: null,
  character: null,
};

const Game = createContainer((props) => {
  Meteor.subscribe('events');

  const event = Meteor.collection('events').findOne({ _id: props.navigation.state.params.eventID });

  const charID = props.navigation.state.params.characterID;
  const character = _.find(event.mysteryData.characters, x => x._id === charID);

  return {
    event,
    character,
  };
}, GameComponent);

export default Game;
