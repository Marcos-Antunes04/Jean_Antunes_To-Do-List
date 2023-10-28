import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Tab from './navigation/tab'
import Stack from './navigation/stack'



export default function App(){
  console.warn('working')
  return (
    <SafeAreaView style= {style.App}>
      <NavigationContainer>
       
       <Stack />
      </NavigationContainer>
    
    </SafeAreaView>
  )
}

const style= StyleSheet.create({
  Text: {
    fontSize: 40,
    backgroundColor: 'red',
    borderRadius:20 ,
    textAlign: 'center'
  },
  App:{
    flex: 1,
    justifyContent: 'center'
    /*flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50*/
  }
})
