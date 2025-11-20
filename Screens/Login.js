import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import icon from "../assets/user1.png";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log("Intentando iniciar sesión con las credenciales:", password, username);
       
        if (username === "Luis" && password === "12345") {
            navigation.navigate("Home");
        } else {
            Alert.alert("Credenciales incorrectas");
        }
    };

    return (
        <View style={Styles.container}>
            <Image source={icon} style={Styles.logo} />
            <Text style={Styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={Styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={Styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={Styles.boton} onPress={handleLogin}>
                <Text style={Styles.btnText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#000000ff",
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#ffffffff",
    },
    input: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        height: 40,
        borderColor: "#a50808ff",
        color: "#ffffffff",
    },
    boton: {
        backgroundColor: "#0ace13ff",
        padding: 12,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});