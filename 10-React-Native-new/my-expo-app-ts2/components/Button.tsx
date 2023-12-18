import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Button({ label, theme, onPress, icon="picture-o" }: any) {
    if(theme === 'primary') {
        return (
            <View 
            style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
            >
                <Pressable  
                style={[styles.button, { backgroundColor: "#fff" }]} 
                onPress={onPress}>
                <FontAwesome
                    name={icon}
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}
                    >{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
    
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        marginBottom: 3
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#999',
        fontSize: 16,
    },
});