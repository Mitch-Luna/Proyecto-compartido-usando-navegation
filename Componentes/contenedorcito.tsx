import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

interface Props{
    text: string
}
export default function Contenedorcito( {text}: Props) {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
        <View style={styles.subcontenedor}>
            <Text style={styles.letritas}> {text} </Text>
            <Text style={styles.miniletras}> See all</Text>
            <AntDesign style={styles.flecha} name="arrowright" size={24} color="red" />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'',
    marginLeft:19,
    marginTop:4,
    width:'93%',
  },
  contenedorletras:{
    display:'flex',
    width:'93%',
    height:90,
  },
  letras:{
    fontSize:27,
  },
  input:{ 
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
    fontFamily:'Secular One',
    fontSize:25,
  },
  miniletras:{
    fontFamily:'Secular One',
    marginLeft:'auto',
    fontSize:19,
    color:'red'
  },
  flecha:{
    marginTop:2,
  }
});