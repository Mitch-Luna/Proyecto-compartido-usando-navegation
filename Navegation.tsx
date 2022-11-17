import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Home from "./screen/home";
import HomeDos from "./screen/homedos";
import Vista1 from "./screen/Vista1";
import vista4 from "./screen/vista4";
import Vista4 from "./screen/vista4";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Vista1"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarItemStyle: { marginTop:-92, height:227 },
      }}
    >
      <Tab.Screen name="Vista1 " component={Vista1}
      options={{
        tabBarLabel:'',
        tabBarIcon:({color, size}) =>(
          <AntDesign name="home" size={26} color={color} />
        ),
        headerShown:false,
      }}
      />
      <Tab.Screen name="vista4 " component={vista4} 
      options={{
        tabBarLabel:'',
        tabBarIcon:({color, size}) =>(
          <MaterialCommunityIcons name="bookmark-minus-outline" size={26} color={color} />
        ),
        headerShown:false,
      }}
      />
      <Tab.Screen name="Boton " component={Home} 
      options={{
        tabBarLabel:'',
        tabBarIcon:({color, size}) =>(
          <AntDesign name="pluscircle" size={64} color="rgb(191, 17, 17)" />
        ),
        headerShown:false,
      }}
      />
      <Tab.Screen name="HomeDos " component={HomeDos}   
      options={{
        tabBarLabel:'',
        tabBarIcon:({color, size}) =>(
          <Ionicons name="ios-notifications-outline" size={24} color={color} />
        ),
        headerShown:false,
      }}/>
      <Tab.Screen name="HomeTres " component={HomeDos} 
      options={{
        tabBarLabel:'',
        tabBarIcon:({color, size}) =>(
          <FontAwesome5 name="user" size={24} color={color} />
        ),
        headerShown:false,
      }}/>
      
      
     
    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}

