import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Cabecera() {
    const [fontsLoaded] = useFonts({
        'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
        'Prompt': require('../assets/Font/Prompt-Medium.ttf'),
        
    })
    if (!fontsLoaded) return null;
    return (
        <View style={styles.container}>
            <View style={styles.cabecera}>
                <AntDesign style={styles.flecha} name="arrowleft" size={34} color="black" />
                <Text style={styles.puntos}>...</Text>
            </View>
            <Text style={styles.titulo}>Como hacer una</Text>
            <Text style={styles.tituloDos}> tostada</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:18,
        width:'100%',
        flex:1,
        backgroundColor: '',
    },
    cabecera: {
        width:'100%',
        flexDirection:'row',
        backgroundColor: '',
        marginTop:22,
    },
    flecha: {
        marginHorizontal:18,
    },
    puntos: {
        marginTop:-22,
        fontSize:35,
        marginLeft:'auto',
        backgroundColor: '',
    },
    titulo:{
        marginTop:18,
        fontFamily:'Prompt',
        marginHorizontal:18,
        fontSize:28,
    },
    tituloDos:{
        marginTop:-8,
        fontFamily:'Prompt',
        marginHorizontal:8,
        fontSize:28,
    }
});