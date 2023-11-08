import React , { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function Login(props){
    const[cliente,setCliente] = useState({ClienteCPF: "",
    ClienteNome: "",
    ClienteSexo: "",
    ClienteDataNascimento: "",
    ClienteEnderecoResidencia: "",
    Classificacao1: "string",
    Classificacao2: "string"})
    
    
    return (
    <View style={styles.tela}>
       <View style={{backgroundColor:'#4169E1'}}><Text style={styles.bemVindo}>Vamos começar!</Text></View>
       
       <View style={styles.borderradiustop}>
            <View style={styles.container}>
                <Text style={[styles.title, styles.titleTop]}>Escolha um nome:</Text>
                
                <TextInput
                    placeholder='nome'
                    value={cliente.ClienteNome}
                    onChangeText={(newClienteNome) => setCliente({ ...cliente, ClienteNome: newClienteNome })}
                    style={styles.input}
                />

                <Text style={styles.title}>Digite o seu CPF(somente os números):</Text>
                <TextInput
                    placeholder='CPF'
                    value={cliente.ClienteCPF}
                    onChangeText={newClienteCPF=>setCliente({ ...cliente, ClienteCPF: newClienteCPF })}
                    style={styles.input}
                    secureTextEntry={false}
                />

                <Text style={styles.title}>Sexo:</Text>
                <TextInput
                    placeholder='masculino/feminino'
                    value={cliente.ClienteSexo}
                    onChangeText={newClienteSexo=>setCliente({ ...cliente, ClienteSexo: newClienteSexo })}
                    style={styles.input}
                    secureTextEntry={false}
                />

                <Text style={styles.title}>Digite o seu endereço:</Text>
                <TextInput
                    placeholder='endereço'
                    value={cliente.ClienteEnderecoResidencia}
                    onChangeText={newClienteEndereco=>setCliente({ ...cliente, ClienteEnderecoResidencia: newClienteEndereco })}
                    style={styles.input}
                    secureTextEntry={false}
                />

                <Text style={styles.title}>Digite sua data de nascimento:</Text>
                <TextInput
                    placeholder='DD/MM/AAAA'
                    value={cliente.ClienteDataNascimento}
                    onChangeText={newClienteData=>setCliente({ ...cliente, ClienteDataNascimento: newClienteData })}
                    style={styles.input}
                    secureTextEntry={false}
                />

                {console.warn(cliente)}

                <TouchableOpacity style={styles.buttonLogin}
                    onPress={()=>props.navigation.push('Login'
                    , {
                       numero: parseInt(Math.random()*100)
                   })}
                >
                    <Text style={styles.buttonLoginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={{width:100}}></View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginLeft: '7%',
        marginRight: '7%',
    },
    title:{
        fontSize:20,
        marginTop:20
    },
    input:{
        borderBottomWidth:1,
        height:35,
        fontSize:16,
        marginBottom:12
    },
    tela:{
        flex:1,
        backgroundColor:'#4169E1'
    },
    buttonLogin:{
       backgroundColor:'#4169E1',
       borderRadius:4,
       paddingVertical:10,
       marginTop:25,
       justifyContent:'center',
       alignItems:'center'
    },
    buttonLoginText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonCadastro:{
        justifyContent:'center',
        alignItems:'center',
        color: '#a1a1a1'
    },
    cadastro:{
        marginTop:20,
        alignContent:'center',
        alignSelf:'center',
        flexDirection:'row',
    },
    textCadastro:{
        color:'#a1a1a1',
    },
    textCadastroButton:{
        color:'#a1a1a1',
        fontWeight:'800'
    },
    bemVindo:{
        marginTop:40,
        marginBottom:40,
        textAlign:'center',
        fontSize: 35,
        color: 'white',
        fontWeight:'400'
    },
    titleTop:{
        marginTop:50
    },
    borderradiustop:{
        backgroundColor:'white',
        flex:1,
        borderTopRightRadius:25,
        borderTopLeftRadius:25
    }
});