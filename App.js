import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Saldo from './components/Saldo';
import Lancamento from './components/Lancamento';
import SaldoProvider from './context/ContaContext';
import HomeRecrutador from './components/HomeRecrutador'


const App = () => {

  return (
    <SaldoProvider>
      <View style={styles.container}>
        <HomeRecrutador/>
        <Lancamento credito />
        <Lancamento />
      </View>
    </SaldoProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03989E',
    padding: 20
  }
});

export default App;
