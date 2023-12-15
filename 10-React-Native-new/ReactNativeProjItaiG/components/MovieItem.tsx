import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieItem = ({ movie }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default MovieItem;