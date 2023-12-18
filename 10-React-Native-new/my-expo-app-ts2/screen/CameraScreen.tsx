import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from '../components/CircleButton';
import IconButton from '../components/IconButton';
import EmojiPicker from '../components/EmojiPicker';
import EmojiList from '../components/EmojiList';
import EmojiSticker from '../components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera'
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';




const PlaceholderImage = require('../assets/background.png');

export default function CameraScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [showCamera, setShowCamera] = useState(false)
  const imageRef = useRef();
  const cameraRef = useRef();

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(undefined);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const openCamera = async () => {
    setShowCamera(true)
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraPermission.status === "granted");


    if (hasCameraPermission === undefined) {
      return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
      return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }


  }

  const takePic = async () => {
    let options = {
      quality: 1,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setSelectedImage(newPhoto.uri);
    setShowCamera(false)
  }

  const onReset = () => {
    setShowAppOptions(false);
  };


  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }

  };

  return (
    <>
      {
        showCamera ? (
          <Camera style={styles.cameraContainer} ref={cameraRef}>
            <TouchableOpacity onPress={takePic} >
              <View style={styles.buttonContainer} />
            </TouchableOpacity>
          </Camera>
        ) : (
          <GestureHandlerRootView style={styles.container}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <View ref={imageRef} collapsable={false}>
                  <ImageViewer
                    placeholderImageSource={PlaceholderImage}
                    selectedImage={selectedImage}
                  />

                  {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
                </View>
              </View>
              {
                showAppOptions ? (
                  <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                      <IconButton icon="refresh" label="Reset" onPress={onReset} />
                      <CircleButton onPress={onAddSticker} />
                      <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                    </View>
                  </View>
                ) : (
                  <View style={styles.footerContainer}>
                    <Button label="" icon="camera" theme="primary" onPress={openCamera} />
                    <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
                    <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
                  </View>)
              }
              <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
              </EmojiPicker>

            </View>
          </GestureHandlerRootView>


        )
      }
    </>



  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 20,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});