import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


export default function CabeceraDos() {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
        <View style={styles.contenedorletras}>
        <Text style={styles.letras}>Encontrar las mejores recetas para cocinar</Text>
        </View>
        <View style={styles.input}>
        <Entypo style={styles.lupa} name="magnifying-glass" size={30} color="rgb(223, 223, 223)" />
        <Text style={styles.letra}>Search recipes</Text>
        </View>
        </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'',
    marginLeft:19,
    marginTop:54,
    width:'93%',
  },
  contenedorletras:{
    display:'flex',
    width:'93%',
    height:90,
  },
  letras:{
    fontFamily:'Secular One',
    fontSize:27,
  },
  input:{ 
    flexDirection:'row',
    marginTop:12,
    borderRadius:13,
    borderWidth:2,
    borderColor:'rgb(223, 223, 223)',
    width: '92%',
    height:45,
  },
  subcontenedor:{
    backgroundColor:'',
    flexDirection:'row',
    marginTop:20,
    width:'99%',
    height:35,
  },
  letritas:{
    fontSize:23,
  },
  miniletras:{
    marginLeft:'auto',
    fontSize:19,
    color:'red'
  },
  flecha:{
    marginTop:6,
  },
  letra:{
    marginTop:5,
    marginHorizontal:-8,
    color:'rgb(223, 223, 223)',
    fontSize:18
  },
  lupa:{
    marginTop:5,
    marginHorizontal:12,
  }
});