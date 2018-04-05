import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from './GlobalStyles';

const MenuStyle = {
  borderColor: 'rgba(0,0,0,.05)',
  borderTopWidth: 1,
  width: '100%',
  backgroundColor: 'white',
  elevation: 3,
};

const HorizontalMenu = props => (
  <View style={MenuStyle}>
    {
      props.buttons.map(x => (
        <TouchableOpacity key={x.text} onPress={() => x.action()}>
          <Text style={GlobalStyles.btn}> {x.text} </Text>
        </TouchableOpacity>
      ))
    }
  </View>
);

HorizontalMenu.propTypes = {
  buttons: PropTypes.array.isRequired,
};

export default HorizontalMenu;
