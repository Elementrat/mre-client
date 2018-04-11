import React from 'react';
import { Modal, Text, View, Picker, Alert, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../GlobalStyles';

const localStyles = StyleSheet.create({
  modal: {
    width: '90%',
    height: '90%',
  },
  picker: {
    flex: 1,
    flexDirection: 'column',
  }
});

const AnnouncementModal = ({characters, show, onRequestedClose}) => {
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
      <View style={GlobalStyles.rootAppContainer}>
        <View style={[GlobalStyles.card, GlobalStyles.noPad]}>
          <View style={[GlobalStyles.cardTitleView]}>
            <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}>Announcement</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
            <Text> Announce </Text>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};


export default AnnouncementModal;
