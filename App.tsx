import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
// import Vista1 from './screen/Vista1';
import Navegation from './Navegation';


export default function App() {
  return (
    <Navegation
    />
    
    // <SafeAreaView style={{ flex: 1 }}>
    //     {/* <Vista1/> */}
    // </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});

