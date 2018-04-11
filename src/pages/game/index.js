import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

import _ from 'lodash';

import {
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
import Locked from './Locked';
import SuperModal from '../../SuperModal';
import AccusationModal from './AccusationModal';

const localStyles = StyleSheet.create({
  viewPager: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.darkAccent,
  },
});

class GameComponent extends React.Component {
  constructor(args) {
    super(args);
    // this.pages = ['You', 'Objectives', 'Knowledge', 'Items'];

    this.state = {
      showPhaseModal: false,
      showTradeModal: false,
      showAccusationModal: false,
      currentPhase: '',
      pages: [],
      currentPageIndex: 0,
      objectiveSets: [],
      isHost: this.props.event.hostCharacterID === this.props.character._id,
    };
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
    this.forceUpdate();
  }

  componentWillReceiveProps(nextProps) {
    const newPhase = nextProps.event.mysteryData.currentPhaseName;
    const curPhase = this.state.currentPhase;
    const { phases } = nextProps.event.mysteryData;

    let newPageList = [];

    if ((newPhase !== curPhase) || (curPhase === 'Initial Phase')) {
      this.setState({ pages: [] });
      this.setState({ showPhaseModal: true });

      if (this.state.isHost) {
        newPageList = [...newPageList, 'Host'];
      }

      const indexOfNewStateInPhaseList = _.findIndex(phases, x => x.name === newPhase);

      nextProps.event.mysteryData.phases.map((x, i) => {
        if (i <= indexOfNewStateInPhaseList) {
          x.unlocks.map((z) => {
            if (z.pageName) {
              newPageList = [...newPageList, z.pageName];
            }
            if (z.objectiveSets) {
              this.setState({ objectiveSets: z.objectiveSets });
            }
          });
        }
      });

      this.setState({ pages: newPageList });

      this.setState({
        currentPhase: newPhase,
      });
    }

    this.forceUpdate();
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
    this.setState({ currentPageIndex: Number(pageIndex) });
    this.forceUpdate(); // TODO Is there a way to eliminate the need for this?
  }

  onPageBtnPressed(pageIndex) {
    if (this.viewpager) {
      this.viewpager.setPage(pageIndex);
    }
  }

  onRequestedCloseModal() {
    this.setState({
      showPhaseModal: false,
    });

    if (this.state.currentPhase === 'Accusations') {
      this.setState({ showAccusationModal: true });
    }
    this.forceUpdate();
  }

  onNavRequested(pageIndex) {
    // Alert.alert(Object.keys(this.menu).toString());
    // this.viewPager.setPage(1)
    // this.menu.setPage(pageIndex);
    // Alert.alert('sup', pageIndex); // .nativeEvent.target.toString());
  }

  getPhase() {
    const me = this;
    const phase = _.find(
      this.props.event.mysteryData.phases,
      x => x.name === this.state.currentPhase
    );

    if (!phase) {
      return '';
    }

    return phase;
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
    const objectivesLocked = !this.state.pages.includes('Objectives');
    const knowledgeLocked = !this.state.pages.includes('Knowledge');
    const itemsLocked = !this.state.pages.includes('Items');

    return (
      <View style={{ width: '100%', height: '100%' }}>

        <IndicatorViewPager
          ref={(c) => this.viewpager = c}
          style={localStyles.viewPager}
          initialPage={this.currentPageIndex}
          onPageSelected={event => this.onPageSelected(event.position.toString())}
        >
          { this.state.isHost &&
            <Host
              pageKey={key += 1}
              event={this.props.event}
              onTest={() => this.onModalTest()}
              onAdvancePhase={() => this.props.advancePhase()}
            />
          }

          <Character
            pageKey={key += 1}
            character={this.props.character}
          />

          <Objectives
            pageKey={key += 1}
            character={this.props.character}
            locked={objectivesLocked}
            objectiveSets={this.state.objectiveSets}
          />

          <Knowledge
            pageKey={key += 1}
            character={this.props.character}
            locked={knowledgeLocked}
          />

          <Items
            pageKey={key += 1}
            currencyName={this.props.event.mysteryData.currencyName}
            character={this.props.character}
            locked={itemsLocked}
          />

        </IndicatorViewPager>

        <GameMenu pages={this.state.pages} onBtnPress={(x) => this.onPageBtnPressed(x)} currentPageIndex={this.state.currentPageIndex} />
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

        <AccusationModal
          show={this.state.showAccusationModal}
          onRequestedClose={() => {}}
          characters={this.props.event.mysteryData.characters}
        />

        <SuperModal
          title={this.getPhase().name}
          description={this.getPhase().description}
          iconURI={this.getPhase().iconURI}
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
  advancePhase: PropTypes.func,
};

GameComponent.defaultProps = {
  event: null,
  character: null,
  advancePhase: null,
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
