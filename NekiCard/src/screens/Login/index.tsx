import { Alert, Text } from "react-native"
import { useState } from "react";
import { Button, ButtonText, Container, Input, Title } from "./index.styles";
import { loginApi } from "../../api";
import { saveData } from "../../util/AssyncStorage";
import { useNavigation } from '@react-navigation/native';

export const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      const response = await loginApi({ email, senha });
      if(response){
        saveData("tokenUsuario", response)
        navigation.navigate('Home');
        
      }
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>

  )

}