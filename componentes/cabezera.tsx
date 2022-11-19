import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Cabecera() {
    return (
        <View style={styles.contenedor}>
        <Text>Recetas guardadas</Text>
        <View style={styles.contenedorbotones}>
        <TouchableOpacity style={styles.boton}>
            <Text style={styles.nombreboton}>video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonDos}>
            <Text style={styles.nombrebotonDos}>Recipe</Text>
        </TouchableOpacity>
        </View>
        </View>

    );
}

const styles=StyleSheet.create({ 
    contenedor:{    
        backgroundColor:"white",
        width:"100%",
        height:80,
        marginTop:36,
        marginHorizontal:21,

    },
    textoprincipal: {
        top: -450,
        right: 0,
        fontWeight: "bold",
        fontSize: 28,
        width:305,
        height:40,
      },

    boton: {
        width:174, 
        height:34,
        backgroundColor:"red",
        borderRadius:13,
        marginTop:19,
        marginHorizontal:2,
    },

    nombreboton: {
        marginTop:6,
        alignSelf:'center',
        fontSize:15,
        backgroundColor:"withe",
    },
    botonDos: {
        marginHorizontal:22,
        width:76, 
        height:34,
        backgroundColor:"white",
        borderRadius:13,
        marginTop:19,
        color:"pink",
    },

    nombrebotonDos: {
        marginTop:6,
        alignSelf:'center',
        fontSize:15,
        color:"red",
    },

    contenedorbotones: {
        flex:1,
        backgroundColor:"white",
        flexDirection:"row",
    },

    
})