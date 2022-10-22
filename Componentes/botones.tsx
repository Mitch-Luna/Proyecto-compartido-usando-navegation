import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Botones() {
  return (
    <View style={styles.container}>
        <View style={styles.contenedorletras}>
        <Text style={styles.letras}>Categoría Popular</Text>
        </View>
        
        <View style={styles.contenedorBotones}>
            <TouchableOpacity
            style={styles.botonUno}
            >
            <Text style={styles.nombreBotones}>Salad</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.botonDos}
            >
            <Text style={styles.nombreBotonDos}>Breakfast</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botonUno}
            >
            <Text style={styles.nombreBotones}>Appetizer</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.botonUno}
            >
            <Text style={styles.nombreBotones}>Nodle</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.botonUno}
            >
            <Text style={styles.nombreBotones}>Luna</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'',
    marginTop:24,
    width:'100%',
  },
  contenedorletras:{
    marginLeft:18,
    backgroundColor:'',
    display:'flex',
    width:'93%',
    height:40,
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
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    backgroundColor:'',
    width:'100%',
    height:55,
  },
  botonUno:{
    marginHorizontal:2,
    backgroundColor:'',
    width:88,
    height:48,
    borderRadius:14,
  },
  nombreBotones:{
    marginTop:12,
    fontSize:17,
    alignSelf:'center',
    color:'red'
  },
  botonDos:{
    marginHorizontal:12,
    backgroundColor:'red',
    width:105,
    height:48,
    borderRadius:14,
  },
  nombreBotonDos:{
    marginTop:8,
    fontSize:19,
    alignSelf:'center',
    color:'white'
  },
});