import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

interface Props{
    imagen:{},
    text: string
}
export default function Perfiles( {imagen, text}:Props) {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/Font/Kanit-Regular.ttf'),
    'Secular One': require('../assets/Font/SecularOne-Regular.ttf'),
    
})
if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
        <Image
          style={styles.perfil}
          source={imagen}
          />
          <Text style={styles.nombre}> {text} </Text>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'',
    marginTop:14,
    width:'93%',
  },
  perfil:{
    marginHorizontal:18,
    width:70,
    height:68,
    borderRadius:45,
  },
  nombre:{
    fontFamily:'Kanit',
    marginHorizontal:12,
    fontSize:16,
  }
});