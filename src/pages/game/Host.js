import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles, colors } from '../../GlobalStyles';
import CardTitle from '../../CardTitle';
import PhaseTimeline from './PhaseTimeline';

const Host = ({ pageKey, event, onTest, onAdvancePhase, currentPhaseName
}) => (
  <View style={GlobalStyles.viewPagerPageStyle} key={pageKey}>
    <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
      <CardTitle title="Hosting" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[GlobalStyles.cardPad, GlobalStyles.padForBottomMenu]}
        contentContainerStyle={GlobalStyles.contentContainerWithMenu}
      >
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>CURRENT PHASE </Text>
          <PhaseTimeline phases={event.mysteryData.phases} currentPhaseName={event.mysteryData.currentPhaseName} />

        </View>

        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>WHAT TO DO AS HOST </Text>
          <Text>{event.mysteryData.phases[0].guideText} </Text>
        </View>

        <View style={GlobalStyles.section}>
          <TouchableOpacity style={[GlobalStyles.listItemCard, GlobalStyles.actionBtn]} onPress={() => onAdvancePhase()}>
            <Text style={GlobalStyles.actionBtnText}> Advance to next phase</Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.boldLine}>GUEST STATUS </Text>
          <FlatList
            data={event.mysteryData.characters}
            keyExtractor={x => x._id}
            renderItem={({ item }) => (
              <View style={[GlobalStyles.listItemCard, GlobalStyles.spaceBetween]}>
                <Text>{ item.name} </Text>
                <Text style={item.online ? GlobalStyles.positiveTextColor : GlobalStyles.negativeTextColor}> {item.online ? 'Online' : 'Offline'} </Text>
              </View>)}
          />
        </View>

      </ScrollView>
    </View>
  </View>);

Host.propTypes = {
  event: PropTypes.object,
  onTest: PropTypes.func,
  pageKey: PropTypes.number,
  onAdvancePhase: PropTypes.func,
};

Host.defaultProps = {
  event: null,
  onTest: null,
  onAdvancePhase: null,
  pageKey: 0,
};


export default Host;
