import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExerciseCard from '../components/ExerciseCard'; 
import Timer from '../components/Timer'; 

const HomeScreen = () => {
  const exercises = [
    { id: '1', name: 'Push-ups', description: 'A basic push-up exercise', imageUrl: 'https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg' },
    { id: '2', name: 'Squats', description: 'A basic squat exercise', imageUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/the-barbell-squat.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Daily Exercises</Text>
      
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          name={exercise.name}
          description={exercise.description}
          imageUrl={exercise.imageUrl}
        />
      ))}

      <View style={styles.timerContainer}>
        <Text style={styles.timerHeader}>Workout Timer</Text>
        <Timer />
      </View>
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
  timerContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  timerHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
