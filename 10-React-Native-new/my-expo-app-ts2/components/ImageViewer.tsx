import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


export default function ImageViewer({ placeholderImageSource, selectedImage }: any) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
    
    return (
        <View>
            <Image source={imageSource} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 420,
        borderRadius: 18
    }
});
