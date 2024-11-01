import { Button, Center, FormControl, Input, Modal } from "native-base";
import { useState } from "react";
import { ButtonModal, ButtonModalSave, ButtonText } from "./index.styles";
import { UserCardProps } from "../../@types";
import { z } from "zod";
import { postPerfilApi, PutPerfilApi } from "../../api";
import { Alert } from "react-native";
import { perfilSchema } from "../../util/zodSchema";


interface PostProfileProps{
    token: string
    setRenderScreen?: React.Dispatch<React.SetStateAction<boolean>>;
}


export const PostModalProfile = ({token, setRenderScreen}:PostProfileProps) => {


    const [postProfile, setPostProfile] = useState<UserCardProps>({
        id:null,
        nomeCompleto: '',
        nomeSocial:'',
        email: '',
        foto: '',
        telefone:'',
        dataNascimento: '',
        redesSociais: {
          linkedin: '',
          github: '',
          instagram: '',
          facebook: '',
        }
      });
      

    const [showModal, setShowModal] = useState(false);

    const handlePostPerfil = async () => {
        try {

            perfilSchema.parse(postProfile);

            const response = await postPerfilApi(postProfile,token);

            if (typeof response === "string") {
                Alert.alert("Erro.", response)
                return;
            }else{
                Alert.alert("Sucesso!",
                    "Alteração realizada com sucesso!")
                setRenderScreen((prev) => !prev);
                setShowModal(false);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors = error.errors.map((err) => err.message).join(", ");
                Alert.alert("Erro de Validação",
                    formattedErrors)
            } else {
                Alert.alert("Erro ao alterar o perfil:", error);
            }
        }
    }
    return <Center>
        <ButtonModal onPress={() => setShowModal(true)}>
            <ButtonText>Incluir Perfil</ButtonText>
        </ButtonModal>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Alterar Perfil</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Nome Completo</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    nomeCompleto: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Nome Social</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    nomeSocial: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    email: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Data de nascimento</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    dataNascimento: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Foto (URL)</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    foto: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Telefone</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    telefone: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>LinkedIn</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    redesSociais: {
                                        ...prev?.redesSociais,
                                        linkedin: value,
                                    },
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>GitHub</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    redesSociais: {
                                        ...prev?.redesSociais,
                                        github: value,
                                    },
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Instagram</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    redesSociais: {
                                        ...prev?.redesSociais,
                                        instagram: value,
                                    },
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Facebook</FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setPostProfile((prev) => ({
                                    ...prev,
                                    redesSociais: {
                                        ...prev?.redesSociais,
                                        facebook: value,
                                    },
                                }))
                            }
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <ButtonModalSave onPress={() => {
                            setShowModal(false);
                        }}>
                            <ButtonText>Cancelar</ButtonText>
                        </ButtonModalSave>
                        <ButtonModalSave onPress={() => {
                            handlePostPerfil();
                        }}>
                            <ButtonText>Salvar</ButtonText>
                        </ButtonModalSave>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>;
};