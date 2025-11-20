import React, { useEffect, useState, useCallback } from "react";
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    RefreshControl,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
    const [listaPersonajes, setListaPersonajes] = useState([]);
    const [refrescando, setRefrescando] = useState(false);
    const navigation = useNavigation();

    // Función para obtener los personajes de SWAPI
    const obtenerPersonajes = async () => {
        setRefrescando(true);
        try {
            const respuesta = await fetch("https://swapi.dev/api/people/");
            const datos = await respuesta.json();

            // Ordenar A-Z y tomar solo los primeros 5
            const ordenados = datos.results
                .sort((a, b) => a.name.localeCompare(b.name))
                .slice(0, 5);

            setListaPersonajes(ordenados);
        } catch (error) {
            console.error("Error al obtener los personajes:", error);
        } finally {
            setRefrescando(false);
        }
    };

    // Ejecutar al cargar la pantalla
    useEffect(() => {
        obtenerPersonajes();
    }, []);

    // Función de refresco al tirar hacia abajo
    const alRefrescar = useCallback(() => {
        obtenerPersonajes();
    }, []);

    // Renderizado de cada elemento de la lista
    const renderizarElemento = ({ item }) => (
        <View style={estilos.item}>
            <Text style={estilos.nombre}>{item.name}</Text>
            <Text>Altura: {item.height} cm</Text>
            <Text>Género: {item.gender}</Text>
        </View>
    );

    return (
        <View style={estilos.contenedor}>
            <TouchableOpacity
                style={estilos.botonPerfil}
                onPress={() => navigation.navigate("PerfilUser")}
            >
                <Text style={{ color: "white" }}>Mi Perfil</Text>
            </TouchableOpacity>

            <FlatList
                data={listaPersonajes}
                keyExtractor={(item) => item.name}
                renderItem={renderizarElemento}
                refreshControl={
                    <RefreshControl refreshing={refrescando} onRefresh={alRefrescar} />
                }
                contentContainerStyle={estilos.lista}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 10,
        backgroundColor: "#222",
    },
    lista: {
        paddingBottom: 20,
    },
    item: {
        backgroundColor: "#333",
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
    },
    nombre: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#fff",
    },
    botonPerfil: {
        alignSelf: "flex-end",
        padding: 10,
        backgroundColor: "#0ace13",
        borderRadius: 8,
        marginBottom: 10,
    },
});
