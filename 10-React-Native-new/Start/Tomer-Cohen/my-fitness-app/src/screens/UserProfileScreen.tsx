import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  const userData = {
    username: 'JohnDoe123',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://example.com/profile-image.jpg',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
      <Text style={styles.username}>{userData.username}</Text>
      <Text style={styles.fullName}>{userData.fullName}</Text>
      <Text style={styles.email}>{userData.email}</Text>
      
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fullName: {
    fontSize: 18,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserProfileScreen;
