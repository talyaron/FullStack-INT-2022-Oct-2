import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';

const SelfieScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const [selfies, setSelfies] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takeSelfie = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      setSelfies((prevSelfies) => [...prevSelfies, photo.uri]);
      setIsCameraOpen(false);
    }
  };

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    );
  };

  let camera;

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isCameraOpen && (
        <Camera style={styles.camera} type={cameraType} ref={(ref) => (camera = ref)}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
              <Text style={styles.flipText}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selfieButton} onPress={takeSelfie}>
              <Text style={styles.selfieText}>Take a Selfie</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      <TouchableOpacity
        style={styles.openCameraButton}
        onPress={() => setIsCameraOpen(true)}
        disabled={isCameraOpen}
      >
        <Text style={styles.openCameraButtonText}>Open Camera</Text>
      </TouchableOpacity>
      <ScrollView style={styles.selfiesContainer}>
        {selfies.map((selfieUri, index) => (
          <View key={index} style={styles.selfieItem}>
            <Image source={{ uri: selfieUri }} style={styles.selfieImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  flipButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  flipText: {
    fontSize: 18,
    color: 'white',
  },
  selfieButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 10,
  },
  selfieText: {
    fontSize: 18,
    color: 'white',
  },
  selfiesContainer: {
  },
  selfieItem: {
    marginBottom: 10,
  },
  selfieImage: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: 'white',
  },
  openCameraButton: {
    alignSelf: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: '#17a2b8',
    borderRadius: 10,
  },
  openCameraButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default SelfieScreen;
