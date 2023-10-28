import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert, Modal, Pressable } from 'react-native'




const Tarefas = (props) => {

  return (
    <ScrollView style={{flex:1, backgroundColor:'orange'}}>
      {'Tarefas'
          ?  <TouchableOpacity
              onPress={()=>{props.navigation.push('Tarefas'
               , {
                  numero: parseInt(Math.random()*100)
              })}} 
              style={styles.buttonProsseguir}
              ><Text style={styles.buttonProsseguirText}>Tarefas</Text></TouchableOpacity>
              /*PASSAR PARAMS DE UMA TELA PRA OUTRA>> props.avançarParams */
              :false
          }
    </ScrollView>
  )
}

export default Tarefas

const styles = StyleSheet.create({
    buttonProsseguir:{
        marginTop:30,
        marginLeft:35,
        marginRight:35,
        backgroundColor:'gray',
        borderRadius:4,
        paddingVertical:10,
        justifyContent:'cent,er',
        alignItems:'center',
        
     },
     buttonProsseguirText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
     },

});