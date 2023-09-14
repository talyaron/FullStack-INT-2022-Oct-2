// SecondPage.tsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomNavBar from './navBar';

export default function SecondPage() {

  const navigation:any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Second Page</Text>
        <CustomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
