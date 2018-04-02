import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles, colors } from '../../GlobalStyles';

const Host = ({ pageKey, event, onTest }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="1">
    <ScrollView style={GlobalStyles.card} contentContainerStyle={GlobalStyles.contentContainerExtraPad}>
      <Text style={[GlobalStyles.cardTitle, GlobalStyles.centered]}>Host</Text>
      
      <View style={GlobalStyles.section}>
        <Text style={GlobalStyles.boldLine}>CURRENT PHASE </Text>
        <Text>{event.mysteryData.currentPhaseName} </Text>
      </View>

      <View style={GlobalStyles.section}>
        <Text style={GlobalStyles.boldLine}>WHAT TO DO AS HOST </Text>
        <Text>{event.mysteryData.phases[0].guideText} </Text>
      </View>

      <View style={GlobalStyles.section}>
        <Text style={GlobalStyles.boldLine}>GUEST STATUS </Text>
        <FlatList
          data={event.mysteryData.characters}
          keyExtractor={x => x._id}
          renderItem={({ item }) => (
            <View style={GlobalStyles.listItemCard}>
              <Text>{ item.name} </Text>
              <Text style={item.online ? GlobalStyles.positiveTextColor : GlobalStyles.negativeTextColor}> {item.online ? 'Online' : 'Offline'} </Text>
            </View>)}
        />
      </View>

      <TouchableOpacity style={[GlobalStyles.listItemCard, GlobalStyles.actionBtn]}>
        <Text style={GlobalStyles.actionBtnText}> Advance phase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[GlobalStyles.listItemCard, GlobalStyles.actionBtn]} onPress={() => onTest()}>
        <Text style={GlobalStyles.actionBtnText}> Modal </Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

Host.propTypes = {
  event: PropTypes.object,
  onTest: PropTypes.func,
  pageKey: PropTypes.number,
};

Host.defaultProps = {
  event: null,
  onTest: null,
  pageKey: 0,
};


export default Host;
