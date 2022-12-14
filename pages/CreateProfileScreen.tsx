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

const CreateProfileScreen = observer(({ navigation, route }: { navigation: NavigationHelpers<any>, route: any }) => {
    const [theme] = useState(() => themeStore);
    const [profile] = useState(() => ProfileStore);
    const mnemonic = route?.params?.mnemonic;

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
            quality: 1,
            base64: true
        });

        if (!result.canceled) {
            setImage(result.assets[0].base64);
        }
    };

    const onSubmit = useCallback(() => {
        if(!image){
            return Toast.show({
                type: 'error',
                text1: 'Please select user image.',
                visibilityTime: 2000,
            });
        }
     }, [mnemonic, profile])


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
                                    source={{uri: 'data:image/jpeg;base64,'  + image}}></ImageBackground>
                                ): (
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

                { buildColumnGap(48) }
            </ScrollView>

            { buildColumnGap(8) }

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
