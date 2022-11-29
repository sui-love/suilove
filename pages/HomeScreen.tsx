import {observer} from "mobx-react-lite";
import * as React from "react";
import {useState} from "react";
import themeStore, {Theme} from "../store/ThemeStore";
import {Button, Text, View} from "react-native";
import {NavigationHelpers} from "@react-navigation/native";

const HomeScreen = observer(({navigation}: { navigation: NavigationHelpers<any> }) => {
    const [theme] = useState(() => themeStore);
    return (
        <View style={theme.currentThemeStyles.page}>
            <Text>Home Screen</Text>
            <Button
                title="修改主题"
                onPress={() => {
                    theme.changeTheme(theme.currentTheme === Theme.light ? Theme.dark : Theme.light);
                }}
            />
        </View>
    );
});

export default HomeScreen;
