import React from 'react';
import { Modal, Text, View, Alert, StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  modal: {
    width: '90%',
    height: '90%',
  }
});

const AlertModal = ({show, onRequestedClose}) => {
  return (
    <Modal
      style={localStyles.modal}
      animationType="slide"
      transparent={false}
      visible={show}
      onRequestClose={() => {
        onRequestedClose();
      }}
    >
      <View>
        <Text> hm yo </Text>
      </View>
    </Modal>
  );
};


export default AlertModal;
