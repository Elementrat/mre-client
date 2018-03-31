import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  emptyText: {
    color: 'rgb(200,200,200)',
    textAlign: 'center',
  },
  emptyStateContainer: {
    width: '100%',
    padding: 25,
    alignSelf: 'flex-start',
  }
});

const EmptyState = props => (
  <View style={[localStyles.emptyStateContainer]} >
    <Text style={localStyles.emptyText}> { props.text } </Text>
  </View>
);

export default EmptyState;
