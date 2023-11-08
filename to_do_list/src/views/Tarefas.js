/*import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert, Modal, Pressable } from 'react-native'




const Tarefas = (props) => {

  return (
    <ScrollView style={{flex:1, backgroundColor:'red'}}>
     <Text>tarefas</Text>
    </ScrollView>
  )
}

export default Tarefas

const styles = StyleSheet.create();*/

import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity,Image, TextInput,FlatList} from 'react-native'
//import json from '../api/QR.json'

const Login = (props) => {
    [nome,setNome]=useState(null);
    [pokemon,setPokemon]=useState(null);
    [image,setImage]=useState(null);
    [price,setPrice]=useState(null);
    
    
    const[produto,setProduto]=useState('');
    const[tarefas,setTarefas]=useState([{tarefa:'tarefa',id:0,cont:0,pok:'',pr:0,im:image}])
    const[tarefaAtual,setTarefaAtual]=useState('');
    const[hasChange,setHasChange]=useState(false);
    function addTarefa() {
      let id = 0;
      let cont = 0;
      let pr = 0;
      let im = image;
    
      if (tarefas.length > 0) {
        id = tarefas[tarefas.length - 1].id + 1;
      }
    
      let tarefa = {
        id: id,
        tarefa: tarefaAtual,
        cont: cont,
        pok: pokemon, // Accessing the `pokemon` variable from state
        pr: pr,
        im: im,
      };
    
      setTarefas([...tarefas, tarefa]);
    }
    
    function delTarefa(id){
        alert('tarefa com id '+id+' excluida');
        let newtarefas=tarefas.filter(function(val){
        
            return val.id !=id;
        })
        setTarefas(newtarefas);
    }
     const inc=(val)=>{
        
       val.cont++;
        setHasChange(!hasChange)

         }
     const dec=(val)=>{
        if(val.cont>0){
            val.cont--;
            setHasChange(!hasChange)
        }
              }
    // const dec=(cont)=>{
    //     let newtarefas=tarefas.filter(function(val){
    //         if(val.cont>0){return val.cont=cont-1;}
                
    //     })
    //     setTarefas(newtarefas);
    //     }
    // const[numero, setNumero]=useState(0)
    // const inc=()=>{
    //     setTarefas(tarefas[tarefas.length-1].cont=tarefas[tarefas.length-1].cont+1);
    //     let tarefa ={id:id,tarefa:tarefaAtual,cont:cont}
    // }
    // const dec=()=>{if(tarefas[tarefas.length-1].cont>0){setTarefas(tarefas[tarefas.length-1].cont-1)}
    // }

    return(
        
        <ScrollView style={styles.tela}>
        {console.warn(produto)}
          <View style={{backgroundColor:'#4169E1'}}>
            <Text style={styles.bemVindo}>Tarefas</Text>
            <Text style={styles.subtitulo}>Melhor organização sem esquecer nada!</Text>            
          </View>
        <View style={styles.borderradiustop}>
        <View style={styles.container}>
 



        <View style={{   marginLeft: '7%',
        marginRight: '7%'}}>
        
          
             
    </View>

        {






//                
            tarefas.map(function(val){
                return (
                <View>

                  {/* <View style={styles.botoes}>
                     <TouchableOpacity 
                      onPress={()=>{inc(val);
                      if(hasChange){console.log(0)}}}
                      style={style=styles.buttonAdd}
                     ><Text style={styles.texto}>+</Text>
                     </TouchableOpacity>
            
                     <TouchableOpacity 
                     onPress={()=>{dec(val);
                     if(hasChange){console.log(0)}}}
                     style={style=styles.buttonAdd}
                     ><Text style={styles.texto}>-</Text>
                     </TouchableOpacity>
                  </View> */}
                  

                  <View style={styles.produto}>
                
                    {/* {val.im &&(
                    <View style={{flexDirection:'row'}}>
                    <Image style={{width:50,height:50}} source={{uri:val.im}}></Image>
                    <Text>{val.pok}</Text>
                    <Text>{val.pr}</Text>
                    </View>
   )} */}
                    {/* <Text>Produto e preço no mercado A</Text>
                    <Text>Produto e preço no mercado B</Text>
                    <Text>Produto e preço no mercado C</Text> */}
                    <View style={styles.l3}>
                      <TouchableOpacity 
                       onPress={()=> delTarefa(val.id)}
                       ><View style={{width:20,height:20,borderRadius:10,backgroundColor:'red'}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'white'}}>X</Text></View>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.produto1}>
                      <View style={styles.l1}>
                        <Text style={{textAlign:'center',
                          color:'white',fontSize:20}}>{pokemon}</Text>

                      </View>
                      <View style={styles.l2}>
                        <TouchableOpacity 
                         onPress={()=>{dec(val);
                         if(hasChange){console.log(0)}}}
                         style={style=styles.buttonAdd}
                         ><View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{
                         textAlign:'center',
                         color:'white',
                         }}>-</Text></View>
                        </TouchableOpacity>
                      <View>
                        <View style={styles.contador}>
                        <Text style={styles.texto}>{val?.cont}</Text>
                        </View> 
                       </View>

                      <TouchableOpacity 
                       onPress={()=>{inc(val);
                       if(hasChange){console.log(0)}}}
                       style={style=styles.buttonAdd}
                       ><View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{
                        textAlign:'center',
                        color:'white',
                        }}>+</Text></View>
                      </TouchableOpacity>
                    </View>
                    </View>
                  </View>

                  {/* <View style={{height:50}}>
                    <Button  title='add' 
                     onPress={()=> addTarefa()}
                     ><Text style={styles.buttonLoginText}></Text>
                    </Button>

                    <Button  title='remove' 
                     onPress={()=> delTarefa(val.id)}
                     ><Text style={styles.buttonLoginText}></Text>
                    </Button>
                  </View> */}

                  {/* <View style={styles.contador}>
                    <Text style={styles.texto}>{val?.cont}</Text>
                  </View> */}
                </View>
                )
            })
        }








        
        {props.voltar
        ?  <Button
            title='voltar'
            onPress={()=>{props.navigation.goBack()}} 
            />
            :false
        }
    </View>
      
    </View>
    {'TelaD'
             ?  <TouchableOpacity
            style={{
                height:40,backgroundColor:'#4f4847',borderRadius:10, 
            }}
             onPress={addTarefa}
             >
                <View style={{justifyContent:'center', marginLeft: '7%',
        marginRight: '7%',alignItems:'center'}}>  
                    <Text style={{ textAlign:'center',color:'white',fontSize:25}}>Adicionar!</Text>
                </View>
                </TouchableOpacity>
             :false
             }
             {/* <Button  title='add'
               // onPress={()=>}
                ><Text></Text>
             </Button> */}
    </ScrollView>
    
        
        )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        // marginLeft: '7%',
        // marginRight: '7%',
    },
    tela:{
        flex:5,
        backgroundColor:'#4169E1',

    },
    borderradiustop:{
        backgroundColor:'white',
        flex:1,
        borderTopRightRadius:25,
        borderTopLeftRadius:25
    },
    bemVindo:{
        marginTop:40,
        textAlign:'center',
        fontSize: 35,
        color: 'white',
        fontWeight:'600'
       },
    subtitulo:{
        marginTop:20,
        marginBottom:40,
        textAlign:'center',
        fontSize: 15,
        color: 'white',
        fontWeight:'400'
    },
    buttonComprar:{
        backgroundColor:'#e16400',
        borderRadius:4,
        height:25,
        justifyContent:'center',
        alignItems:'center'
     },
     buttonComprarText:{
         color:'white',
         fontSize:18,
         fontWeight:'bold'
      },
      preço:{
        flex:1,
        height:20,
        backgroundColor:'#084552',
        marginTop:25,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
   },
      produto:{
        backgroundColor:'#e16400',
        borderTopLeftRadius:45,
        borderBottomLeftRadius:45,
        // paddingVertical:10,
        // marginTop:25,
        height:90,
        flex:1,
        flexDirection:'row',
        marginBottom:5,  
        marginLeft:'20%',

     },
     produto1:{
        flex:13,
        backgroundColor:'#e16400',
        borderTopLeftRadius:45,
        borderBottomLeftRadius:45,
        // paddingVertical:10,
        // marginTop:25,
        height:90,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:5,  
     },
     
     botoes:{
        flex:1,
        marginTop:25,
        height:90,
        justifyContent:'space-evenly',

     },
     botao:{
        flex:1,
        marginTop:80,
        borderRadius:10,
        

     },
     contador:{
        backgroundColor:'white',
        height:40,
        width:40,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
     },
     texto:{
        textAlign:'center',
        color:'black',
        },
    salvar:{
        borderRadius:10,
        backgroundColor:'#084552',
        height:40,
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:5,
        marginLeft:'7%',
        marginRight:'7%'
    },
    buttonAdd:{
        width:20,
        height:40,
        backgroundColor:'#4f4847'
    },
   l1:{
        flex:3,
   },
   l2:{
        flex:1,
        flexDirection:'row',
       
   },
   l3:{
        flex:1,
   }
     
})
