import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles } from '../../GlobalStyles';

const Host = ({ pageKey, event, onTest }) => (
  <View style={GlobalStyles.viewPagerPageStyle} key="1">
    <View style={GlobalStyles.card}>
      <Text style={[GlobalStyles.cardTitle, GlobalStyles.centered]}>Host</Text>
      <TouchableOpacity style={GlobalStyles.btn} onPress={() => onTest()}>
        <Text> hit me </Text>
      </TouchableOpacity>
    </View>
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
