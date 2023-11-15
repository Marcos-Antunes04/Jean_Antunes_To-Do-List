import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [u, setU] = useState(false);
  const [i, setI] = useState(false);
  const [tarefas, setTarefas] = useState([{ id: 0, cont: 0, texto: '', u: false, i: false, corTarefa: 'green' }]);
  const [hasChange, setHasChange] = useState(false);

  useEffect(() => {
    const loadTarefas = async () => {
      try {
        const savedTarefas = await AsyncStorage.getItem('tarefas');
        if (savedTarefas) {
          setTarefas(JSON.parse(savedTarefas));
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadTarefas();
  }, []);

  const saveTarefas = async (newTarefas) => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(newTarefas));
      setHasChange(!hasChange);
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const addTarefa = () => {
    let id = 0;
    let cont = 0;
    let u = false;
    let i = false;
    let corTarefa = 'green';

    if (tarefas.length > 0) {
      id = tarefas[tarefas.length - 1].id + 1;
    }

    let tarefa = {
      id: id,
      cont: cont,
      texto: '',
      u: u,
      i: i,
      corTarefa: corTarefa,
    };

    const newTarefas = [...tarefas, tarefa];
    setTarefas(newTarefas);
    saveTarefas(newTarefas);
  };

  const delTarefa = (id) => {
    id_ = id + 1;
    alert('tarefa ' + id_ + ' excluída');
    const newTarefas = tarefas.filter((val) => val.id !== id);
    setTarefas(newTarefas);
    saveTarefas(newTarefas);
  };

  const checku = (val) => {
    const updatedTarefas = tarefas.map((t) => {
      if (t.id === val.id) {
        t.u = !t.u;
        t.corTarefa = getBackgroundColor(t.u, t.i);
      }
      return t;
    });

    setTarefas(updatedTarefas);
    saveTarefas(updatedTarefas);
  };

  const checki = (val) => {
    const updatedTarefas = tarefas.map((t) => {
      if (t.id === val.id) {
        t.i = !t.i;
        t.corTarefa = getBackgroundColor(t.u, t.i);
      }
      return t;
    });

    setTarefas(updatedTarefas);
    saveTarefas(updatedTarefas);
  };

  const getBackgroundColor = (u, i) => {
    if (u && i) {
      return '#F23030'; // (true, true) red
    } else if (u && !i) {
      return '#F2884B'; // (true, false) orange
    } else if (!u && i) {
      return '#F2CB57'; // (false, true) yellow
    } else {
      return '#81D959'; // (false, false) green
    }
  };

  const getButtonColor = (isActive) => {
    return isActive ? '#F2884B' : '#4169E1';
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tela}>
        <View style={{ backgroundColor: '#4169E1' }}>
          <Text style={styles.bemVindo}>Tarefas</Text>
          <Text style={styles.subtitulo}>Melhor organização sem esquecer nada!</Text>
          <Text style={styles.subtitulo}>Pressione o botão "U" se sua tarefa for URGENTE</Text>
          <Text style={styles.subtitulo}>Pressione o botão "I" se sua tarefa for IMPORTANTE</Text>
        </View>

        <View style={styles.borderradiustop}>
          {tarefas.map(function (val) {
            return (
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ marginLeft: '5%', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                  <View style={[styles.botaoUI]}>
                    <TouchableOpacity
                      onPress={() => {
                        checku(val);
                      }}
                      style={[styles.botaoUI, { backgroundColor: getButtonColor(val.u) }]}
                    >
                      <View style={[styles.iconeUI, { backgroundColor: getButtonColor(val.u) }]}>
                        <Text style={{ color: 'white', fontSize: 15 }}>U</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botaoUI}>
                    <TouchableOpacity
                      onPress={() => {
                        checki(val);
                      }}
                      style={[styles.botaoUI, { backgroundColor: getButtonColor(val.i) }]}
                    >
                      <View style={[styles.iconeUI, { backgroundColor: getButtonColor(val.i) }]}>
                        <Text style={{ color: 'white', fontSize: 15 }}>I</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.produto} backgroundColor={getBackgroundColor(val.u, val.i)}>
                  <View style={styles.l3}>
                    <TouchableOpacity onPress={() => delTarefa(val.id)}>
                      <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ color: 'white' }}>X</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={[styles.input, { flex: 10, height: 90 }]}
                    placeholder="Digite a nova tarefa"
                    value={val.texto}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => {
                      setTarefas((prevTarefas) =>
                        prevTarefas.map((t) => (t.id === val.id ? { ...t, texto: text } : t))
                      );
                      saveTarefas(tarefas);
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.botaoAdicionar} onPress={addTarefa}>
          <View style={styles.iconeAdicionar}>
            <Text style={{ color: 'blue', fontSize: 25 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tela: {
    flex: 1,
    backgroundColor: '#4169E1',
  },
  botaoAdicionar: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeAdicionar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeUI: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoUI: {
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderradiustop: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  input: {
    height: 40,
    flex: 10,
    marginRight: 80,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 20,
  },
  bemVindo: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: '600',
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
  },
  produto: {
    backgroundColor: 'green',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    height: 90,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: '5%',
  },
  l3: {
    flex: 1,
  },
});
