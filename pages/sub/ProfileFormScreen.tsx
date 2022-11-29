import { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import themeStore from "../../store/ThemeStore";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import ProfileStore, { ProfileItemType } from "../../store/ProfileStore";
import { sleep } from "../../utils";

// @ts-ignore
const ProfileFormScreen = observer(({ route, navigation }) => {
    const [theme] = useState(() => themeStore);
    const [profile] = useState(() => ProfileStore);
    const { label } = route.params;
    const profileItem = profile.profileItemList.find(it => it.label === label);
    const [ multiSeletced, setMultiSeletced ] = useState<any[]>(profileItem.value as any[]);

    const onPressSelectItem = useCallback(async (it) => {
        profile.changeValue(profileItem.label, it.value);
        await sleep(300);
        navigation.pop();
    }, []);

    const onPressSelectMutilItem = useCallback(async (it) => {
       if(multiSeletced.includes(it.value)) {
          setMultiSeletced(multiSeletced.filter(selected => selected !== it.value))
       } else {
          setMultiSeletced(multiSeletced.concat(it.value))
       }
    }, [multiSeletced]);

    navigation.setOptions({
        title: `${label}`,
    });
    if (profileItem.type === ProfileItemType.SELECT) {
        return (
            <View style={theme.currentThemeStyles.page}>
                <ScrollView style={styles.scrollView}>
                    {
                        profileItem.options?.map(it => (
                            <TouchableOpacity key={it.label} activeOpacity={0.5} onPress={() => onPressSelectItem(it)}>
                                <View style={styles.selectItem}>
                                    {it.icon && <View style={styles.selectItemIcon}></View>}
                                    <Text style={styles.selectItemText}>{it.label}</Text>
                                    <View style={{ flex: 1 }}></View>
                                    {
                                        profileItem.value === it.value && <Image style={styles.icon} source={require('../../assets/icon-selected.png')}></Image>
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }

    const onPressConfirm = useCallback(async () => {
        profile.changeValue(profileItem.label, multiSeletced);
        await sleep(300);
        navigation.pop();
    }, [multiSeletced]);

    if (profileItem.type === ProfileItemType.MULTISELECT) {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={onPressConfirm}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
            ),
        });

        return (
            <View style={theme.currentThemeStyles.page}>
                <ScrollView style={styles.scrollView}>
                    {
                        profileItem.options?.map(it => (
                            <TouchableOpacity key={it.label} activeOpacity={0.5} onPress={() => onPressSelectMutilItem(it)}>
                                <View style={styles.selectItem}>
                                    {it.icon && <View style={styles.selectItemIcon}></View>}
                                    <Text style={styles.selectItemText}>{it.label}</Text>
                                    <View style={{ flex: 1 }}></View>
                                    {
                                        multiSeletced.includes(it.value) && <Image style={styles.icon} source={require('../../assets/icon-selected.png')}></Image>
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
    return (
        <View style={theme.currentThemeStyles.page}>
            <ScrollView>

            </ScrollView>
        </View>
    );
});

const styles = StyleSheet.create({
    confirmText: {
        fontSize: 15,
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#FF9877',
        backgroundColor: '#FF9877',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        overflow: 'hidden',
        fontWeight: '500'
    },
    scrollView: {
        paddingHorizontal: 28
    },
    selectItem: {
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#F5F3F7',
        borderBottomWidth: 1
    },
    selectItemIcon: {
        width: 18,
        height: 20,
        backgroundColor: 'red',
        marginRight: 16
    },
    selectItemText: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
    },
    icon: {
        height: 20,
        width: 20,
    }
});

export default ProfileFormScreen;
