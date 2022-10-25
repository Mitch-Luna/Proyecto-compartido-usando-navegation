import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

interface Props{
  imagen:{},
  textUno: string,
  textDos: string,

}

export default function PlatoReciente({imagen, textUno,textDos}:Props) {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
        <Image
        style={styles.imagenUno}
        source={imagen}
        />
        <View style={styles.contenedorletras}>
          <Text style={styles.letras}> {textUno} </Text>
          <Text style={styles.letrasDos}> {textDos} </Text>
          
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'',
    marginTop:24,
    width:'100%',
  },
  imagenUno:{
    marginHorizontal:12,
    width:140,
    height:150,
    borderRadius:12,
  },
  contenedorletras:{
    flex:1,
    backgroundColor:''
  },
  letras:{
    fontFamily:'Kanit',
    fontSize:18,
    marginHorizontal:10,
  },
  letrasDos:{
    fontFamily:'Kanit',
    fontSize:12,
    color:'gray',
    marginHorizontal:10,
  },
});