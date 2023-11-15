import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro(props) {
  const [cliente, setCliente] = useState({
    ClienteCPF: '',
    ClienteNome: '',
  });

  useEffect(() => {
    // Carregar dados do cliente do AsyncStorage ao montar o componente
    const loadClienteData = async () => {
      try {
        const storedCliente = await AsyncStorage.getItem('dadosCliente');
        if (storedCliente) {
          const parsedCliente = JSON.parse(storedCliente);
          setCliente(parsedCliente);
        }
      } catch (error) {
        console.error('Error loading cliente data:', error);
      }
    };

    loadClienteData();
  }, []);

  const salvarCadastro = async () => {
    // Validar os dados do cliente, por exemplo, verificar se o CPF tem um formato válido
    if (!cliente.ClienteCPF || !cliente.ClienteNome || cliente.ClienteCPF.length < 6) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    try {
      // Salvar dados do cliente no AsyncStorage
      await AsyncStorage.setItem('dadosCliente', JSON.stringify(cliente));
      alert('Cadastro salvo com sucesso!');
      // Redirecionar para a tela de login
      props.navigation.push('Login');
    } catch (error) {
      console.error('Error saving cliente data:', error);
    }
  };

  return (
    <View style={styles.tela}>
      <View style={{ backgroundColor: '#4169E1' }}>
        <Text style={styles.bemVindo}>Crie uma conta</Text>
      </View>

      <View style={styles.borderradiustop}>
        <View style={styles.container}>
          <Text style={[styles.title, styles.titleTop]}>Escolha um nome:</Text>

          <TextInput
            placeholder="nome"
            value={cliente.ClienteNome}
            onChangeText={(newClienteNome) => setCliente({ ...cliente, ClienteNome: newClienteNome })}
            style={styles.input}
          />

          <Text style={styles.title}>Escolha uma senha (mínimo 6 caracteres):</Text>
          <TextInput
            placeholder="senha"
            value={cliente.ClienteCPF}
            onChangeText={(newClienteCPF) => setCliente({ ...cliente, ClienteCPF: newClienteCPF })}
            style={styles.input}
            secureTextEntry={false}
          />

          <TouchableOpacity style={styles.buttonLogin} onPress={salvarCadastro}>
            <Text style={styles.buttonLoginText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: 100 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: '7%',
    marginRight: '7%',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    height: 35,
    fontSize: 16,
    marginBottom: 12,
  },
  tela: {
    flex: 1,
    backgroundColor: '#4169E1',
  },
  buttonLogin: {
    backgroundColor: '#F2884B',
    borderRadius: 4,
    paddingVertical: 10,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLoginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bemVindo: {
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: '400',
  },
  titleTop: {
    marginTop: 50,
  },
  borderradiustop: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});
