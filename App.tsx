import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Cabecera from './Componentes/Cabecera';
import Videos from './Componentes/videos';
import Navegation from './Navegation';
import Botones from './Componentes/botones';
import Platillos from './Componentes/platillos';
import Contenedorcito from './Componentes/contenedorcito';
import PlatoReciente from './Componentes/platoReciente';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"white"} />
      <ScrollView>
        <View style={styles.container}>

          <Cabecera />
          <Contenedorcito
            text={' En tendecia 🔥'}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Videos
              imagen={require('./assets/Images/primero.jpeg')}
              cantidad={'4,5'}
              imagenDos={require('./assets/Images/muchacha.jpeg')}
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
              imagen={require('./assets/Images/segundo.png')}
              textUno={'Pepper sweetcorn ramen'}
              textDos={'10 Mins'}
            />
            <Platillos
              imagen={require('./assets/Images/segundo.png')}
              textUno={'Chaddar cheese \n and shell salad'}
              textDos={'20 Mins'}
            />
            <Platillos
              imagen={require('./assets/Images/segundo.png')}
              textUno={'Pepper requeichon \n comidechon'}
              textDos={'30 Mins'}
            />

          </ScrollView>
          <Contenedorcito
            text={' Recientes 🔥'}
          />
          <PlatoReciente
          
          />
          <Navegation/>

          

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

