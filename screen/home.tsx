import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Cabecera from '../Componentes/Cabecera';
import Videos from '../Componentes/videos';

const  Home =() =>{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
  
      
        <Text>Hola</Text>

      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:56,
    width:'100%',
    height:234,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
});

export default Home;