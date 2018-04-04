import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    alignSelf: 'flex-start',
  },

  modalTitleText: {
    fontSize: 20,
  },

  modalBtnText: {
    color: 'white',
  },
});

const SuperModal = props =>
  props.show && (<View style={localStyles.superModal}>
    <View style={localStyles.modalContentArea}>
      <View style={localStyles.modalTitle}>
        <Text style={localStyles.modalTitleText}>{props.title} </Text>
      </View>

      <Image
        style={{ width: 100, height: 130 }}
        source={{ uri: 'https://s3-us-west-2.amazonaws.com/elementrat/mystery/bowser.png' }}
      />

      <View style={localStyles.modalMenu}>
        {
        props.btns.map(x => (
          <TouchableOpacity style={localStyles.modalBtn} key={x.text} onPress={() => x.action()}>
            <Text style={localStyles.modalBtnText}> {x.text} </Text>
          </TouchableOpacity>
        ))
      }
      </View>
    </View>
  </View>
  );

export default SuperModal;
