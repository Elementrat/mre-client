import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyle } from './GlobalStyles';


const localStyles = StyleSheet.create({
  emptyText: {
    color: 'rgb(200,200,200)',
    textAlign: 'center',
  },
  emptyStateContainer: {
    width: '100%',
    padding: 25,
    alignSelf: 'flex-start',
  },

  superModal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.7)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    zIndex: 999,
  },

  modalContentArea: {
    width: '77%',
    height: '66%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalBtn: {
    padding: 20,
  },

  modalMenu: {
    width: '100%',
    backgroundColor: 'black',
  },

  modalTitle: {
    padding: 15,
  },

  modalTitleText: {
    fontSize: 20,
    textAlign: 'center',
  },

  modalDescriptionText: {
    padding: 20,
  },

  modalBtnText: {
    color: 'white',
  },
});

class SuperModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: new Animated.Value(0),
      scale: new Animated.Value(0.8),
    };
  }

  componentWillReceiveProps(nextProps) {
    const aniDur = 250;
    // Animate in
    if ((!this.props.show && nextProps.show)) {
      Animated.timing(this.state.visibility, {
        toValue: 1,
        duration: aniDur,
      }).start();

      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: aniDur,
      }).start();
    }

    if ((this.props.show && !nextProps.show)) {
      Animated.timing(this.state.visibility, {
        toValue: 0,
        duration: aniDur,
      }).start();

      Animated.timing(this.state.scale, {
        toValue: 0.8,
        duration: aniDur,
      }).start();
    }
  }

  render() {
    return (
      <Animated.View
        pointerEvents={this.props.show ? 'auto' : 'none'}
        style={[localStyles.superModal,
        { opacity: this.state.visibility },
        ]}
      >
        <Animated.View
          style={[localStyles.modalContentArea,
          {
            transform: [
            { scaleX: this.state.scale },
            { scaleY: this.state.scale }]
          }
        ]}
        >
          <View style={localStyles.modalTitle}>
            <Text style={localStyles.modalTitleText}>{this.props.title} </Text>
          </View>

          <Image
            style={{ width: 100, height: 130 }}
            source={{ uri: 'https://s3-us-west-2.amazonaws.com/elementrat/mystery/bowser.png' }}
          />

          <Text style={localStyles.modalDescriptionText}>{this.props.description} </Text>

          <View style={localStyles.modalMenu}>
            {
            this.props.btns.map(x => (
              <TouchableOpacity style={localStyles.modalBtn} key={x.text} onPress={() => x.action()}>
                <Text style={localStyles.modalBtnText}> {x.text} </Text>
              </TouchableOpacity>
            ))
          }
          </View>
        </Animated.View>
      </Animated.View>);
  }
}

SuperModal.propTypes = {
  btns: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  show: PropTypes.bool,
};

SuperModal.defaultProps = {
  btns: [],
  title: '',
  description: '',
  show: true,
};

export default SuperModal;
