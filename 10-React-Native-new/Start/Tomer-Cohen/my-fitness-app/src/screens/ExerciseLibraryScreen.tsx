import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import DifficultySelector from '../components/DifficultySelector';
import WorkoutList from '../components/WorkoutList';
import { FlatList } from 'react-native'; // Import FlatList



const exercises = [
  {
    difficulty: 'Easy',
    exercises: [
      { id: '1', name: 'Push-ups', description: 'Standard push-ups', imageUrl: 'https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg' },
      { id: '2', name: 'Sit-ups', description: 'Basic abdominal sit-ups', imageUrl: 'https://fitnessvolt.com/wp-content/uploads/2021/07/janda-sit-up-exercise-guide.jpg' },
    ],
  },
  {
    difficulty: 'Medium',
    exercises: [
      { id: '3', name: 'Lunges', description: 'Lunges for leg strengthening', imageUrl: 'https://media.istockphoto.com/id/964785648/vector/illustrated-exercise-guide-by-healthy-woman-doing-lunges-workout-in-2-steps.jpg?s=612x612&w=0&k=20&c=aiyOizs_x3B3fI07LVuQ6thVMpRl_oAtbzJurVM56Jw=' },
      { id: '4', name: 'Squats', description: 'Squats for lower body', imageUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/the-barbell-squat.jpg' },
    ],
  },
  {
    difficulty: 'Hard',
    exercises: [
      { id: '5', name: 'Plank', description: 'Plank for core conditioning', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=0.668xw:1.00xh;0.117xw,0&resize=1200:*' },
      { id: '6', name: 'Jump Rope', description: 'Jump rope for cardio', imageUrl: 'https://www.realsimple.com/thmb/LqkRwhYXpPBcmq5rnYIYJrX5SeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-jump-illo2-1-d4bcbd6792b3491f8f90fe26cb0a956c.jpg' },
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
    <View style={styles.container}>
      <WorkoutList workouts={predefinedWorkouts} onSelectWorkout={handleSelectWorkout} />

      {selectedWorkout ? (
        <FlatList
          data={selectedWorkout.exercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          )}
          ListHeaderComponent={<Text style={styles.header}>Selected Workout Exercises</Text>}
        />
      ) : (
        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          )}
          ListHeaderComponent={<Text style={styles.header}>Exercise Library</Text>}
        />
      )}
    </View>
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
