import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { ref, onValue } from "firebase/database";
import { db } from '../firebase/config';

export default function LeerScreen() {

  const [series, setseries] = useState([])

  useEffect(() => {
    leerSeries()
  }, [])
  

  function leerSeries() {
    const starCountRef = ref(db, 'series/'  );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      //CONVERTIR A UN ARREGLO
      let listaSeries: any = Object.keys(data).map( id => ({
        id, ...data[id]
      }))

      setseries(listaSeries)
      console.log(series);
      
    });
  }




  return (
    <View>
      <Text>LeerScreen</Text>
      <FlatList 
        data={series}
        renderItem={ ({item})=>
          <Text>{item.titulo}</Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})