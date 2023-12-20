import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Movie } from "../types/types";
import MovieItem from "../components/MovieItem";
import { useBackground } from "../contexts/BackgroundContext";

const WatchlistScreen = () => {
  const { background } = useBackground();
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

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

  const removeFromWatchlist = async (movieId: any) => {
    const newWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    try {
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem("@watchlist", jsonValue);
      setWatchlist(newWatchlist);
    } catch (e) {
      Alert.alert("Error", "Failed to remove the movie from the watchlist.");
    }
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadWatchlist();
    }, [])
  );

  const renderItem = ({ item }: { item: Movie }) => (
    <View style={styles.item}>
      <MovieItem movie={item} screenType="watchlist" />
      <View style={styles.movieInfo}>
        <Text style={styles.movieDescription}>{item.description}</Text>
        <TouchableOpacity
          onPress={() => removeFromWatchlist(item.id)}
          style={styles.removeButton}
        >
          <Text style={styles.buttonText}>Remove from List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Your Watchlist</Text>
        <FlatList
          data={watchlist}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  movieDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WatchlistScreen;
