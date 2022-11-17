import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useFonts } from 'expo-font';

interface Props{
    imagen:{},
    nombre:string
}
export default function Items({imagen,nombre}:Props) {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
    'Prompt': require('../assets/Font/Prompt-Medium.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <View style={styles.contenedorImagen}>
        <Image
        style={styles.imagen}
        source={imagen}
        />
        </View>
        <Text style={styles.nombre}> {nombre} </Text>
        <Text style={styles.cantidad}>200g</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop:10,
    borderRadius:15,
    alignSelf:'center',
    width:'90%',
    height:87,
    backgroundColor: 'rgb(223, 223, 223)',
  },
  imagen:{
    marginTop:3,
    alignSelf:'center',
    width:56,
    height:60,
  },
  nombre:{
    fontFamily:'Prompt',
    fontSize:25,
    alignSelf:'center',
  },
  cantidad:{
    color:'gray',
    fontFamily:'Prompt',
    marginHorizontal:12,
    fontSize:15,
    alignSelf:'center',
    marginLeft:'auto',
  },
  contenedorImagen:{
    borderRadius:23,
    marginHorizontal:22,
    marginTop:7,
    width:79,
    height:75,
    backgroundColor:'white'
  }
});