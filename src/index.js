import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BmiCalculator = () => {
  return (
    <View style= {styles.container}>
      <Text>BmiCalculator</Text>
    </View>
  )
}



export default BmiCalculator


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });