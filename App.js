import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from "react-native";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Price from "./Components/Price";
import axios from 'axios';
export default function App() {

  const [currency, setCurrency] = useState("");
  const [criptoCurrency, setCriptoCurrency] = useState("");

  const [ consultApi, setconsultApi  ] = useState (false);
  const [result , setResult ] = useState({})
  const [loading, setLoading ] = useState(false)

 useEffect(() => {

   const consultCriptoCurrency  = async () => { 
  // console.log('Listo para cotizar')
    if (consultApi) {
      //Consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`
      //console.log(url)
      const resp = await axios.get(url);
     // console.log((resp.data.DISPLAY[criptoCurrency] [currency]) )
   //Oculat el spinner y mostrar el resultado
   setLoading(true);
   setTimeout(() => {
    setResult(resp.data.DISPLAY[criptoCurrency] [currency]) 
      
    setconsultApi(false)
    setLoading(false)
   }, 2000);

    }
  }
    consultCriptoCurrency()
 }, [consultApi]);

 //mostrar el spinner

 const component = loading ? <ActivityIndicator size="large" color="#3da9fc" /> :  <Price result={result}/>

  return (
    <>
    <ScrollView>
      <Header />
      <Image
        source={require("./assets/img/cryptomonedas.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Form
          currency={currency}
          criptoCurrency={criptoCurrency}
          setCurrency={setCurrency}
          setCriptoCurrency={setCriptoCurrency}
          setconsultApi={setconsultApi}
        />
      
      </View>

      {component}
     
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
  container: {
    marginHorizontal: "2.5%",
  },
});
