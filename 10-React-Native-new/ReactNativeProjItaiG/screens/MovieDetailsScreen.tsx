import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Movie Details Screen</Text>
      {/* Add movie details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieDetailsScreen;