import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 12px 16px;
  height:90px ;
  elevation: 40;
  border: 1px solid #ddd ;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const IconButton = styled(TouchableOpacity)`
  padding: 8px;
`;