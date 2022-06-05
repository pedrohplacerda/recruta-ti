import React from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Input from '../components/Input';
import Container from '../components/Container';


const PesquisarProfissionais = () => {
    return (
        <Container>
            <Header title={'Pesquisar profissionais'} />
            <Body>
                <Input>
                </Input>
            </Body>
        </Container>
    );
};

export default PesquisarProfissionais;