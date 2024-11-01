import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderContainer, IconButton, Title } from './index.styles';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({
    title
}) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
        </HeaderContainer>
    );
};