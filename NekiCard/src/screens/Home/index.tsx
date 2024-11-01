import { Alert, FlatList, ScrollView, View } from "react-native";
import { ProfileCard } from "../../components/ProfileCard";
import { Header } from "../../components/Header";
import { getPerfisApi } from "../../api";
import { getData } from "../../util/AssyncStorage";
import { useEffect, useState } from "react";
import { UserCardProps } from "../../@types";
import { useNavigation } from '@react-navigation/native';
import { PostModalProfile } from "../../components/PostModalProfile";
import { AddModalView } from "./index.styles";


export const Home = () => {

    const navigation = useNavigation()

    const [token, setToken] = useState<string>();
    const [profilesData, setProfilesData] = useState<UserCardProps[]>();
    const [renderScreen, setRenderScreen] = useState<boolean>(false);


    useEffect(() => {
        fetchToken();
    }, []);

    useEffect(() => {
        if (token) {
            fetchDataApi();
        }

    }, [token, renderScreen]);

    const fetchToken = async () => {
        const response = await getData('tokenUsuario')
        if (response) {
            setToken(response);
        } else {
            Alert.alert('Falha ao recuperar dados.', 'realize o login novamente')
        }
    }

    const fetchDataApi = async () => {
        const response = await getPerfisApi(token);
        if (typeof response === "string") {
            Alert.alert('Erro', response)
            return
        } else if (response) {
            setProfilesData(response);
        } else {
            Alert.alert('Atenção!', 'Favor realizar o login novamente!')
            navigation.navigate('Login')
        }
    }


    return (
        <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Header title="NekiCard" />
            <PostModalProfile setRenderScreen={setRenderScreen} token={token}/>
            <FlatList
                keyExtractor={(item) => item.id}
                data={profilesData}
                renderItem={({ item }) => (
                    <ProfileCard
                        {...item}
                        token={token}
                        setRenderScreen={setRenderScreen}
                    />
                )}
            />
        </View>
    )
}
