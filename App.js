import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Container from './components/Container';
import Header from './components/Header';
import Body from './components/Body';
import Input from './components/Input';

const App = () => {

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <Container>
      <Header title={"Recruta-TI"} />
      <Image style={styles.logo}
        source={require('../recruta-ti/assets/icon.png')}
      />
      <Text style={styles.text}>
        Recrutador, Seja Bem Vindo (a)!
      </Text>
      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Input
          label="Senha"
          value={senha}
          onChangeText={senha => setSenha(senha)}
        />
        <Text style={styles.text}>
          Esqueci minha senha
        </Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'normal'
  },
  logo: {
    width: 66,
    height: 58,
    alignContent: 'center'
  }
});

export default App;