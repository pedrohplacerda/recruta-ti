import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'; 
import Saldo from './components/Saldo';
import Lancamento from './components/Lancamento';


const App = () => {

  const [saldo, setSaldo] = useState(0);

  return (
    <View style={styles.container}> 
    <Saldo valor={saldo}/> 
    <Lancamento credito/>
    <Lancamento/>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'white',
    padding: 20
  }
});

export default App;
