import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import { fetchMovies } from "../services/movieService";
import MovieItem from "../components/MovieItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../types/types"; 
const RENTED_MOVIES_KEY = '@rented_movies'; 

const MoviesForRentScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]); 
  const [watchlist, setWatchlist] = useState<Movie[]>([]); 
  const [rentedMovies, setRentedMovies] = useState<Movie[]>([]); 

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    };

    const loadWatchlist = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@watchlist");
        if (jsonValue != null) {
          setWatchlist(JSON.parse(jsonValue));
        }
      } catch (e) {
        Alert.alert("Error", "Failed to load the watchlist.");
      }
    };

    loadMovies();
    loadWatchlist();
  }, []);

  const addToWatchlist = async (movie: Movie) => {
    if (watchlist.some(watchlistMovie => watchlistMovie.id === movie.id)) {
      Alert.alert("Duplicate", "This movie is already in your watchlist.");
      return;
    }
  
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    try {
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem("@watchlist", jsonValue);
    } catch (e) {
      Alert.alert("Error", "Failed to save to the watchlist.");
    }
  };

  const rentMovie = async (movie: Movie) => {
    // Check if the movie is already rented
    const isRented = rentedMovies.some((rentedMovie) => rentedMovie.id === movie.id);
    if (isRented) {
      Alert.alert("Already Rented", "You have already rented this movie.");
      return;
    }

    try {
      const newRentedMovies = [...rentedMovies, movie];
      setRentedMovies(newRentedMovies);
      const jsonValue = JSON.stringify(newRentedMovies);
      await AsyncStorage.setItem(RENTED_MOVIES_KEY, jsonValue); // Save to AsyncStorage
      Alert.alert("Rent Movie", `You have rented: ${movie.title}`);
    } catch (e) {
      Alert.alert("Error", "Failed to rent the movie.");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            onAddToWatchlist={addToWatchlist}
            onRent={rentMovie}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MoviesForRentScreen;
