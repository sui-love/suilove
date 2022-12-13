import { observer } from "mobx-react-lite";
import { useState, useCallback } from "react";
import themeStore from "../store/ThemeStore";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { NavigationHelpers } from "@react-navigation/native";
import { buildColumnGap, buildRowGap } from "../utils/layout";
import Button from "../componenets/Button";
import ProfileStore, { ProfileItemType } from "../store/ProfileStore";

const CreateProfileScreen = observer(({ navigation, route }: { navigation: NavigationHelpers<any>, route: any }) => {
    const [theme] = useState(() => themeStore);
    const [profile] = useState(() => ProfileStore);
    const mnemonic = route?.params?.mnemonic;
    console.log(mnemonic);

    const onPressCard = useCallback((it) => {
        navigation.navigate("ProfileForm", {
            ...it
        });
    }, []);

    const toString = (it) => {
        if (it.type === ProfileItemType.SELECT) {
            return it.options.find(option => option.value === it.value)?.label ?? ''
        }
        if (it.type === ProfileItemType.MULTISELECT) {
            return it.value.map(value => it.options.find(option => option.value === value).label).join(' ')
        }
    }

    return (
        <View style={theme.currentThemeStyles.page}>
            <ScrollView style={{
                paddingVertical: 24,
                paddingHorizontal: 28,
            }}>
                {
                    profile.profileItemList.map((it, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => onPressCard(it)}>
                                <View style={{
                                    minHeight: 84,
                                    backgroundColor: 'white',
                                    shadowColor: '#000000',
                                    borderRadius: 16,
                                    shadowOffset: {
                                        width: 3,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.08,
                                    shadowRadius: 10,
                                    padding: 16,
                                    flexDirection: 'row',
                                    marginBottom: 16
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
            </ScrollView>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 28,
            }}>
                <Button color="#FF9877" type="normal" text="Submit" onPress={() => {
                }}></Button>
                {buildRowGap(30)}
                <Button color="#00000033" type="normal" text="Cancel" onPress={() => {
                }}></Button>
            </View>
            {buildColumnGap(28)}
        </View>
    );
});

export default CreateProfileScreen;
