import React, { useState, useContext, useEffect } from 'react';
import { View, Button, ImageBackground, StyleSheet, Alert, ImageSourcePropType, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BackgroundContext } from '../contexts/BackgroundContext';

const SettingsScreen: React.FC = () => {
  const { setBackground } = useContext(BackgroundContext);
  const [backgroundImage, setBackgroundImage] = useState<ImageSourcePropType | null>(null);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
    }
  };

  const pickImageAsync = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        const source = { uri: result.uri };
        setBackgroundImage(source);
        setBackground(source);
      }
    } catch (e) {
      Alert.alert("Error", "Failed to pick image.");
    }
  };

  return (
    <View style={styles.container}>
      {backgroundImage && (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Customize App Background</Text>
            <Button title="Select Image To Set As The App Background" onPress={pickImageAsync} />
          </View>
        </ImageBackground>
      )}
      {!backgroundImage && (
        <View style={styles.content}>
          <Text style={styles.title}>Customize App Background</Text>
          <Button title="Select Image To Set As The App Background" onPress={pickImageAsync} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SettingsScreen;
