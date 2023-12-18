import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Workout {
  id: string;
  name: string;
  exercises: string[];
}

interface Props {
  workouts: Workout[];
  onSelectWorkout: (workout: Workout) => void;
}

const WorkoutList: React.FC<Props> = ({ workouts, onSelectWorkout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Library</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.workoutItem}
            onPress={() => onSelectWorkout(item)}
          >
            <Text style={styles.workoutName}>{item.name}</Text>
          </TouchableOpacity>
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
  workoutItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WorkoutList;
