import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles, colors } from '../../GlobalStyles';


const localStyles = StyleSheet.create({
  menuContainer: {
    height: 50,
    flex: 1,
    flexGrow: 0,
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: colors.barelyVisibleGrey,
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    elevation: 5,
    zIndex: 1,
  },

  menuBtn: {
    paddingHorizontal: 15,
    flexShrink: 0,
    flexGrow: 0,
  },

  menuText: {
    lineHeight: 50,
    fontSize: 12,
  },

  selectedColor: {
    color: 'black',
  },

  nonSelectedColor: {
    color: 'rgba(0,0,0,.2)',
  },
});

class GameMenu extends React.Component {
  render() {
    return (
      <View style={localStyles.menuContainer}>
        {
          this.props.pages.map((x, index) => (
            <TouchableOpacity
              style={localStyles.menuBtn}
              key={x}
              onPress={() => Alert.alert('press')}
            >
              <Text style={
                [
                  localStyles.menuText,
                  index === this.props.currentPageIndex
                    ? localStyles.selectedColor
                    : localStyles.nonSelectedColor,
                ]
              }
              >
                { x }
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}

GameMenu.propTypes = {
  currentPageIndex: PropTypes.number,
  pages: PropTypes.array,
};

GameMenu.defaultProps = {
  currentPageIndex: 0,
  pages: [],
};

export default GameMenu;
