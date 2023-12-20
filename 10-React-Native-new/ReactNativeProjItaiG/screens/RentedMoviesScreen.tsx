import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
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
  const renderMovieItem = ({ item }: { item: Movie }) => (
    <View style={styles.movieItemContainer}>
      <MovieItem movie={item} />
      <Button title="Return" onPress={() => returnMovie(item)} />
    </View>
  );

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
        <FlatList
          data={rentedMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovieItem}
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
  movieItemContainer: {
    marginBottom: 10,
    alignItems:"center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default RentedMoviesScreen;
