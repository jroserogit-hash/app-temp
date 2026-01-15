import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Vista() {
  return (
    <View>
      <Text style={ styles. texto}>Vista</Text>
      <Button title='boton'/>
      <Text>HOLA</Text>
      <ActivityIndicator/>

    </View>
  )
}

const styles = StyleSheet.create({
  texto:{
    fontSize:20,


  }


})