import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const CardContainer = styled.View`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  background-color: #fff;
  align-items: center;
  margin-top: 10px;
  margin-bottom:10px ;
  /* box-shadow: black ; */
`;

export const UserPhoto = styled.Image`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const UserId = styled.Text`
  font-size: 14px;
  color: #555;
  margin: 4px 0;
`;

export const UserInfo = styled.Text`
  font-size: 14px;
  color: #555;
  margin: 4px 0;
`;

export const SocialLinks = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

export const SocialButton = styled(TouchableOpacity)`
  padding: 4px;
`;

export const SocialText = styled.Text`
  color: #0073e6;
  font-size: 14px;
`;

export const ButtonContainer = styled.View`
  width:100%;
  display: flex;
  justify-content:space-around;
  flex-direction: row ;
`;
export const Button = styled.TouchableOpacity`
  width: 40%;
  padding: 15px;
  background-color: black;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;