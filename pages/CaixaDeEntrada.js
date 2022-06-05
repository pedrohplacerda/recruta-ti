import React from 'react';
import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header'
const caixaDeEntrada = () => {
    return (
        <Container>
        <Header title={'Caixa de entrada'}/>
        <Body></Body>
        </Container>
    );
};

export default caixaDeEntrada;