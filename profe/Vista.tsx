import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Vista() {
  return (
    <View>
      <Text style={styles.texto}>Vista</Text>
      <Button title='Guardar'/>
      <Text style={styles.texto}>Vista</Text>
      <Text style={styles.texto}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi qui debitis asperiores praesentium. Adipisci animi, magni illo, alias incidunt quae tenetur, reiciendis voluptatem est omnis harum pariatur unde. Numquam, impedit!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  texto:{
    fontSize:20,


  }


})