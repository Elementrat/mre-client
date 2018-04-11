import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../GlobalStyles';

const localStyles = StyleSheet.create({
  timeline: {
    width: '100%',
    marginTop: 5,
  },

  node: {
    flex: 1,
    width: '100%',
    flexShrink: 0,
    height: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  marker: {
    height: '100%',
    marginRight: 10,
  },

  markerExpanded: {
    width: 15,
    backgroundColor: colors.darkAccent,
  },

  markerCompact: {
    width: 5,
    backgroundColor: colors.barelyVisibleGrey,
  },

  currentPhaseText: {
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 25,
  },

  notCurrentPhaseText: {
    color: colors.barelyVisibleGrey,
    lineHeight: 25,
  }

});


const PhaseTimeline = ({phases, currentPhaseName}) => {
  return (
    <View style={localStyles.timeline}>
      {
        phases.map((x) => {
          return (
            <View style={localStyles.node} key={x.name}>
              <View style={[localStyles.marker,
                    x.name === currentPhaseName
                    ? localStyles.markerExpanded
                    : localStyles.markerCompact]
              }
              />

              <Text
                key={x.name}
                style={x.name === currentPhaseName
                  ? localStyles.currentPhaseText
                  : localStyles.notCurrentPhaseText
                }
              >
                {x.name}
              </Text>
            </View>
          );
        })
      }
    </View>
  );
};

export default PhaseTimeline;
