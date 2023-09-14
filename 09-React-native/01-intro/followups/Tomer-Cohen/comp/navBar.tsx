import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomNavBar({ navigation }: any) {
  return (
    <View style={styles.Navbar}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.navButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Main")} style={styles.navButton}>
        <Text style={styles.buttonText}>our dogs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("UrDog")} style={styles.navButton}>
        <Text style={styles.buttonText}>ur dog</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SecondPage")} style={styles.navButton}>
        <Text style={styles.buttonText}>SecondPage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomNavBar;
