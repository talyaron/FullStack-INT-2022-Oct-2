import React, { useState, useContext, useEffect } from 'react';
import { View, Button, ImageBackground, StyleSheet, Alert, ImageSourcePropType } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BackgroundContext } from '../contexts/BackgroundContext';
import { ImagePickerResult } from 'expo-image-picker';

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
      const result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled && 'uri' in result) {
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
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
      )}
      <Button title="Select Image To Set As The App Background" onPress={pickImageAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default SettingsScreen;
