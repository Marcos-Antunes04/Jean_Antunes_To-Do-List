import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Linha_do_tempo from '../views/Linha_do_tempo'
import Tarefas from '../views/Tarefas'
import { MaterialCommunityIcons } from '@expo/vector-icons';




const Tab=createBottomTabNavigator();

const Routes = (props) => {
  // const {nome} = props.route?.params
  return (
    <Tab.Navigator 
         tabBarOptions={{
          showLabel:false,
           style:{
           backgroundcolor:'black',
           height:500,
           elevation:0

          }
    }} 
    initialRouteName='Tarefas'
    screenOptions={{headerShown: false}}    
    >

      <Tab.Screen name='Tarefas' component={Tarefas} options={{tabBarIcon:({focused})=>(
        <MaterialCommunityIcons name="check-all" size={30} color="black" />
      )}} />
      <Tab.Screen name='Linha_do_tempo' component={Linha_do_tempo} options={{tabBarIcon:({focused})=>(
        <MaterialCommunityIcons name="calendar-month" size={30} color="black" />
      )}} />
    </Tab.Navigator>

    

  )
}

export default Routes

const styles = StyleSheet.create({})