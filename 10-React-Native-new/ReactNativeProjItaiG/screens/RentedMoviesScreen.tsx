import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../types/types";
import MovieItem from "../components/MovieItem";
import { useFocusEffect } from "@react-navigation/native";
import { useBackground } from "../contexts/BackgroundContext";
import { SafeAreaView } from "react-native-safe-area-context";

const RENTED_MOVIES_KEY = "@rented_movies";

const RentedMoviesScreen: React.FC = () => {
  const { background } = useBackground();
  const [rentedMovies, setRentedMovies] = useState<Movie[]>([]);

  // Load rented movies from AsyncStorage
  const loadRentedMovies = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(RENTED_MOVIES_KEY);
      if (jsonValue != null) {
        setRentedMovies(JSON.parse(jsonValue));
      }
    } catch (e) {
      Alert.alert("Error", "Failed to load the rented movies.");
    }
  };

  useEffect(() => {
    loadRentedMovies();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadRentedMovies();
    }, [])
  );

  // Function to return a rented movie
  const returnMovie = async (movie: Movie) => {
    try {
      const updatedRentedMovies = rentedMovies.filter(
        (rentedMovie) => rentedMovie.id !== movie.id
      );

      await updateRentedMovies(updatedRentedMovies);

      Alert.alert("Return Movie", `You have returned: ${movie.title}`);
    } catch (e) {
      Alert.alert("Error", "Failed to update the rented movies.");
    }
  };

  // Render each movie item
  
  const renderMovieItem = ({ item }: { item: Movie }) => (
    <View style={styles.movieItemContainer}>
      <MovieItem movie={item} screenType="rented" />
      <TouchableOpacity 
        onPress={() => returnMovie(item)} 
        style={styles.returnButton}
      >
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );

  // Update rented movies in AsyncStorage
  const updateRentedMovies = async (updatedRentedMovies: Movie[]) => {
    try {
      await AsyncStorage.setItem(
        RENTED_MOVIES_KEY,
        JSON.stringify(updatedRentedMovies)
      );
      setRentedMovies(updatedRentedMovies);
    } catch (e) {
      Alert.alert("Error", "Failed to update rented movies.");
    }
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        {rentedMovies.length === 0 ? (
          <Text style={styles.noMoviesText}>No rented movies</Text>
        ) : (
          <FlatList
            data={rentedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderMovieItem}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  movieItemContainer: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  noMoviesText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  returnButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default RentedMoviesScreen;
