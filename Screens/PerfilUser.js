import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) setImage(result.assets[0].uri);
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) setImage(result.assets[0].uri);
    };

    return (
        <View style={styles.container}>
            <Image source={image ? { uri: image } : require("../assets/user1.png")} style={styles.photo} />
            <Button title="Seleccionar Foto" onPress={pickImage} />
            <Button title="Tomar Foto" onPress={takePhoto} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    photo: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 }
});
