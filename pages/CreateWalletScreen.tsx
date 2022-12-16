import { observer } from "mobx-react-lite";
import * as React from "react";
import { useState } from "react";
import themeStore from "../store/ThemeStore";
import { Text, View, ImageBackground } from "react-native";
import { NavigationHelpers } from "@react-navigation/native";
import Button from "../componenets/Button";
import { buildColumnGap } from "../utils/layout";

const CreateWalletScreen = observer(({ navigation }: { navigation: NavigationHelpers<any> }) => {
  const [theme] = useState(() => themeStore);
  return (
    <View style={theme.currentThemeStyles.page}>
      {buildColumnGap(12)}
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ height: '100%', width: '100%' }}
          source={require('../assets/icon-create-wallet.png')}
        />
      </View>

      <View style={{ padding: 28 }}>
        {buildColumnGap(20)}
        <Text style={{ fontSize: 32 }}>
          New to SuiLove
        </Text>
        {buildColumnGap(20)}
        <Text style={{ fontSize: 16, color: '#988DA2' }}>
          Create a new wallet or import your existing wallet by 12-word seed phrase.
        </Text>

        {buildColumnGap(67)}

        <View style={{ height: 44 }}>
          <Button
            color="#FF9877"
            type="normal"
            text="Create new wallet"
            onPress={() => {
              navigation.navigate('Create New Wallet')
            }}></Button>
        </View>

        {buildColumnGap(20)}

        <View style={{ height: 44 }}>
          <Button
            color="#FF9877"
            type="normal"
            text="Import new wallet"
            onPress={() => {
              navigation.navigate('Import Wallet')
            }}></Button>
        </View>
      </View>
    </View>
  );
});

export default CreateWalletScreen;
