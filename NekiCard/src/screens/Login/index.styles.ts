import styled from "styled-components/native"; 

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
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