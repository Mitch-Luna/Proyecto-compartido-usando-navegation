import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, SafeAreaView,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props{
  imagen :{},
  imagenDos :{},
  cantidad: string,
  textDos:string
  nombrePersona:string

}

export default function Videos({imagen, cantidad, imagenDos, textDos, nombrePersona}:Props) {
  return (
    <View style={styles.container}>
    <ScrollView
           horizontal>
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
          <Image
          style={styles.perfilUno}
          source={imagenDos}
          />
          <Text style={styles.nombrePersona}> {nombrePersona} </Text>
          </View>
        </View>
        </View>
        </ScrollView>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop:12,
    backgroundColor: '',
    flex:1,
  },
  videoUno:{
    alignSelf:'flex-end',
    borderRadius:12,
    width:300,
    height:185,
  },
  detalles:{
    backgroundColor:'',
    borderRadius:12,
    marginHorizontal:20,
    flex:1,
  }, 
  estrella:{
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:12,
    marginTop:-177,
    backgroundColor:'rgba(182, 180, 178,0.5)',
    width:'25%',
    height:34,
    borderRadius:12,
  },
  iconoestrella:{
    marginHorizontal:7
  },
  cantidad:{
    marginHorizontal:-12,
    fontSize:18,
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
});