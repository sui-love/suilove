import {observer} from "mobx-react-lite";
import {useState, useCallback} from "react";
import themeStore from "../store/ThemeStore";
import {View, ScrollView, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import {NavigationHelpers} from "@react-navigation/native";
import {buildColumnGap, buildRowGap} from "../utils/layout";
import Button from "../componenets/Button";
import ProfileStore, { ProfileItemType } from "../store/ProfileStore";

const CreateProfileScreen = observer(({navigation}: { navigation: NavigationHelpers<any> }) => {
    const [theme] = useState(() => themeStore);
    const [profile] = useState(() => ProfileStore);

    const onPressCard = useCallback((it) => {
        navigation.navigate("ProfileForm", {
            ...it
        });
    }, []);

    const toString = (it) => {
        if(it.type === ProfileItemType.SELECT) {
            return it.options.find(option => option.value === it.value)?.label ?? ''
        }
        if(it.type === ProfileItemType.MULTISELECT) {
            return it.value.map(value => it.options.find(option => option.value === value).label).join(' ')
        }
    }

    return (
        <View style={theme.currentThemeStyles.page}>
            <ScrollView style={styles.scrollView}>
                {
                    profile.profileItemList.map((it, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => onPressCard(it)}>
                                <View style={styles.card}>
                                    <Image style={styles.icon} source={it.icon}></Image>
                                    <View style={styles.content}>
                                        <Text style={styles.label}>
                                            {it.label}
                                        </Text>
                                        <Text style={styles.value}>
                                            {toString(it)}
                                        </Text>
                                    </View>

                                    <View style={styles.arrowWrapper}>
                                        <Image style={styles.icon}
                                               source={require('../assets/icon-arrow_right.png')}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

            <View style={styles.buttonGroup}>
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

const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 24,
        paddingHorizontal: 28,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
    },
    card: {
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
    },
    icon: {
        height: 18,
        width: 18,
    },
    content: {
        paddingLeft: 12,
        flex: 1
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#988DA2'
    },
    value: {
        fontSize: 16,
        fontWeight: '400',
        color: '#221232',
        marginTop: 12
    },
    arrowWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CreateProfileScreen;
