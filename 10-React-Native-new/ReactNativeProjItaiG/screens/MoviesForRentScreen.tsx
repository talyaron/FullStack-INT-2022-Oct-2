import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert, ImageBackground } from "react-native";
import { fetchMovies } from "../services/movieService";
import MovieItem from "../components/MovieItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../types/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBackground } from "../contexts/BackgroundContext";

const MoviesForRentScreen = () => {
  const { background } = useBackground();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMovies = async (pageNum = 1) => {
    if (loading) return;
    setLoading(true);

    try {
      const fetchedMovies = await fetchMovies(pageNum);
      setMovies(prevMovies => [...prevMovies, ...fetchedMovies]);
      setPage(pageNum + 1);
    } catch (e) {
      Alert.alert("Error", "Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleLoadMore = () => {
    loadMovies(page);
  };

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
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
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
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default MoviesForRentScreen;