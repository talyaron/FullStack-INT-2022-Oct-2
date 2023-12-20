import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../types/types';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface MovieItemProps {
  movie: Movie;
  onAddToWatchlist?: (movie: Movie) => void;
  onRent?: (movie: Movie) => void;
  screenType: 'rent' | 'watchlist' | 'rented';
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onAddToWatchlist, onRent, screenType }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>

      {screenType === 'forRent' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => onRent(movie)}>
            <Text style={styles.buttonText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onAddToWatchlist(movie)}>
            <Text style={styles.buttonText}>Watchlist</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%', // Adjust the width as necessary
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 10,
  },
});

export default MovieItem;