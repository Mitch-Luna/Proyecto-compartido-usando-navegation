import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, SafeAreaView } from 'react-native';
import Videos from '../Componentes/videosNurian';
import Cabecera from '../Componentes/header';

export default function HomeDos() {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView>

    <View style={styles.container}>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    backgroundColor: 'white',
  },
});