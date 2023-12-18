import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import DifficultySelector from '../components/DifficultySelector';
import WorkoutList from '../components/WorkoutList';

const exercises = [
  {
    difficulty: 'Easy',
    exercises: [
      { id: '1', name: 'Push-ups', description: 'Standard push-ups', imageUrl: 'https://example.com/pushups.jpg' },
      { id: '2', name: 'Sit-ups', description: 'Basic abdominal sit-ups', imageUrl: 'https://example.com/situps.jpg' },
    ],
  },
  {
    difficulty: 'Medium',
    exercises: [
      { id: '3', name: 'Lunges', description: 'Lunges for leg strengthening', imageUrl: 'https://example.com/lunges.jpg' },
      { id: '4', name: 'Squats', description: 'Squats for lower body', imageUrl: 'https://example.com/squats.jpg' },
    ],
  },
  {
    difficulty: 'Hard',
    exercises: [
      { id: '5', name: 'Plank', description: 'Plank for core conditioning', imageUrl: 'https://example.com/plank.jpg' },
      { id: '6', name: 'Jump Rope', description: 'Jump rope for cardio', imageUrl: 'https://example.com/jumprope.jpg' },
    ],
  },
];

const ExerciseLibraryScreen = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const predefinedWorkouts = [
    {
      id: '1',
      name: 'Full Body Workout (Easy)',
      exercises: exercises.find((group) => group.difficulty === 'Easy').exercises,
    },
    {
      id: '2',
      name: 'Full Body Workout (Medium)',
      exercises: exercises.find((group) => group.difficulty === 'Medium').exercises,
    },
    {
      id: '3',
      name: 'Full Body Workout (Hard)',
      exercises: exercises.find((group) => group.difficulty === 'Hard').exercises,
    },
  ];

  const handleSelectWorkout = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const filteredExercises = selectedDifficulty === 'All' ? 
    exercises.flatMap((group) => group.exercises) :
    exercises.find((group) => group.difficulty === selectedDifficulty).exercises;

  return (
    <ScrollView style={styles.container}>
      <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />

      <WorkoutList workouts={predefinedWorkouts} onSelectWorkout={handleSelectWorkout} />

      {selectedWorkout ? (
        <View>
          <Text style={styles.header}>Selected Workout: {selectedWorkout.name}</Text>
          {selectedWorkout.exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              description={exercise.description}
              imageUrl={exercise.imageUrl}
            />
          ))}
        </View>
      ) : (
        filteredExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            description={exercise.description}
            imageUrl={exercise.imageUrl}
          />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
});

export default ExerciseLibraryScreen;
