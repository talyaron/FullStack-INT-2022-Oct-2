import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DifficultySelector = ({ onSelectDifficulty }: { onSelectDifficulty: (difficulty: string) => void }) => {
  const difficulties = ['Easy', 'Medium', 'Hard'];

  return (
    <View style={styles.container}>
      {difficulties.map((difficulty, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onSelectDifficulty(difficulty)}
        >
          <Text style={styles.buttonText}>{difficulty}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DifficultySelector;
