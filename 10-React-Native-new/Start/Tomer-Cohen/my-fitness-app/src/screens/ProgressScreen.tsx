import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProgressTracker from '../components/ProgressTracker';

const ProgressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Progress</Text>
      <ProgressTracker />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProgressScreen;
