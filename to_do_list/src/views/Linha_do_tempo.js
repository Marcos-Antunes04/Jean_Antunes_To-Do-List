import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert, Modal, Pressable } from 'react-native'




const Linha = (props) => {

  return (
    <ScrollView style={{flex:1, backgroundColor:'#e8e6e6'}}>
     
    </ScrollView>
  )
}

export default Linha

const styles = StyleSheet.create({
  topo:{
    height:200,
    backgroundColor:'#e16400',
    borderBottomLeftRadius:300,
    borderBottomRightRadius:250,
    flex:1
  },
  input:{
    backgroundColor: 'white',
    marginLeft:50,
    marginTop:100,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    height:28,
    paddingTop:4,
    paddingLeft:8,
    flex:5
  },
  input2:{
    marginRight:50,
    marginTop:100,
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
    height:28,
    paddingTop:4,
    paddingLeft:8,
    flex:1,
    backgroundColor:'black'
  },
  scan:{
    flexDirection:'row',
    paddingLeft:30,
    flex:1,
    alignItems: 'center',
    alignContent:'center',
    height:150,
    width:'90%',
    borderRadius:30,
    backgroundColor:'white',
    alignSelf:'center',
    zIndex:1,
    shadowColor: '#a1a1a1',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.7,
    elevation: 1
  },
  mapButton:{
    marginTop:15,
    marginLeft:'35%',   
    flex:1
  },
  texto:{
    alignSelf:'center',
    marginTop:160,
    textAlign: 'center',
    fontSize:22,
    flex:1
  },
  textoScan:{
    padding:20,
    textAlign:'center'
  },
  botoes:{
    flex:1,
    marginTop:25,
    height:90,
    justifyContent:'space-evenly',
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 75,
    justifyContent:'center'
  },
  modalView: {
    height:'80%',
    width:'95%',
    backgroundColor: "white",
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    width:'20%',
    backgroundColor: "#e16400",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});