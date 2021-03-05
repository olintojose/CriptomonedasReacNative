import React from 'react';
import { StyleSheet, Text, View } from 'react-native'


const Price = ({result}) => {

    if (Object.keys(result).length===0) return null
    return (

        <View style={styles.views}>
            <Text style={styles.text}>
            <Text style={[styles.price, styles.text]}>{result.PRICE}</Text>
            </Text>
            <Text style={styles.text}>Precio mas alto del día: { ' ' }
            <Text style={styles.span}> {result.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>Precio mas bajo del dia
            <Text style={styles.span}> {result.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>Variación últimas 24 horas
            <Text style={styles.span}> {result.CHANGEPCT24HOUR} %</Text>
            </Text>
            
            <Text style={styles.text}>Precio de apertura del día
            <Text style={styles.span}> {result.OPENDAY}</Text>
            </Text>
            <Text style={styles.text}>Última actualización
            <Text style={styles.span}> {result.LASTUPDATE}</Text>
            </Text>
        </View>
        
      );
}

const styles = StyleSheet.create({
    views:{
        backgroundColor:'#90b4ce',
        padding: 20,
        marginTop:20
        
    },
    text:{
        color:'#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        marginBottom: 10
    },
    price:{
        fontSize: 22,
        alignSelf: 'center'
    },
    span:{
        fontSize: 'Lato-Black'
    },


})
 

export default Price;