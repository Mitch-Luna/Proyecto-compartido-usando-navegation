import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function PlatoReciente() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.imagenUno}
        source={require('../assets/Images/sandwit.jpeg')}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'',
    marginTop:24,
    width:'100%',
  },
  imagenUno:{
    width:45,
    height:34,
  }
});