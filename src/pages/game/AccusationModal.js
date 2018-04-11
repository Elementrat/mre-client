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

const AccusationModal = ({characters, show, onRequestedClose}) => {
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
            <Text style={[GlobalStyles.cardTitle, GlobalStyles.cardPad]}>Accusations</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.cardPad}>
            <Text> Who did it? </Text>

            <Picker style={localStyles.picker}>
              {
                characters.map((x) => {
                  return (
                    <Picker.Item
                      key={x.name}
                      label={x.name}
                      value={x.name}
                    />);
                })
              }
            </Picker>

            <Text> Who was best-dressed? </Text>

            <Picker style={localStyles.picker}>
              {
                characters.map((x) => {
                  return (
                    <Picker.Item
                      key={x.name}
                      label={x.name}
                      value={x.name}
                    />);
                })
              }
            </Picker>

            <Text> Who had the best performance? </Text>

            <Picker style={localStyles.picker}>
              {
                characters.map((x) => {
                  return (
                    <Picker.Item
                      key={x.name}
                      label={x.name}
                      value={x.name}
                    />);
                })
              }
            </Picker>

            <View style={GlobalStyles.section}>
              <TouchableOpacity style={[GlobalStyles.listItemCard, GlobalStyles.actionBtn]} onPress={() => onAdvancePhase()}>
                <Text style={GlobalStyles.actionBtnText}> Submit</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};


export default AccusationModal;
