import React from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';
import CustomWorkoutBuilder from '../components/CustomWorkoutBuilder';

const exercises = [
  { id: '1', name: 'Push-ups', description: 'Standard push-ups' },
  { id: '2', name: 'Sit-ups', description: 'Basic abdominal sit-ups' },
];

const CustomWorkoutScreen = () => {
  const Header = () => (
    <Text style={styles.header}>Build Your Custom Workout</Text>
  );

  const renderItem = ({ item }) => (
    <CustomWorkoutBuilder exercises={item.exercises} />
  );

  const data = [{ exercises }];

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={Header}
      keyExtractor={(item, index) => 'key' + index}
    />
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

export default CustomWorkoutScreen;
