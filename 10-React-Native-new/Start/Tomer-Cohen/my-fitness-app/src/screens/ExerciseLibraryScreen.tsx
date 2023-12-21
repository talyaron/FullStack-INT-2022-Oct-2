import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import DifficultySelector from '../components/DifficultySelector';

const exercises = [
  // Easy exercises
  { id: '1', difficulty: 'Easy', name: 'Push-ups', description: 'Standard push-ups', imageUrl: 'https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg'},
  { id: '2', difficulty: 'Easy', name: 'Sit-ups', description: 'Basic abdominal sit-ups', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/v-sit-crunch-1585734647.jpg' },
  { id: '3', difficulty: 'Easy', name: 'Leg Raises', description: 'Lying leg raises for abs', imageUrl: 'https://static.strengthlevel.com/images/illustrations/lying-leg-raise-1000x1000.jpg' },
  { id: '4', difficulty: 'Easy', name: 'Jumping Jacks', description: 'Cardio jumping jacks', imageUrl: 'https://www.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.jpg' },
  { id: '5', difficulty: 'Easy', name: 'Bodyweight Squats', description: 'Simple bodyweight squats', imageUrl: 'https://bodybuilding-wizard.com/wp-content/uploads/2019/03/basic-bodyweight-squat-exercise-3.jpg' },
  { id: '6', difficulty: 'Easy', name: 'Mountain Climbers', description: 'Dynamic mountain climbers', imageUrl: 'https://www.spotebi.com/wp-content/uploads/2014/10/mountain-climbers-exercise-illustration.jpg' },
  { id: '7', difficulty: 'Easy', name: 'Bicycle Crunches', description: 'Bicycle crunches for abs', imageUrl: 'https://www.spotebi.com/wp-content/uploads/2014/10/bicycle-crunches-exercise-illustration.jpg' },
  
  // Medium exercises
  { id: '8', difficulty: 'Medium', name: 'Dumbbell Lunges', description: 'Lunges with dumbbells', imageUrl: 'https://pbs.twimg.com/media/DmouIvGX0AEtkm5.jpg' },
  { id: '9', difficulty: 'Medium', name: 'Bench Press', description: 'Flat bench press', imageUrl: 'https://i.ytimg.com/vi/SCVCLChPQFY/maxresdefault.jpg' },
  { id: '10', difficulty: 'Medium', name: 'Deadlifts', description: 'Standard deadlifts', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/romanian-deadlift-1595930760.jpg' },
  { id: '11', difficulty: 'Medium', name: 'Pull-ups', description: 'Classic pull-ups', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/u05-bottomhalfwaytop-ism-mh310118-1558552383.jpg' },
  { id: '12', difficulty: 'Medium', name: 'Box Jumps', description: 'Explosive box jumps', imageUrl: 'https://movemoresitless.files.wordpress.com/2013/03/screen-shot-2013-03-23-at-7-02-06-pm.png' },
  { id: '13', difficulty: 'Medium', name: 'Kettlebell Swings', description: 'Kettlebell swing workout', imageUrl: 'https://cdn.oxygenmag.com/wp-content/uploads/2015/02/kettlebell-swing-1.jpg?width=730' },
  { id: '14', difficulty: 'Medium', name: 'Russian Twists', description: 'Russian twist exercise', imageUrl: 'https://www.spotebi.com/wp-content/uploads/2015/04/russian-twist-exercise-illustration.jpg' },

  // Hard exercises
  { id: '15', difficulty: 'Hard', name: 'Plank', description: 'Plank for core conditioning', imageUrl: 'https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg' },
  { id: '16', difficulty: 'Hard', name: 'Burpees', description: 'High-intensity burpees', imageUrl: 'https://www.spotebi.com/wp-content/uploads/2014/10/burpees-exercise-illustration.jpg' },
  { id: '17', difficulty: 'Hard', name: 'Barbell Squats', description: 'Barbell back squats', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/back-squat-1662030023.jpg' },
  { id: '18', difficulty: 'Hard', name: 'Tire Flips', description: 'Heavy tire flipping', imageUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/muscles-used-to-tire-flip-1024x433.png' },
  { id: '19', difficulty: 'Hard', name: 'Muscle Ups', description: 'Advanced muscle ups', imageUrl: 'https://www.wikihow.com/images/thumb/0/03/Train-for-Muscle-Ups-Step-9.jpg/aid11342021-v4-1200px-Train-for-Muscle-Ups-Step-9.jpg' },
  { id: '20', difficulty: 'Hard', name: 'Handstand Push-ups', description: 'Handstand push-ups', imageUrl: 'https://www.hevyapp.com/wp-content/uploads/handstand-press-up-.png' },
  { id: '21', difficulty: 'Hard', name: 'Clean and Jerk', description: 'Olympic clean and jerk', imageUrl: 'https://i.ytimg.com/vi/PjY1rH4_MOA/maxresdefault.jpg' },
];

const ExerciseLibraryScreen = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const filteredExercises = selectedDifficulty === 'All' 
    ? exercises
    : exercises.filter(exercise => exercise.difficulty === selectedDifficulty);

  return (
    <View style={styles.container}>
      <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />
      <Text style={styles.header}>Exercise Library {selectedDifficulty}</Text>
      <FlatList
        data={filteredExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExerciseCard
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
      />
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
