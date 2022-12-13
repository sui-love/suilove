import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/HomeScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import { useState } from "react";
import themeStore from "./store/ThemeStore";
import { observer } from "mobx-react-lite";
import { Image, View } from "react-native";
import CreateProfileScreen from "./pages/CreateProfileScreen";
import ProfileFormScreen from './pages/sub/ProfileFormScreen';
import CreateWalletScreen from './pages/CreateWalletScreen';

const Stack = createNativeStackNavigator();

const App = observer(() => {
    const [theme] = useState(() => themeStore);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: theme.currentThemeStyles.header,
                headerShadowVisible: false
            }}>
                <Stack.Screen
                    name="CreateWallet"
                    options={{
                        headerShown: false
                    }}
                    component={CreateWalletScreen}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Welcome"
                    options={{
                        headerTitle: () => <Image style={{ height: 62, width: 200, resizeMode: 'cover' }} source={require('./assets/logo.jpg')}></Image>
                    }}
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="CreateProfile"
                    options={{ title: 'Create Your Profile', headerBackTitleVisible: false }}
                    component={CreateProfileScreen} />
                <Stack.Screen
                    name="ProfileForm"
                    options={{ headerBackTitleVisible: false }}
                    component={ProfileFormScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
});

export default App;
