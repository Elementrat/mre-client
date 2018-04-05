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
  Image,
  AsyncStorage,
  Text,
} from 'react-native';

import GameMenu from './GameMenu';

import { GlobalStyles, colors } from '../../GlobalStyles';
import Host from './Host';
import Items from './Items';
import Character from './Character';
import Objectives from './Objectives';
import Knowledge from './Knowledge';
import SuperModal from '../../SuperModal';

const localStyles = StyleSheet.create({
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

    this.state = {
      showPhaseModal: false,
      showTradeModal: false,
      currentPhase: '',
      show: {
        host: false,
        items: false,
        knowledge: false,
        objectives: true,
        you: true,
      }
    };

    if (this.isHost) {
      this.pages.unshift('Host');
    }
  }

  componentDidMount() {
    Meteor.call('getConnectionInfo', (err, connectionID) => {
      Meteor.call('Events.setCharacterOnline', {
        eventID: this.props.event._id,
        characterID: this.props.character._id,
        characterName: this.props.character.name,
        connectionID,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    const newPhase = nextProps.event.mysteryData.currentPhaseName;
    const curPhase = this.state.currentPhase;

    if (newPhase === 'postgame') {
      this.props.navigation.navigate('Accusation', {
        mysteryID,
      });
    }

    if (newPhase !== curPhase) {
      if (this.state.currentPhase !== '') {
        this.setState({
          showPhaseModal: true,
        });
      }

      this.setState({
        currentPhase: newPhase,
      });
    }
  }

  componentWillUnmount() {
    Meteor.call('getConnectionInfo', (err, connectionID) => {
      Meteor.call('Events.setCharacterOffline', {
        eventID: this.props.event._id,
        characterID: this.props.character._id,
        characterName: this.props.character.name,
        connectionID,
      });
    });
  }

  onPageSelected(pageIndex) {
    this.currentPageIndex = Number(pageIndex);
    this.forceUpdate(); // TODO Is there a way to eliminate the need for this?
  }

  onRequestedCloseModal() {
    this.setState({
      showPhaseModal: false,
    });
    this.forceUpdate();
  }

  onNavRequested(pageIndex) {
    // Alert.alert(Object.keys(this.menu).toString());
    // this.viewPager.setPage(1)
    // this.menu.setPage(pageIndex);
    // Alert.alert('sup', pageIndex); // .nativeEvent.target.toString());
  }

  getPhaseDescription() {
    const me = this;
    const phase = _.find(this.props.event.mysteryData.phases, x => x.name === this.state.currentPhase);

    if (!phase) {
      return '';
    }

    return phase.description;
  }

  atPhase(checkPhaseName) {
    const { phases } = this.props.event.mysteryData;
    const currentPhaseName = this.state.currentPhase;

    const indexOfCurrentPhase = _.findIndex(phases, x => x.name === currentPhaseName);
    const indexOfPhaseToCheck = _.findIndex(phases, x => x.name === checkPhaseName);
    if (indexOfCurrentPhase >= indexOfPhaseToCheck) {
      return true;
    }
    return false;
  }

  render() {
    let key = 0;

    return (
      <View style={{ width: '100%', height: '100%' }}>

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
              onAdvancePhase={() => this.props.advancePhase()}
            />
            )}
          <Character pageKey={key += 1} character={this.props.character} />
          <Objectives pageKey={key += 1} character={this.props.character} />
          <Knowledge pageKey={key += 1} character={this.props.character} show={this.state.show.knowledge} />
          <Items pageKey={key += 1} currencyName={this.props.event.mysteryData.currencyName} character={this.props.character} />

        </ViewPagerAndroid>

        <GameMenu pages={this.pages} currentPageIndex={this.currentPageIndex} />
        <SuperModal
          title="Bowser would like to trade"
          show={this.state.showTradeModal}
          btns={[
          {
            text: 'Accept',
            action: () => this.onRequestedCloseModal(),
          },
          {
            text: 'Decline',
            action: () => this.onRequestedCloseModal(),
          },
        ]}
        />

        <SuperModal
          title={`New phase!
${this.state.currentPhase}`}
          description={this.getPhaseDescription()}
          show={this.state.showPhaseModal}
          btns={[
          {
            text: 'Got it',
            action: () => this.onRequestedCloseModal(),
          },
        ]}
        />

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

  const advancePhase = () => {
    Meteor.call('Events.advancePhase', { eventID: event._id });
  };

  const charID = props.navigation.state.params.characterID;
  const character = _.find(event.mysteryData.characters, x => x._id === charID);
  // Tell server we are online
  return {
    event,
    character,
    advancePhase,
  };
}, GameComponent);

export default Game;
