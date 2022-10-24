import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Video() {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
    'Prompt': require('../assets/Font/Prompt-Medium.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <View style={styles.detalles}>
      <Image
      style={styles.video}
      source={require('../assets/images/imagenUno.jpeg')}/>
      <View style={styles.containerIconoVideo}>
        <AntDesign style={styles.iconoVideo} name="caretright" size={24} color="white" />
      </View>
      </View>
      <View style={styles.contenedorletras}>
      <FontAwesome style={styles.estrella} name="star" size={24} color="orange" />
      <Text style={styles.puntuacion}>4,5</Text>
      <Text style={styles.letras}>(300 Reviews)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
  },
  detalles:{
    backgroundColor:'',
    borderRadius:12,
    marginHorizontal:20,
    idth:'97%',
    height:240
  },
  video:{
    borderRadius:23,
    marginTop:12,
    alignSelf:'center',
    width:'97%',
    height:220
  },
  containerIconoVideo:{
    alignSelf:'center',
    backgroundColor:'rgba(172, 178, 175,0.8)',
    width:'15%',
    height:44,
    borderRadius:55,
    marginTop:-133
  },
  iconoVideo:{
    marginTop:8,
    alignSelf:'center'
  },
  contenedorletras:{
    marginTop:12,
    flexDirection:'row',
    width:'100%',
    height:26,
    backgroundColor:''
  },
  estrella:{
    fontSize:25,
    marginHorizontal:20,
  },
  puntuacion:{
    fontFamily:'Prompt',
    marginLeft:-12,
    fontSize:20,
    marginTop:-3
    
  },
  letras:{
    marginTop:-2,
    color:'gray',
    fontSize:18,
    marginHorizontal:8,
  }
});