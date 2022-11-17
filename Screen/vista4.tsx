import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cabecera from '../componentes/cabecera';
import Video from '../componentes/video';
import Items from '../componentes/items';
import Perfil from '../componentes/perfil';
import Ingredientes from '../componentes/ingredientes';

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