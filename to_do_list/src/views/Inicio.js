import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert, Modal, Pressable } from 'react-native'




const Tarefas = (props) => {

  return (
    <ScrollView style={{flex:1, backgroundColor:'#4169E1'}}>
       <View style={styles.container}>
        <Image
        source={require('../../assets/logo.png')}
        style={styles.imagem}
         />
       </View>

       <View>
          <Text style={styles.bemVindo}>Um jeito prático de organizar e priorizar suas atividades diárias!</Text>
       </View>
      {'Login'
          ?  <TouchableOpacity
              onPress={()=>{props.navigation.push('Login'
               , {
                  numero: parseInt(Math.random()*100)
              })}} 
              style={styles.buttonProsseguir}
              ><Text style={styles.buttonProsseguirText}>ENTRAR</Text></TouchableOpacity>
              /*PASSAR PARAMS DE UMA TELA PRA OUTRA>> props.avançarParams */
              :false
          }
           {'Cadastro'
          ?  <TouchableOpacity
              onPress={()=>{props.navigation.push('Cadastro'
               , {
                  numero: parseInt(Math.random()*100)
              })}} 
              style={styles.buttonProsseguir}
              ><Text style={styles.buttonProsseguirText}>CADASTRAR-SE</Text></TouchableOpacity>
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
        backgroundColor:'#F2884B',
        borderRadius:4,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        
     },
     buttonProsseguirText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
     },
     container: {
      marginTop:50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagem: {
      width: 300,
      height: 300,
      resizeMode: 'cover', // ou 'contain' para ajustar a imagem conforme necessário
    },
    bemVindo:{
      marginTop:40,
      marginBottom:40,
      textAlign:'center',
      fontSize: 35,
      color: 'white',
      fontWeight:'400'
  }

});