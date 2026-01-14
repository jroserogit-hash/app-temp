import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove } from 'firebase/database';
import { db } from '../firebase/config';

export default function EliminarScreen() {

  const [id, setid] = useState("")

  function eliminarSerie() {
    //const db = getDatabase();
   // remove(ref(db, 'peliculas/' + id));

    Alert.alert("Advertencia", "Desea eliminar el elemento seleccionado?",[
      {
        text: "Eliminar",
        onPress: ()=> remove(ref(db, 'peliculas/' + id))
      },
      {
        text: "Cancelar"
      },
    ])

  }
  
  return (
    <View>
      <Text>EliminarScreen</Text>
      <TextInput
        placeholder='Ingresar id'
        style={styles.input}
        onChangeText={(texto) => setid(texto)}
      />

      <Button 
        onPress={ ()=> eliminarSerie()} 
        title='Eliminar' 
        color={'red'}
      />
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