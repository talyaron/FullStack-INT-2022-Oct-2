import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';

interface Exercise {
  id: string;
  name: string;
  description: string;
}

const CustomWorkoutBuilder = ({ exercises }: { exercises: Exercise[] }) => {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [newExerciseName, setNewExerciseName] = useState('');
  const [newExerciseDescription, setNewExerciseDescription] = useState('');

  const addExerciseToWorkout = (exercise: Exercise) => {
    setSelectedExercises((prevExercises) => [...prevExercises, exercise]);
  };

  const addCustomExercise = () => {
    const newExercise = {
      id: Math.random().toString(36).substr(2, 9), // Generating a random ID
      name: newExerciseName,
      description: newExerciseDescription,
    };
    exercises.push(newExercise); // Adding the new exercise to the main list
    setNewExerciseName('');
    setNewExerciseDescription('');
  };

  const removeExerciseFromWorkout = (exerciseId: string) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.filter((exercise) => exercise.id !== exerciseId)
    );
  };

  const saveCustomWorkout = () => {
    console.log('Saving custom workout:', selectedExercises);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={newExerciseName}
        onChangeText={setNewExerciseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Exercise Description"
        value={newExerciseDescription}
        onChangeText={setNewExerciseDescription}
      />
      <Button title="Add Custom Exercise" onPress={addCustomExercise} />

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.exerciseItem}
            onPress={() => addExerciseToWorkout(item)}
          >
            <Text style={styles.exerciseText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.selectedContainer}>
        <Text style={styles.header}>Your Workout</Text>
        {selectedExercises.map((exercise) => (
          <View key={exercise.id} style={styles.selectedItem}>
            <Text style={styles.exerciseText}>{exercise.name}</Text>
            <Button title="Remove" onPress={() => removeExerciseFromWorkout(exercise.id)} />
          </View>
        ))}
      </View>
      <Button title="Save Workout" onPress={saveCustomWorkout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  exerciseItem: {
    padding: 10,
    backgroundColor: '#ddd',
    marginBottom: 5,
  },
  exerciseText: {
    fontSize: 16,
  },
  selectedContainer: {
    marginTop: 20,
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
  },
});

export default CustomWorkoutBuilder;
