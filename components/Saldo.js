import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const Saldo = (props) => {
  
  return (
     <Text style={styles.text}> 
    Saldo: {props.valor}
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold'
  }
});

 
export default Saldo;