import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Button, Alert, FlatList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Movie } from "../types/types"; // Make sure this path is correct

const WatchlistScreen = () => {
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

  const removeFromWatchlist = async (movieId) => {
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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.photoUrl }}
        style={styles.movieImage}
        resizeMode="cover"
      />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieDescription}>{item.description}</Text>
        <Button
          title="Remove from List"
          onPress={() => removeFromWatchlist(item.id)}
          color="#FF6347"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={watchlist}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center', // Align items vertically
  },
  movieImage: {
    width: 100, // Set the width
    height: 150, // Set the height
    marginRight: 10, // Add some margin between image and movie info
  },
  movieInfo: {
    flex: 1, // Take up the remaining space
    justifyContent: 'center', // Center movie info vertically
  },
  movieTitle: {
    fontWeight: 'bold',
  },
  movieDescription: {
    fontSize: 12,
  },
});

export default WatchlistScreen;