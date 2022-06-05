import React from 'react';
import { Text } from 'react-native';
import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header'
const PerfilRecrutador = () => {
    return (
        <Container>
            <Header title={'Conta'} />
            <Body>
                <Text>
                    Olá, Recrutador!
                </Text>
            </Body>
        </Container>
    );
};

export default PerfilRecrutador;