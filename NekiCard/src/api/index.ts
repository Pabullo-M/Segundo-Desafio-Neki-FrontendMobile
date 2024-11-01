import { Alert } from 'react-native';
import { UserCardProps } from '../@types'; 
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://db8c-177-55-205-137.ngrok-free.app',
});

export interface LoginData {
    email: string;
    senha: string;
}

interface LoginResponse {
    token: string;
}

export const loginApi = async ({email, senha}: LoginData): Promise<string> => {
    try {
        const response = await axiosInstance.post<LoginResponse>("/login", {
            email,
            senha
        });
        return response.data.token;
    } catch (error: any) {
        Alert.alert("Error", "Falha no login, verifique usuario e senha e tente novamente.");
    }
};

export const getPerfisApi = async (token: string): Promise<UserCardProps[] | undefined | string> => {
    try {
        const response = await axiosInstance.get<UserCardProps[]>(`/perfil/listarTodos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar perfis:", error.response.data.erros);
        return error.response.data.erros[0];
    }
};
export const getPerfilApi = async (id: string): Promise<UserCardProps | undefined | string> => {
    try {
        const response = await axiosInstance.get<UserCardProps>(`/perfil/${id}`, {
        });
        return response.data;
    } catch (error) {
        return error.response.data.erros[0];
    }
};


export const deletePerfilApi = async (id: string, token: string) => {
    try {
        await axiosInstance.delete(`/perfil/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error: any) {
        return error?.response?.data?.titulo || 'Erro ao deletar perfil.';
    }
};

export const PutPerfilApi = async (perfilData: UserCardProps, token: string) => {
    const {
        id,
        email,
        nomeCompleto,
        nomeSocial,
        dataNascimento,
        foto,
        telefone,
        redesSociais,
    } = perfilData;

    try {
        const response = await axiosInstance.put(`/perfil/atualizar/${id}`,
            {
                id,
                email,
                nomeCompleto,
                nomeSocial,
                dataNascimento,
                foto,
                telefone,
                redesSociais: {
                    "linkedin": redesSociais?.linkedin,
                    "github":redesSociais?.github,
                    "instagram":redesSociais?.instagram,
                    "facebook":redesSociais?.facebook,
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    } catch (error: any) {
        return error?.response?.data?.titulo || 'Erro ao alterar perfil.';
    }
} 

export const postPerfilApi = async (perfilData: Partial<UserCardProps>, token: string) => {
    const {
        email,
        nomeCompleto,
        nomeSocial,
        dataNascimento,
        foto,
        telefone,
        redesSociais,
    } = perfilData;
    try {
        const response = await axiosInstance.post(`/perfil`,
            {
                email,
                nomeCompleto,
                nomeSocial,
                dataNascimento,
                foto,
                telefone,
                redesSociais: {
                    "linkedin": redesSociais?.linkedin,
                    "github":redesSociais?.github,
                    "instagram": redesSociais?.instagram,
                    "facebook":redesSociais?.facebook,
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    } catch (error) {
        return JSON.stringify(error?.response?.data?.titulo);
    }
} 
