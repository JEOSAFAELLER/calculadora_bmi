import { View, Text, StyleSheet, TextInput } from 'react-native'
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
        <View style={styles.title}>
        <Text style={styles.titleText}>BMI Calculator</Text>

        </View>
        <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder='Peso em Kg'
        keyboardType='numeric' 
        />
         <TextInput
        style={styles.input}
        value={height}
        onChangeText={(text) => setheight(text)}
        placeholder='Altura em cm'
        keyboardType='numeric' 
        />
      
    </View>
  )
}



export default BmiCalculator


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor:'#e0ecde'
    },
    title:{
        backgroundColor:'#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10

    },
    titleText:{
        fontSize: 30,
        color:'#fff',
        fontWeight: 'bold'
    },
    input:{
        height:55,
        margin:15,
        borderWidth:1/2,
        padding:10,
        borderRadius:5,
        backgroundColor:"#cde0c9",
        fontSize:18
    }
  });