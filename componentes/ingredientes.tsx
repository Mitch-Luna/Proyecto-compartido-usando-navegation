import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Ingredientes() {
    const [fontsLoaded] = useFonts({
        'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
        'Prompt': require('../assets/Font/Prompt-Medium.ttf'),
        
    })
    if (!fontsLoaded) return null;
  return (

      <View style={styles.letras}>
        <Text style={styles.letraUno}> Ingredients</Text>
        <Text style={styles.letraDos}> 5 items</Text>

      </View>
  );
}

const styles = StyleSheet.create({

  letras:{
    marginTop:12,
    backgroundColor:'',
    width:'100%',
    height:45,
  },
  letraUno:{
    fontFamily:'Prompt',
    marginHorizontal:12,
    fontSize:25,
  },
  letraDos:{
    fontFamily:'Prompt',
    color:'gray',
    marginHorizontal:12,
    marginLeft:'auto',
    marginTop:-25,
    fontSize:15,

  }
});

