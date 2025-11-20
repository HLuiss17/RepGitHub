import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, ProgressBarAndroid, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Loading() {
    const [progress, setProgress] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 1) {
                    clearInterval(interval);
                    navigation.replace("Profile"); 
                    return 1;
                }
                return prev + 0.02;
            });
        }, 50);
    }, []);

    return (
        <ImageBackground
            source={require("../assets/itq1.png")}
            style={styles.container}
        >
            <Text style={styles.text}>Cargando...</Text>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={progress}
                color="#0ace13"
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 20, marginBottom: 20, color: "white", fontWeight: "bold" }
});
