import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Main from '../Componentes/Main';

export default function Vista4() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} />
      <ScrollView>
      <Main/> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});