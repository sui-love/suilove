import { observer } from "mobx-react-lite";
import { useState, useCallback } from "react";
import themeStore from "../store/ThemeStore";
import { View, ScrollView, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { NavigationHelpers } from "@react-navigation/native";
import { buildColumnGap } from "../utils/layout";
import Button from "../componenets/Button";
import ProfileStore, { ProfileItemType } from "../store/ProfileStore";
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import { Ed25519Keypair, JsonRpcProvider, Network, RawSigner } from '@mysten/sui.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { sleep } from "../utils";

const CreateProfileScreen = observer(({ navigation, route }: { navigation: NavigationHelpers<any>, route: any }) => {
    const [theme] = useState(() => themeStore);
    const [profile] = useState(() => ProfileStore);
    const mnemonic = route?.params?.mnemonic;
    const [loading, setLoading] = useState(false);

    const onPressCard = useCallback((it) => {
        navigation.navigate("ProfileForm", {
            ...it
        });
    }, []);

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.1,
            base64: true
        });

        if (!result.canceled) {
            setImage(result.assets[0].base64);
        }
    };

    const onSubmit = useCallback(async () => {
        if (!image) {
            return Toast.show({
                type: 'error',
                text1: 'Please select user image.',
                visibilityTime: 2000,
            });
        }
        const submitData: Record<string, any> = {
            ...profile.getValue(),
            avatar: image
        };
        try {
            setLoading(true);
            await sleep(0);
            const provider = new JsonRpcProvider(Network.DEVNET);
            const keypair = Ed25519Keypair.deriveKeypair(mnemonic);
            const signer = new RawSigner(keypair, provider);
            const moveCallTxn = await signer.executeMoveCall({
                packageObjectId: '0xfe1ee8fc4f9a0fd7489a02c23ab40ed8c4566196',
                module: 'user',
                function: 'create_user_without_avatar_url',
                typeArguments: [],
                arguments: [
                    submitData.nickname ?? 'default_lover', // nickname
                    submitData.age, // age
                    submitData.avatar, // avatar
                    submitData.language, // language
                    submitData.gender, // gender
                    submitData.city ?? '', // city
                    submitData.country, //country
                    submitData.ilike, // ilike
                    submitData.bio ?? 'Move', // bio
                ],
                gasBudget: 10000,
            });

            Toast.show({
                type: 'success',
                text1: 'Profile successfully created',
                visibilityTime: 2000,
            });

        } catch (e) {
            let message = e.message;
            if(message.includes('Cannot find gas coin for signer address')){
                message = 'Insufficient Gas!'
            }
            Toast.show({
                type: 'error',
                text1: message,
                visibilityTime: 2000,
            });
        } finally {
            setLoading(false);
        }
    }, [mnemonic, profile, image])


    const toString = (it) => {
        if (it.type === ProfileItemType.SELECT) {
            return it.options.find(option => option.value === it.value)?.label ?? ''
        }
        if (it.type === ProfileItemType.MULTISELECT) {
            return it.value.map(value => it.options.find(option => option.value === value).label).join(' ')
        }
        if (it.type === ProfileItemType.INPUT) {
            return it.value ?? ''
        }
    }

    return (
        <View style={theme.currentThemeStyles.page}>
             <Spinner
                overlayColor="rgba(0, 0, 0, 0.75)"
                animation="fade"
                visible={loading}
                textContent={'Loading...'}
                color="#fff"
                textStyle={{
                    color: '#fff',
                }}
                />

            <ScrollView style={{
                paddingVertical: 24,
                paddingHorizontal: 28,
            }}>
                <TouchableOpacity activeOpacity={0.5} onPress={pickImage}>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 100,
                            width: 100,
                            backgroundColor: '#F5F3F7',
                            borderRadius: 24,
                            overflow: 'hidden'
                        }}>
                            {
                                image ? (
                                    <ImageBackground style={{ height: 100, width: 100 }}
                                        source={{ uri: 'data:image/jpeg;base64,' + image }}></ImageBackground>
                                ) : (
                                    <ImageBackground style={{ height: 32, width: 32 }}
                                        source={require('../assets/icon-camera.png')}></ImageBackground>
                                )
                            }
                        </View>
                        {buildColumnGap(12)}
                        <Text style={{ fontSize: 18, color: '#CBC3D2' }}>UserImage</Text>
                    </View>
                </TouchableOpacity>

                {buildColumnGap(30)}

                {
                    profile.profileItemList.map((it, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => onPressCard(it)}>
                                <View style={{
                                    minHeight: 84,
                                    padding: 16,
                                    flexDirection: 'row',
                                    marginBottom: 16,
                                    borderWidth: 1,
                                    borderColor: '#eee',
                                    borderRadius: 18
                                }}>
                                    <Image style={{
                                        height: 18,
                                        width: 18,
                                    }} source={it.icon}></Image>
                                    <View style={{
                                        paddingLeft: 12,
                                        flex: 1
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#988DA2'
                                        }}>
                                            {it.label}
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '400',
                                            color: '#221232',
                                            marginTop: 12
                                        }}>
                                            {toString(it)}
                                        </Text>
                                    </View>

                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Image style={{
                                            height: 18,
                                            width: 18,
                                        }}
                                            source={require('../assets/icon-arrow_right.png')}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

                {buildColumnGap(48)}
            </ScrollView>

            {buildColumnGap(8)}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 28,
            }}>
                <Button color="#FF9877" type="normal" text="Submit" onPress={onSubmit}></Button>
            </View>
            {buildColumnGap(28)}
        </View>
    );
});

export default CreateProfileScreen;
