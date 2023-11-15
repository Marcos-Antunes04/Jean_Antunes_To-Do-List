import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro'
import Inicio from '../views/Inicio'
import Tarefas from '../views/Tarefas'
import Tab from '../navigation/tab'


const Stack=createNativeStackNavigator()
const st = props => {
  return (
    <Stack.Navigator initialRouteName='Inicio'
    screenOptions={{headerShown: true}}>
            
        <Stack.Screen name='Inicio'
        options={{headerShown: false}}>
             {props => (
            
             <Inicio  {...props} />
             
        )}
        </Stack.Screen>

        <Stack.Screen name='Cadastro'
        options={{title:'Voltar'}}>
             {props => (

              <Cadastro {...props}/>
             
        )}
        </Stack.Screen>

        <Stack.Screen name='Login'
        options={{title:'Voltar'}}>
        {props => (
            
                <Login {...props}/>
           
        )}
        </Stack.Screen>

        <Stack.Screen name='Tarefas'
        options={{title:'Sair'}}>
        {props => (
            
                <Tab {...props}/>
            
        )}
        </Stack.Screen>
        
        
    </Stack.Navigator>
  )
}

export default st

const styles = StyleSheet.create({})