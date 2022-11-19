import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cabecera from '../Componentes/header';
import Video from '../Componentes/video';
import Items from '../Componentes/items';
import Perfil from '../Componentes/perfil';
import Ingredientes from '../Componentes/ingredientes';

export default function Vista4() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} />
      <ScrollView>
        <Cabecera/>
        <Video/>
        <Perfil/>
        <Ingredientes/>

        <Items
        imagen={{uri:'https://img.icons8.com/color-glass/344/bread-and-rye.png'}}
        nombre={'Bread'}
        />
        <Items
        imagen={{uri:'https://cdn-icons-png.flaticon.com/512/5565/5565800.png'}}
        nombre={'Bread'}
        />
        <Items
        imagen={{uri:'https://img.icons8.com/color-glass/344/bread-and-rye.png'}}
        nombre={'Bread'}
        />
        <Items
        imagen={{uri:'https://cdn-icons-png.flaticon.com/512/5565/5565800.png'}}
        nombre={'Bread'}
        />
        <Items
        imagen={{uri:'https://cdn-icons-png.flaticon.com/512/5565/5565800.png'}}
        nombre={'Bread'}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});