import React from 'react';
import { Text, StyleSheet } from 'react-native';


const HomeRecrutador = () => {

  return (
    <Text style={styles.text}>
      Olá, Recrutador! 
      Profissionais para a sua vaga:
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold'
  }
});



export default HomeRecrutador;