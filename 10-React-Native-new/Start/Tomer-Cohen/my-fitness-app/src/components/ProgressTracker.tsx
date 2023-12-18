import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const loggedWorkouts = [
  { id: '1', date: '2023-01-15', exercise: 'Push-ups', sets: 3, reps: 10 },
  { id: '2', date: '2023-01-17', exercise: 'Sit-ups', sets: 3, reps: 15 },
];

const ProgressTracker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress Tracker</Text>
      <FlatList
        data={loggedWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>Date: {item.date}</Text>
            <Text>Exercise: {item.exercise}</Text>
            <Text>Sets: {item.sets}</Text>
            <Text>Reps: {item.reps}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ProgressTracker;
