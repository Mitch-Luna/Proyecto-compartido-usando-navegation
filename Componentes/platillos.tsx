import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props{
    imagen: {},
    textUno:string,
    textDos:string
}
export default function Platillos({imagen, textUno,textDos} :Props) {
    return (
        <View style={styles.container}>
    
           <View style={styles.contenedorletras}>
                    <Image
                        style={styles.imagenUno}
                        source={imagen}
                    />
                    <Text style={styles.letras}> {textUno} </Text>
                    <Text style={styles.letraTime}>Time</Text>
                    <Text style={styles.cantidadTime}> {textDos} </Text>
                    <MaterialCommunityIcons style={styles.icono} name="bookmark-minus-outline" size={25} color="black" />

                    </View>

            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
        marginTop: 34,
        width: '100%',
    },
    contenedorletras: {
        borderRadius:24,
        marginTop:50,
        alignItems: 'center',
        marginLeft: 22,
        backgroundColor: 'rgb(223, 223, 223)',
        display: 'flex',
        width: 160,
        height: 220,
    },
    letras: {
        marginTop:12,
        fontSize: 17,
    },
    imagenUno: {
        marginTop:-53,
        alignSelf:'center',
        width: 134,
        height: 120,
    },
    letraTime:{
        color:'gray',
        marginHorizontal:12,
        marginTop:28,
        marginRight:'auto',
        fontSize:15
    },
    cantidadTime:{
        color:'black',
        marginHorizontal:12,
        marginTop:8,
        marginRight:'auto',
        fontSize:15
    },
    icono:{
        marginHorizontal:13,
        marginLeft:'auto',
        marginTop:-24,
        backgroundColor:'white',
        borderRadius:23,
    }
});