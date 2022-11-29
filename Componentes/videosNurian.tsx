import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Props{
    imagen :{},
    imagenDos :{},
    cantidad: string,
    textDos:string
    nombrePersona:string
  
  }

export default function Video({imagen, cantidad, textDos, nombrePersona}: Props) {
    return (
        <View style= {styles.container}>
            <View style={styles.detalles}>
        <Image
        style={styles.videoUno}
        source={imagen}
        />
        <View style={styles.estrella}>
        <AntDesign style={styles.iconoestrella} name="star" size={26} color="white" />
        <Text style={styles.cantidad}> {cantidad} </Text>
        </View>
        <MaterialCommunityIcons style={styles.bookmarck} name="bookmark-minus-outline" size={30} color="black" />
        <View style={styles.containerIconoVideo}>
        <AntDesign style={styles.iconoVideo} name="caretright" size={24} color="white" />
        </View>
        <View style={styles.cantidadTiempo}>
        <Text style={styles.hora}>15:10</Text>
        </View>
        <View style={styles.NombreVideos}>
        <View style={ styles.letras}>
          <Text style={styles.nombre}> {textDos} </Text>
          <Text style={styles.puntos}>...</Text>
          </View>
          <View style={styles.contenedorPerfil}>
          <Text style={styles.nombrePersona}> {nombrePersona} </Text>
          </View>
        </View>
        </View>
       
          </View>
          

    );
}
const styles = StyleSheet.create({
    container:{
      marginTop:15,
        backgroundColor:"white",
        flex:1,
    },
    image: {
        alignSelf:"center",
        height: 180,
        width: "92%",
        borderRadius: 20,
    },

    videoUno:{
        alignSelf:'flex-end',
        borderRadius:12,
        width:'100%',
        height:185,
      },

    detalles:{
        backgroundColor:'',
        borderRadius:12,
        marginHorizontal:23,
        flex:1,
        width:'90%'
      }, 
      estrella:{
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:2,
        marginTop:-172,
        backgroundColor:'rgba(182, 180, 178,0.5)',
        width:'25%',
        height:28,
        borderRadius:8,
        
      },
      iconoestrella:{
        marginHorizontal:8,

      },
      cantidad:{
        marginHorizontal:-8,
        fontSize:15,
        color:'white',
      },
      bookmarck:{
        marginHorizontal:12,
        backgroundColor:'white',
        marginLeft:'auto',
        marginTop:-35,
        borderRadius:13,
        
      },
      containerIconoVideo:{
        alignSelf:'center',
        backgroundColor:'rgba(172, 170, 170,0.5)',
        width:'15%',
        height:44,
        borderRadius:52,
        marginTop:33
      },
      iconoVideo:{
        marginTop:8,
        alignSelf:'center'
      }, 
      cantidadTiempo:{
        alignItems:'center',
        marginTop:32,
        marginLeft:'auto',
        marginHorizontal:12,
        backgroundColor:' rgba(110, 110, 110, 0.5)',
        width:'20%',
        height:34,
        borderRadius:12,
      },
      hora:{
        marginTop:2,
        color:'white',
        fontSize:15
      },
      NombreVideos:{
        backgroundColor:'',
        flexDirection:'column',
        width:'100%',
        height:75,
      },
      letras:{
        flexDirection:'row',
        backgroundColor:'',
        width:'100%',
      },
      puntos:{
        marginTop: -18,
        fontSize:29,
        marginLeft:'auto',
      },
    
      nombre:{
        fontSize:15,
      },
      contenedorPerfil:{
        marginTop:10,
        flexDirection:'row',
        backgroundColor:'',
        width:'100%',
        height:44,
      },
      perfilUno:{
        width:46,
        height:44,
        borderRadius:45,
      },
      nombrePersona:{
        marginHorizontal:12,
        marginTop:12,
        fontSize:13,
        color:'gray'
      },
})
 
