import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CaixaDeEntrada from './CaixaDeEntrada';
import LoginRecrutador from './LoginRecrutador'
import PerfilRecrutador from './PerfilRecrutador';
import PesquisarProfissionais from './PesquisarProfissionais';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'Fazer login', icon: 'login' },
    { key: 'conta', title: 'Conta', icon: 'account' },
    { key: 'pesquisar', title: 'Pesquisar', icon: 'search-web' },
    { key: 'caixaDeEntrada', title: 'Caixa de entrada', icon: 'email-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: LoginRecrutador,
    conta: PerfilRecrutador,
    pesquisar: PesquisarProfissionais,
    caixaDeEntrada: CaixaDeEntrada
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;