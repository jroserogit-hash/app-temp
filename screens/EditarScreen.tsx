import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, update } from "firebase/database";
import { db } from '../firebase/config';

export default function EditarScreen() {
  
    const [id, setid] = useState("")
    const [titulo, settitulo] = useState("")
    const [anio, setanio] = useState(1915)
    const [genero, setgenero] = useState("")
  
  
    function editarSerie() {
      //const db = getDatabase();
      update(ref(db, 'series/' + id), {
        titulo: titulo,
        creacion: anio,
        genero: genero
      });
    }
  
  
  
  
    return (
      <View>
        <Text>Editar Screen</Text>
  
        <TextInput
          placeholder='Ingresar id'
          style={styles.input}
          onChangeText={(texto) => setid(texto)}
        />
  
        <TextInput
          placeholder='Ingresar titulo'
          style={styles.input}
          onChangeText={(texto) => settitulo(texto)}
        />
  
        <TextInput
          placeholder='Ingresar anio'
          style={styles.input}
          onChangeText={(texto) => setanio(+texto)}
        />
  
        <TextInput
          placeholder='Ingresar genero'
          style={styles.input}
          onChangeText={(texto) => setgenero(texto)}
        />
  
        <Button title='editar' onPress={editarSerie} color={'green'}/>
  
  
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