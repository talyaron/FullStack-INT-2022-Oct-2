import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Button, Alert, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Movie } from "../types/types"; // Make sure this path is correct
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

  const renderItem = ({ item }: any) => (
    <SafeAreaView style={styles.item}>
       <MovieItem
      movie={item}
      />
      <SafeAreaView style={styles.movieInfo}>
        <Text style={styles.movieDescription}>{item.description}</Text>
        <Button
          title="Remove from List"
          onPress={() => removeFromWatchlist(item.id)}
          color="#FF6347"
        />
      </SafeAreaView>
    </SafeAreaView>
  );

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
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
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center', 
  },
  movieImage: {
    width: 100, 
    height: 150, 
    marginRight: 10, 
  },
  movieInfo: {
    flex: 1, 
    justifyContent: 'center',
  },
  movieTitle: {
    fontWeight: 'bold',
  },
  movieDescription: {
    fontSize: 12,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default WatchlistScreen;