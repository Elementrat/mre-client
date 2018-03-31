import React from 'react';
import { View, StyleSheet, Animated, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles, colors } from '../../GlobalStyles';

import HorizontalMenu from '../../HorizontalMenu';

const localStyles = StyleSheet.create({
  centered: {
    textAlign: 'center',
    lineHeight: 50,
    fontFamily: 'KaushanScript-Regular',
  },

  splashTitleText: {
    textAlign: 'center',
    color: colors.lightAccent,
    fontFamily: 'KaushanScript-Regular',
    borderColor: 'black',
    fontSize: 46,
  },
});

class SplashCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grow1: new Animated.Value(0),
      grow2: new Animated.Value(0),
      grow3: new Animated.Value(0),
      menuHeight: new Animated.Value(0),
      headerHeight: new Animated.Value(500),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.grow1,
      {
        toValue: 50,
        duration: 250,
      }
    ).start();

    Animated.timing(
      this.state.grow2,
      {
        toValue: 50,
        duration: 500,
        delay: 500,
      }
    ).start();

    Animated.timing(
      this.state.grow3,
      {
        toValue: 1,
        duration: 250,
        delay: 1500,
      }
    ).start();

    Animated.timing(
      this.state.menuHeight,
      {
        toValue: 1,
        duration: 250,
        delay: 0, // 1500
      }
    ).start();
  }

  onPressedPlay() {
    this.props.onNavToActiveGameList();
    /*
    Animated.timing(
      this.state.headerHeight,
      {
        toValue: 200,
        duration: 250,
      }
    ).start();
    */
  }

  render() {
    return (
      <View style={[GlobalStyles.card]}>
        <Animated.View style={
          [
            {
              flex: 1, flexShrink: 0, flexGrow: 1, justifyContent: 'center', maxHeight: this.state.headerHeight,
            },
          ]}
        >
          <View>
            <Animated.Text
              style={
                [
                  localStyles.centered,
                  { height: this.state.grow1, opacity: this.state.grow1 / 50 },
                  GlobalStyles.defaultText]
              }
            >
              Welcome to
            </Animated.Text>
            <Animated.Text
              style={
                [
                  localStyles.centered, { height: this.state.grow2 }, localStyles.splashTitleText,
                ]
              }
            >
              Mystery Night
            </Animated.Text>
            <Animated.Text
              style={
                [localStyles.centered, { opacity: this.state.grow3 }, GlobalStyles.defaultText]
              }
            >
              A game of intrigue among friends
            </Animated.Text>
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: this.state.menuHeight }} >
          <HorizontalMenu buttons={[{ text: 'Play', action: () => this.onPressedPlay() }]} />
        </Animated.View>
      </View>
    );
  }
}

SplashCardComponent.propTypes = {
  onNavToActiveGameList: PropTypes.func.isRequired,
};

export default SplashCardComponent;
