import { Button, Center, FormControl, Input, Modal } from "native-base";
import { useState } from "react";
import { ButtonModal, ButtonModalSave, ButtonText } from "./index.styles";
import { UserCardProps } from "../../@types";
import { z } from "zod";
import { PutPerfilApi } from "../../api";
import { Alert } from "react-native";
import { perfilSchema } from "../../util/zodSchema";

export const PutProfileModal: React.FC<UserCardProps> = (profileData) => {
    const {
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

    const [putProfile, setPutProfile] = useState<UserCardProps>(profileData);

    const [showModal, setShowModal] = useState(false);

    

    const handlePutPerfil = async () => {
        try {

            perfilSchema.parse(putProfile);

            const response = await PutPerfilApi(putProfile,token);
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
            <ButtonText>Alterar</ButtonText>
        </ButtonModal>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Alterar Perfil</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Nome Completo</FormControl.Label>
                        <Input
                            defaultValue={nomeCompleto}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
                                    ...prev,
                                    nomeCompleto: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Nome Social</FormControl.Label>
                        <Input
                            defaultValue={nomeSocial}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
                                    ...prev,
                                    nomeSocial: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            defaultValue={email}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
                                    ...prev,
                                    email: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Data de nascimento</FormControl.Label>
                        <Input
                            defaultValue={dataNascimento}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
                                    ...prev,
                                    dataNascimento: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Foto (URL)</FormControl.Label>
                        <Input
                            defaultValue={foto}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
                                    ...prev,
                                    nomeCompleto: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Telefone</FormControl.Label>
                        <Input
                            defaultValue={telefone}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
                                    ...prev,
                                    telefone: value,
                                }))
                            }
                        />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>LinkedIn</FormControl.Label>
                        <Input
                            defaultValue={redesSociais.linkedin}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
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
                            defaultValue={redesSociais.github}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
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
                            defaultValue={redesSociais.instagram}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
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
                            defaultValue={redesSociais.facebook}
                            onChangeText={(value) =>
                                setPutProfile((prev) => ({
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
                            handlePutPerfil();
                        }}>
                            <ButtonText>Salvar</ButtonText>
                        </ButtonModalSave>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>;
};