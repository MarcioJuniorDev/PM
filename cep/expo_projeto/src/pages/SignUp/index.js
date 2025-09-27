import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator, Alert } from 'react-native';
import { 
  Background, 
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText 
} from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

  const { signUp, loadingAuth } = useContext(AuthContext);

  const [nome, setNome] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function buscarCEP(){
    if(cep.length !== 8){
      Alert.alert('Erro', 'Digite um CEP válido (8 números)');
      return;
    }
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if(data.erro){
        Alert.alert('Erro', 'CEP não encontrado');
        return;
      }
      setEndereco(data.logradouro);
      setCidade(data.localidade);
      setEstado(data.uf);
    }catch(err){
      Alert.alert('Erro', 'Não foi possível consultar o CEP');
    }
  }

  function handleSignUp(){
    if(!nome || !rg || !cpf || !cep || !endereco || !cidade || !estado || !numero || !email || !password){
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    // 👇 Substituição feita aqui: 'nome' virou 'name'
    signUp(email, password, {
      name: nome,
      rg,
      cpf,
      cep,
      endereco,
      cidade,
      estado,
      numero
    });
  }

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput><Input placeholder="Nome" value={nome} onChangeText={setNome} /></AreaInput>
        <AreaInput><Input placeholder="RG" value={rg} onChangeText={setRG} /></AreaInput>
        <AreaInput><Input placeholder="CPF" value={cpf} onChangeText={setCPF} /></AreaInput>
        <AreaInput>
          <Input 
            placeholder="CEP" 
            value={cep} 
            onChangeText={setCEP} 
            onEndEditing={buscarCEP} 
            keyboardType="numeric"
          />
        </AreaInput>
        <AreaInput><Input placeholder="Endereço" value={endereco} onChangeText={setEndereco} /></AreaInput>
        <AreaInput><Input placeholder="Cidade" value={cidade} onChangeText={setCidade} /></AreaInput>
        <AreaInput><Input placeholder="Estado" value={estado} onChangeText={setEstado} /></AreaInput>
        <AreaInput><Input placeholder="Número" value={numero} onChangeText={setNumero} keyboardType="numeric"/></AreaInput>
        <AreaInput><Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"/></AreaInput>
        <AreaInput><Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry /></AreaInput>

        <SubmitButton onPress={handleSignUp}>
          { loadingAuth ? <ActivityIndicator size={20} color="#FFF"/> : <SubmitText>Cadastrar</SubmitText> }
        </SubmitButton>
      </Container>
    </Background>
  )
}