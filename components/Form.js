import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableHighlight, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
//

const Form = ({currency, criptoCurrency, setCurrency, setCriptoCurrency, setconsultApi}) => {

  const [criptoCurrencys, setCriptoCurrencys] = useState([]);


  useEffect(() => {
    const callApi = async () => {
      const BASE_URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resp = await axios.get(BASE_URL);

      setCriptoCurrencys(resp.data.Data);
      
    };
    callApi();
  }, []);

  const getCurrency = (currency) => {
    // console.log(currency);
    setCurrency(currency);
  };
  const getCriptoCurrency = (criptoCurrency) => {
    // console.log(currency);
    setCriptoCurrency(criptoCurrency);
  };
  const getPrice = () =>{
    if ( criptoCurrency.trim() === '' || currency.trim() === ''){
      showAlert();
      return;

    } 
    //Cambiar el state de consultar Api
    setconsultApi(true);
  // console.log('cotizando')
  }

  const showAlert= () => {
    Alert.alert(
      'Error...',
      'Ambos campos son necesarios',
      [
        {text: 'OK'}
      ]
      
    )
    console.log('Alert')
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(currency) => getCurrency(currency)}
      >
        <Picker.Item label="- Seleccione" value="" />
        <Picker.Item label="Dolar de EEUU" value="USD" />
        <Picker.Item label="Peso Chileno" value="CLP" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={criptoCurrency}
        onValueChange={(criptoCurrency) => getCriptoCurrency(criptoCurrency)}
      >
        <Picker.Item label="- Seleccione" value="" />
        {criptoCurrencys.map(cripto => (
          <Picker.Item 
          key={cripto.CoinInfo.Id} 
          label={cripto.CoinInfo.FullName} 
          value={cripto.CoinInfo.Name}  />
        ))}
      </Picker>
      <TouchableHighlight 
        style={styles.buttonCalc}
        onPress = { () => getPrice() }
        >

        <Text
        style={styles.textCalc}
        >Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "Lato-Black",
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
    color:'#3da9fc'
  },
  buttonCalc: {
    backgroundColor:'#3da9fc',
    padding: 10,
    marginTop: 20
  },
  textCalc:{
    color:'#FFF',
    fontSize:18,
    fontFamily:'Lato-Black',
    textTransform:'uppercase',
    textAlign: 'center'

  }
});
export default Form;
