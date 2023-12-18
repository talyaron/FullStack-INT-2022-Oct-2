import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProgressTracker from '../components/ProgressTracker';
import { FlatList } from 'react-native';
const ProgressScreen = () => {
  const progressData = [
    {
      id: 1,
      date: '2022-10-01',
      exercise: 'Push-ups',
      sets: 5,
      reps: 10,
    }
  ]
  const filteredProgressData = progressData.filter((item) => item && item.id !== undefined);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Progress</Text>
      <FlatList
        data={filteredProgressData}
        keyExtractor={(item) => item.id.toString()} // Access 'id' only if it exists
        renderItem={({ item }) => (
          <ProgressTracker
            data={item} // Pass progress data to ProgressTracker
          />
        )}
      />
    </View>
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
