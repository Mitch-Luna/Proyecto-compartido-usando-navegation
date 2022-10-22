import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Cabecera() {
  return (
    <View style={styles.container}>
        <View style={styles.contenedorletras}>
        <Text style={styles.letras}>Encontrar las mejores recetas para cocinar</Text>
        </View>
        <TextInput
        style={styles.input}
        placeholder='  Search recipes'
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    fontSize:23,
  },
  miniletras:{
    marginLeft:'auto',
    fontSize:19,
    color:'red'
  },
  flecha:{
    marginTop:6,
  }
});