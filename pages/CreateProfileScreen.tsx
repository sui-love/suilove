import {observer} from "mobx-react-lite";
import * as React from "react";
import {useState} from "react";
import themeStore from "../store/ThemeStore";
import {View, ScrollView, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import {NavigationHelpers} from "@react-navigation/native";
import {buildColumnGap, buildRowGap} from "../utils/layout";
import Button from "../componenets/Button";

const CreateProfileScreen = observer(({navigation}: { navigation: NavigationHelpers<any> }) => {
    const [theme] = useState(() => themeStore);

    const [SelectCards] = useState([
        {
            icon: require('../assets/icon-username.png'),
            label: 'Username',
            value: 'Lover',
        },
        {
            icon: require('../assets/icon-age.png'),
            label: 'Age',
            value: 18,
        },
        {
            icon: require('../assets/icon-gender.png'),
            label: 'Gender',
            value: 'Female',
        },
        {
            icon: require('../assets/icon-country.png'),
            label: 'Country',
            value: 'Sydney',
        },
        {
            icon: require('../assets/icon-like.png'),
            label: 'I like',
            value: 'Play',
        },
        {
            icon: require('../assets/icon-lang.png'),
            label: 'Language',
            value: 'English',
        }
    ]);

    return (
        <View style={theme.currentThemeStyles.page}>
            <ScrollView style={styles.scrollView}>
                {
                    SelectCards.map((it, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <View style={styles.card}>
                                    <Image style={styles.icon} source={it.icon}></Image>
                                    <View style={styles.content}>
                                        <Text style={styles.label}>
                                            {it.label}
                                        </Text>
                                        <Text style={styles.value}>
                                            {it.value}
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
        height: 84,
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
