import React from 'react';
import { Alert, Linking } from 'react-native';
import { Button, ButtonContainer, ButtonText, CardContainer, SocialButton, SocialLinks, SocialText, UserId, UserInfo, UserName, UserPhoto } from './index.styles';
import { UserCardProps } from '../../@types';
import { PutProfileModal } from '../PutProfileModal';
import { deletePerfilApi } from '../../api';




export const ProfileCard: React.FC<UserCardProps> = (profileData) => {

  const {
    id,
    email,
    nomeCompleto,
    nomeSocial,
    dataNascimento,
    foto,
    telefone,
    redesSociais,
    token,
    setRenderScreen
  } = profileData;

  const handleDelete = async () => {
    const response = await deletePerfilApi(id, token)
    if (typeof response === "string") {
      Alert.alert("Erro",
        response)
    } else {
      Alert.alert("Sucesso!", "Perfil deletado com sucesso!")
      setRenderScreen((prev) => !prev);
    }

  }

  return (
    <CardContainer>
      <UserPhoto source={{ uri: foto }} />
      <UserName>{nomeCompleto}</UserName>
      {nomeSocial && <UserInfo>Nome Social: {nomeSocial}</UserInfo>}
      <UserId>ID: {id}</UserId>
      <UserInfo>Email: {email}</UserInfo>
      <UserInfo>Data de Nascimento: {dataNascimento}</UserInfo>
      <UserInfo>Telefone: {telefone}</UserInfo>
      <SocialLinks>
        {Object.entries(redesSociais).map(([key, value]) => (
          <SocialButton key={key} onPress={() => Linking.openURL(value)}>
            <SocialText>{key}</SocialText>
          </SocialButton>
        ))}
      </SocialLinks>
      <ButtonContainer>
        <PutProfileModal {...profileData} token={token} setRenderScreen={setRenderScreen} />
        <Button>
          <ButtonText onPress={handleDelete}>
            Deletar
          </ButtonText>
        </Button>
      </ButtonContainer>
    </CardContainer>

  );
};