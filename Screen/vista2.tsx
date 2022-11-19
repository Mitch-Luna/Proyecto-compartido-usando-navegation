import { StyleSheet, Text, View, Image,ScrollView,StatusBar } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } 
from '@expo/vector-icons';
import Cabecera from '../Componentes/cabezera';
import Video from '../Componentes/videosNurian';

export default function App() {
  return (
    <ScrollView>
      <StatusBar backgroundColor={"white"} />
      <View style={styles.container}>
        <Cabecera/>
        <ScrollView
            showsHorizontalScrollIndicator={false}
          >
            <Video
              imagen={require('../img/tostada.jpg')}
              cantidad={'5,0'}
              imagenDos={require('../img/tostada.jpg')}
              textDos={' Como hacer una totada'}
              nombrePersona={'By Roberto Anny'}
            />
            <Video
              imagen={require('../img/sushi.webp')}
              cantidad={'4,5'}
              imagenDos={require('../img/tostada.jpg')}
              textDos={' How to make sushi at home'}
              nombrePersona={'By Niki Samantha'}
            />
            <Video
              imagen={require('../img/serial.jpg')}
              cantidad={'4,9'}
              imagenDos={require('../img/tostada.jpg')}
              textDos={' Easy oatmeal recipe'}
              nombrePersona={'By James wolden'}
            />
          </ScrollView>
    
    </View>

    </ScrollView>
)}
const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: 'white',  
  },
  
  cuadrovideo: {
    backgroundColor:"white",
    width:125,
    height:35,
    top:-450,
    right:90,
    borderRadius:10,
    color:"white",
  },
  textovideo:{
    top:8,
    right:-40,
    color:"white",
  },
  textorecipe: {
    color:"black",
    fontSize:20,
    top:-485,
    right:-70,
  },

  image: {
    height: 200,
    width: 320,
    top: 130,
    borderRadius: 20,
    position: 'absolute',
},
texttostada: {
  top: -265,
  right:-30,
  fontSize: 15,
  fontWeight: "bold",
  position: 'absolute',
},
ICON1: {
  top: -260,
  right:-140,
},
icont: {
backgroundColor:"black",
opacity:0.5,
height: 40,
width: 40,
borderRadius:40,
top:210,
right:160,
position: "absolute",
},
icont1: {
  top:218,
  right:170,
position: "absolute",
},
icont2: {
backgroundColor:"black",
opacity:0.6,
top:145,
right:280,
height: 20,
width: 50,
borderRadius:10,
color:"white",
position: "absolute",
},
icont3: {
  backgroundColor:"white",
  height: 35,
  width: 35,
  top:140,
  right:25,
  borderRadius:20,
  position: "absolute",
},
icont4: {
top:145,
right:36,
position: "absolute",
},
icont5: {
  backgroundColor:"black",
  opacity:0.6,
  height:30,
  width:50,
  top:-340,
  right:-130,
  borderRadius:10,
  fontWeight: "bold",
  color:"white",
},
img: {
height:35,
  width:35,
  top: -290,
  right:115,
  borderRadius:30,
  position: 'absolute',
},
texticono1:{
height:30,
  width:130,
  top: -282,
  right:-30,
position: 'absolute',
},

image2: {
  height: 200,
  width: 320,
  top: 420,
  borderRadius: 20,
  position: 'absolute',
},
textsushi: {
  top: -20,
  right:-60,
  fontSize: 15,
  fontWeight: "bold",
  position:"absolute"
},
ICON2: {
  height: 30,
  width: 30,
  top: -25,
  right:-160,
  position:"absolute"
},
icon2: {
  backgroundColor:"black",
  opacity:0.4,
  height: 40,
  width: 40,
  borderRadius:40,
  top:500,
  right:160,
  position: "absolute",
  },
  icons1: {
    top:509,
    right:170,
  position: "absolute",
  },
  icons2: {
  backgroundColor:"black",
  opacity:0.6,
  top:430,
  right:280,
  height: 20,
  width: 50,
  borderRadius:10,
  color:"white",
  position: "absolute",
  },
  icons3: {
    backgroundColor:"white",
    height: 35,
    width: 35,
    top:430,
    right:25,
    borderRadius:20,
    position: "absolute",
  },
  icons4: {
  top:435,
  right:36,
  position: "absolute",
  },
  icons5: {
    backgroundColor:"black",
    opacity:0.6,
    height:30,
    width:50,
    top:575,
    right:25,
    borderRadius:10,
    color:"white",
    fontWeight: "bold",
    position:"absolute",
  },
  img1: {
  height:35,
  width:35,
  top: -5,
  right:120,
  borderRadius:30,
  position: 'absolute',
  },
  texticono2:{
  height:30,
  width:130,
  top:5,
  right:-30,
  borderRadius:0,
  position: 'absolute',
  },

image3: {
  height: 200,
  width: 320,
  top: 700,
  borderRadius: 20,
  position: 'absolute',
},
textserial: {
  top: 255,
  right:-10,
  fontSize: 15,
  fontWeight: "bold",
  position:"absolute"
},
ICON3: {
  height: 30,
  width: 30,
  top: 255,
  right:-160,
  position:"absolute"
},
icon3: {
  backgroundColor:"black",
  opacity:0.6,
  height: 40,
  width: 40,
  borderRadius:40,
  top:775,
  right:160,
  position: "absolute",
  },
  iconc1: {
    top:785,
    right:170,
  position: "absolute",
  },
  iconc2: {
  backgroundColor:"black",
  opacity:0.6,
  top:710,
  right:280,
  height: 20,
  width: 50,
  borderRadius:10,
  color:"white",
  position: "absolute",
  },
  iconc3: {
    backgroundColor:"white",
    height: 35,
    width: 35,
    top:710,
    right:25,
    borderRadius:20,
    position: "absolute",
  },
  iconc4: {
  top:715,
  right:36,
  position: "absolute",
  },
  iconc5: {
    backgroundColor:"black",
    opacity:0.6,
    height:30,
    width:50,
    top:855,
    right:25,
    borderRadius:10,
    color:"white",
    fontWeight: "bold",
    position:"absolute",
  },
  img3: {
  height:35,
  width:35,
  top: 275,
  right:120,
  borderRadius:30,
  position: 'absolute',
},
Texticono3:{
height:30,
width:130,
top:285,
right:-30,
borderRadius:0,
position: 'absolute',
},



});

