import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import CabeceraDos from '../Componentes/CabeceraDos';
import Videos from '../Componentes/videosNurian';
import Navegation from '../Navegation';
import Botones from '../Componentes/botones';
import Platillos from '../Componentes/platillos';
import Contenedorcito from '../Componentes/contenedorcito';
import PlatoReciente from '../Componentes/platoReciente';
import Perfiles from '../Componentes/perfiles';

export default function Vista1() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"white"} />
      <ScrollView>
        <View style={styles.container}>

          <CabeceraDos />
          <Contenedorcito
            text={' En tendecia 🔥'}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Videos
              imagen={require('../assets/Images/primero.jpeg')}
              cantidad={'4,5'}
              imagenDos={require('../assets/Images/muchacha.jpeg')}
              textDos={' How to make sushi at home'}
              nombrePersona={'By Niki Samantha'}
            />
            <Videos
              imagen={{ uri: 'https://us.123rf.com/450wm/yanadhorn/yanadhorn1710/yanadhorn171000790/87515847-dos-platos-blancos-vac%C3%ADos-con-cubiertos-en-la-mesa-de-madera-vieja-concepto-de-la-tienda-y-la-vajill.jpg?ver=6' }}
              cantidad={'4,7'}
              imagenDos={{ uri: 'https://thumbs.dreamstime.com/b/hombre-joven-atractivo-elegante-con-la-camisa-blanca-53049570.jpg' }}
              textDos={'your plate awaits you '}
              nombrePersona={' By Jhon Adrews '}

            />
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Botones />
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Platillos
              imagen={require('../assets/Images/segundo.png')}
              textUno={'Pepper sweetcorn ramen'}
              textDos={'10 Mins'}
            />
            <Platillos
              imagen={require('../assets/Images/plato.png')}
              textUno={'Chaddar cheese \n and shell salad'}
              textDos={'20 Mins'}
            />
            <Platillos
              imagen={require('../assets/Images/otroPlato.png')}
              textUno={'Pepper requeichon \n comidechon'}
              textDos={'30 Mins'}
            />

          </ScrollView>
          <Contenedorcito
            text={' Recientes 🔥'}
          />
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          >
          <PlatoReciente
          imagen={require('../assets/Images/sandwit.jpeg')}
          textUno={'Indonesian \n chicken burger'}
          textDos={'By Adrianna Curl'}
          />
          <PlatoReciente
          imagen={require('../assets/Images/tres.jpeg')}
          textUno={'Home made \n cute pancake'}
          textDos={'By Jame Wolden'}
          />
          <PlatoReciente
          imagen={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmDgNR7fAPe4jRyb8RVncx2LfdgvwmiRNDg&usqp=CAU'}}
          textUno={'How to \n delicious '}
          textDos={'By Adrianna Curl'}
          />
          </ScrollView> 
          <Contenedorcito
            text={'Creadores populares'}
          /> 
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          >

          <Perfiles
          imagen={{uri:'https://media.gq.com.mx/photos/6168a86329f5200b0a38f203/master/w_2000,h_3000,c_limit/cual-es-el-significado-de-vestir-siempre-de-color-negro-psicologia-hombre-traje.jpg'}}
          text={'  Troyan \n  Smitch'}
          />   

          <Perfiles
          imagen={{uri:'https://media.gettyimages.com/photos/smiling-teenager-picture-id583862104?s=612x612'}}
          text={'  Ijames \n  Wolden'}
          /> 
          <Perfiles
          imagen={require('../assets/Images/muchacha.jpeg')}
          text={'      Niki \n   Samantha'}
          /> 
          <Perfiles
          imagen={{uri:'https://media.istockphoto.com/photos/beautiful-girl-in-a-white-tshirt-and-jeans-on-a-gray-background-picture-id1216555577?s=612x612'}}
          text={' Roberta \n    Anny'}
          /> 
          </ScrollView>  
        </View>
      </ScrollView>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
