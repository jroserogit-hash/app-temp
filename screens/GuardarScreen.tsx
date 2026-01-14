import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../firebase/config';


export default function GuardarScreen() {

  const [id, setid] = useState("")
  const [titulo, settitulo] = useState("")
  const [anio, setanio] = useState(1915)
  const [genero, setgenero] = useState("")


  function guardarSerie() {

    if (id.trim() != "" || titulo.trim() != "") {
      //const db = getDatabase();
      set(ref(db, 'peliculas/' + id), {
        titulo: titulo,
        creacion: anio,
        genero: genero
      });

      limpiar()

    }else{
      Alert.alert("ERROR","No se acepta campos en blanco")
    }
  }

  function limpiar(){
    setid("")
    settitulo("")
    setanio(1915)
    setgenero("")
  }




  return (
    <View>
      <Text>GuardarScreen</Text>

      <TextInput
        placeholder='Ingresar id'
        style={styles.input}
        onChangeText={(texto) => setid(texto)}
        value={id}
      />

      <TextInput
        placeholder='Ingresar titulo'
        style={styles.input}
        onChangeText={(texto) => settitulo(texto)}
        value={titulo}
      />

      <TextInput
        placeholder='Ingresar anio'
        style={styles.input}
        onChangeText={(texto) => setanio(+texto)}
        value={anio.toString()}
        keyboardType='numeric'
      />

      <TextInput
        placeholder='Ingresar genero'
        style={styles.input}
        onChangeText={(texto) => setgenero(texto)}
        value={genero}
      />

      <Button title='Guardar' onPress={guardarSerie} />


    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#6666",
    fontSize: 25,
    margin: 5
  }
})