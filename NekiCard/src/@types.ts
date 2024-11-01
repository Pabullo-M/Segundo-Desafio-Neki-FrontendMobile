export interface RedesSociais {
    linkedin?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
}

export interface UserCardProps {
    id: string;
    email: string;
    nomeCompleto: string;
    nomeSocial: string;
    dataNascimento: string;
    foto: string;
    telefone: string;
    redesSociais: RedesSociais;
    token?:string;
    setRenderScreen?: React.Dispatch<React.SetStateAction<boolean>>;
}