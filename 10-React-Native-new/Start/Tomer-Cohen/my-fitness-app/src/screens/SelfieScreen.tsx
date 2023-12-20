import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SelfieScreen: React.FC = () => {
  const [selfieImages, setSelfieImages] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Camera permission required');
      }
    })();
  }, []);

  const openCameraForSelfie = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.cancelled && result.uri) {
      setSelfieImages([...selfieImages, result.uri]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openCameraForSelfie}>
        <Text style={styles.takeSelfieText}>Take a Selfie</Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        {selfieImages.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.selfieImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  takeSelfieText: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 20,
  },
  selfieImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginHorizontal: 10,
  },
});

export default SelfieScreen;
