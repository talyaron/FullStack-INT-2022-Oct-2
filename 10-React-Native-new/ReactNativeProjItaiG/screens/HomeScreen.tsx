import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MovieApp!</Text>
      <Text style={styles.description}>
        Your one-stop app for browsing and renting the latest movies.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Browse Movies"
          onPress={() => navigation.navigate('MoviesForRentTab')}
          color="#007bff"
        />
        <Button
          title="View Watchlist"
          onPress={() => navigation.navigate('WatchlistTab')}
          color="#28a745"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;