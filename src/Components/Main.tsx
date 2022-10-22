

import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const Main = ()=>{
  return (

 <ScrollView>
      <View style={styles.container}>
         <Text style={styles.perfil}>Mi perfil</Text>

          < View style={styles.punto}>
             <MaterialCommunityIcons name="dots-horizontal" size={28} color="black"/>
          </View>
     
        </View>

        <View style={styles.container2}>
           <Image style={styles.img}
           source={require('../../Image/CHICA.jpg')}
         />
         <TouchableOpacity>
             <Text style={styles.button}>
                 Edit Profaile
             </Text>
         </TouchableOpacity>

        </View>

        <View>
          <Text style={styles.text}>
             Michell Luna
          </Text>
        </View>

        <View>
          <Text style={styles.text1}>
              Hello wordl I'm Michell Luna, I'm from 
          </Text>
          <Text style={styles.text2}>
              Nicaragua, I love cooking so much!
          </Text>
        </View>

        <View style={styles.container3}>
           <View>
              <Text style={styles.recipe}>
                 Recipe
              </Text>
              <Text style={styles.numero}>
                   3
              </Text>
            </View>

           <View>
               <Text style={styles.recipe}>
                   Videos
                </Text>
               <Text style={styles.numero}>
                  13
               </Text>
            </View>

            <View>
               <Text style={styles.recipe}>
                  Followers
                </Text>
               <Text style={styles.numero}>
                  14k
               </Text>
            </View>

              <View>
                 <Text style={styles.recipe}>
                       Folowign
                    </Text>
                  <Text style={styles.numero}>
                       120
                    </Text>
            </View>
        
        </View>

        <View style={styles.contenedor4}>
        <TouchableOpacity>
             <Text style={styles.button2}>
                 Video
             </Text>
         </TouchableOpacity>

         <TouchableOpacity>
             <Text style={styles.button3}>
                 Recipe
             </Text>
         </TouchableOpacity>
         </View>

   </ScrollView>


    


  )
}
export default Main;
const styles = StyleSheet.create({
  perfil:{
    margin:20,
    fontSize:30,
    fontWeight:'bold'
  },

  container:{
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  punto:{
    left:-15
  },

  container2:{
    backgroundColor:'green',
   justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },

  img:{
    height:100,
    width:100,
    borderRadius:50,
    margin:15
  },

  button
  :{
    fontSize:15,
    color:"red",
    margin:30,
    padding:5,
    paddingHorizontal:10,
    paddingVertical:10,
    borderWidth:2,
    borderRadius:8,
    backgroundColor:'white',
    fontWeight:"bold"
  },

  text:{
    fontSize:20,
    fontWeight:'bold',
    left:20
  },

  text1:{
    fontSize:15,
    left:20,
    marginTop:15,
    color:'gray'
  },

  text2:{
    fontSize:15,
    left:20,
    color:'gray'
  },

  container3:{
    backgroundColor:'pink',
    borderBottomWidth:1,
    borderColor:'gray',
    paddingBottom:30,
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-around'
  },

  recipe:{
    color:'gray'
  },

  numero:{
    fontSize:20,
    fontWeight:'bold',
    left:15
  },
  contenedor4:{
    backgroundColor:'pink',
    height:45,
    width:'100%',
    flexDirection:'row',
    
  },

 button2:{
  marginHorizontal:32,
  width:78,
  height:45,
  fontSize:15,
  color:"red",


},
 button3:{
  marginHorizontal:34,
  width:196,
  height:45,
  fontSize:17,
  color:"white",
  backgroundColor:'red',
  borderRadius:13,
  
}, 
   

  




});


