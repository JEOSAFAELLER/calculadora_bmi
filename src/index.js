import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const BmiCalculator = () => {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [bmi, setBmi] = useState("")
    const [description, setDescription] = useState("")

    const calculateBmi = () => {
        const bmi = (weight / ((height / 100) * (height / 100)))
        setBmi(bmi.toFixed(1))

        if (bmi < 18.5) {
            setDescription("Magro")
        } else if (bmi >= 18.5 && bmi < 24.9) {
            setDescription("Normal")
        } else if (bmi >= 25 && bmi < 29.9) {
            setDescription("Sobrepeso")
        } else if (bmi >= 30) {
            setDescription("Obesidade")
        }
    }








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