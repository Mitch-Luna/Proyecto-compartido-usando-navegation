import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'; 

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
           source={require('../Image/CHICA.jpg')}
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

          <View >
          <Image style={styles.image}
           source={require('../Image/CHICA.jpg')}
           />
           <View>
             <Text style={styles.textpan}>How to make Italiam</Text>
             <Text style={styles.textpan2}>Spaghetti to home</Text>
             <Text style={styles.textpan3}>12 Ingredients | 40 Min</Text>
           </View>
          
            
          <Image style={styles.image2}
           source={require('../Image/file.jpg')}
           />
           <View>
            <Text style={styles.textsim}>Simple chicken meal</Text>
             <Text style={styles.textsim2}>prep dishes</Text>
             <Text style={styles.textsim3}>12 Ingredients | 40 Min</Text>
           </View>

          <Image style={styles.image3}
           source={require('../Image/CHICA.jpg')}/>
           <View>

           </View>
            <Text style={styles.textha}>Hapanese fried rice</Text>
             <Text style={styles.textha2}>12 Ingredients | 40 Min</Text>
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
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:100,
  },

  punto:{
    left:-15
  },

  container2:{
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
    height:45,
    width:'100%',
    flexDirection:'row',
    
  },

 button2:{
  top:10,
  marginHorizontal:32,
  width:75,
  height:45,
  fontSize:15,
  color:"red",
  padding:10,
  paddingLeft:30,

},
 button3:{
  top:10,
  marginHorizontal:32,
  width:196,
  height:45,
  fontSize:17,
  padding:10,
  paddingLeft:65,
  color:"white",
  backgroundColor:'red',
  borderRadius:13, 
},

contenedor5:{
  justifyContent:'space-between',
   flexDirection:'row',
   alignItems:'center'
 },

 punto2:{
left:280,
top:35,
 },

image:{
  height:200,
  width:345,
  top:20,
  right:-20,
  borderRadius:12,
},

textpan: {
  fontSize:15,
    left:40,
    top:-60,
    color:'white'
    
},

textpan2:{
  fontSize:15,
    left:40,
    top:-60,
    color:'white'
},

textpan3:{
  fontSize:10,
  left:40,
  top:-55,
  color:'white'
},

icont:{

},

icont2:{

},

icont3:{

},

 image2:{
    height:200,
    width:345,
    top:-30,
    right:-20,
    borderRadius:12,
},

textsim:{
  fontSize:15,
  left:40,
  top:-120,
  color:'white'
},

textsim2:{
  fontSize:15,
    left:40,
    top:-120,
    color:'white'
},

textsim3:{
  fontSize:10,
  left:40,
  top:-110,
  color:'white'
},

image3:{
  height:200,
  width:345,
  top:-80,
  right:-20,
  borderRadius:12,
},

textha:{
  fontSize:15,
  left:40,
  top:-135,
  color:'white'
},

textha2:{
  fontSize:10,
  left:40,
  top:-130,
  color:'white'
},

   

  



});

