import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const WatchlistScreen = () => {
  const [watchlist, setWatchlist] = useState([]); // Replace with your state logic

  return (
    <View style={styles.container}>
      <FlatList
        data={watchlist}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default WatchlistScreen;