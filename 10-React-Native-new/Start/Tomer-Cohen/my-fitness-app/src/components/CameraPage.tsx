import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  SelfieScreen: undefined;
  CameraPage: { selfie: string | null };
};

type CameraPageRouteProp = RouteProp<RootStackParamList, 'CameraPage'>;

const CameraPage: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const [selfie, setSelfie] = useState<string | null>(null);

  const navigation = useNavigation();
  const route = useRoute<CameraPageRouteProp>();

  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takeSelfie = async () => {
    if (selfie) {
      setSelfie(null); // Clear the previous selfie
    }
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setSelfie(photo.uri);
      navigation.navigate('SelfieScreen', { selfie: photo.uri });
    }
  };

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={cameraType} ref={(ref) => (cameraRef.current = ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
            <Text style={styles.flipText}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selfieButton} onPress={takeSelfie}>
            <Text style={styles.selfieText}>Take a Selfie</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
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
  },
  flipText: {
    fontSize: 18,
    color: 'white',
  },
  selfieButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  selfieText: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraPage;
