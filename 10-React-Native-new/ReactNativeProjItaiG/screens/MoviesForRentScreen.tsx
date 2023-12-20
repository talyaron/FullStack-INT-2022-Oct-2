import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert, ImageBackground } from "react-native";
import { fetchMovies } from "../services/movieService";
import MovieItem from "../components/MovieItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../types/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBackground } from "../contexts/BackgroundContext";

const WATCHLIST_KEY = '@watchlist'; 
const RENTED_MOVIES_KEY = '@rented_movies'; 

const MoviesForRentScreen = () => {
  const { background } = useBackground();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]); 
  const [rentedMovies, setRentedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
    loadWatchlist(); 
    loadRentedMovies(); 
  }, []);

  const loadWatchlist = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(WATCHLIST_KEY);
      if (jsonValue != null) {
        setWatchlist(JSON.parse(jsonValue));
      }
    } catch (e) {
      Alert.alert("Error", "Failed to load watchlist.");
    }
  };

  const loadRentedMovies = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(RENTED_MOVIES_KEY);
      if (jsonValue != null) {
        setRentedMovies(JSON.parse(jsonValue));
      }
    } catch (e) {
      Alert.alert("Error", "Failed to load rented movies.");
    }
  };

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
    const isAlreadyRented = rentedMovies.some(m => m.id === movie.id);
    if (isAlreadyRented) {
      Alert.alert("Movie Already Rented", "You have already rented this movie.");
      return;
    }

    const updatedRentedMovies = [...rentedMovies, movie];
    try {
      await AsyncStorage.setItem(RENTED_MOVIES_KEY, JSON.stringify(updatedRentedMovies));
      setRentedMovies(updatedRentedMovies);
      Alert.alert("Movie Rented", `You have rented: ${movie.title}`);
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
              screenType="forRent"
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