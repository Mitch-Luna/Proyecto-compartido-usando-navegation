import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Perfil() {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
    'Prompt': require('../assets/Font/Prompt-Medium.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Image
        style={styles.Imagen}
        source={{ uri: 'https://p4.wallpaperbetter.com/wallpaper/895/691/701/women-anastasia-scheglova-blonde-brunette-wallpaper-preview.jpg' }}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.nombre}>Roberta Anny</Text>
        <View style={styles.subcontainerDos}>
          <Entypo name="location-pin" size={22} color="red" />

          <Text style={styles.lugar}> Bali, Indonecia</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.nombreboton}>Follow</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor: '',

  },
  subcontainer: {
    marginLeft: 12,
    flexDirection: 'column',
    marginTop: 2,
    backgroundColor: '',
    width: '54%',

  },
  subcontainerDos: {
    flexDirection: 'row',
    marginTop: 2,
    backgroundColor: 'white',
    width: '100%',

  },
  nombre: {
    fontFamily:'Prompt',
    fontSize: 19,
  },
  lugar: {
    fontSize: 15,
    color: 'gray'
  },
  Imagen: {
    marginLeft: 18,
    width: 47,
    height: 47,
    borderRadius: 45,
  },
  boton:{
    marginHorizontal:2,
    backgroundColor:'red',
    borderRadius:13,
    alignItems:'center',
    width:96,
    height:45,
  },
  nombreboton:{
    fontSize:18,
    fontFamily:'Prompt',
    color:'white',
    marginTop:9,

  },
  
});