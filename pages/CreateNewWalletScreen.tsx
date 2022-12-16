import { observer } from "mobx-react-lite";
import * as React from "react";
import { useState } from "react";
import themeStore from "../store/ThemeStore";
import { Text, View, ImageBackground } from "react-native";
import { NavigationHelpers } from "@react-navigation/native";
import Button from "../componenets/Button";
import { buildColumnGap } from "../utils/layout";
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

const CreateNewWalletScreen = observer(({ navigation }: { navigation: NavigationHelpers<any> }) => {
  const [theme] = useState(() => themeStore);
  return (
    <View style={theme.currentThemeStyles.page}>
      {buildColumnGap(12)}
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ height: '100%', width: '100%' }}
          source={require('../assets/icon-create-new-wallet.png')}
        />
      </View>

      <View style={{ padding: 28 }}>
        {buildColumnGap(20)}
        <Text style={{ fontSize: 32 }}>
          Create new wallet
        </Text>
        {buildColumnGap(20)}
        <Text style={{ fontSize: 16, color: '#988DA2' }}>
          Creating a wallet generates new recovery
          passphrase. Using it you can backup and
          restore your wallet.
        </Text>

        {buildColumnGap(67)}

        <View style={{ height: 44 }}>
          <Button
            color="#FF9877"
            type="normal"
            text="Create wallet now"
            onPress={() => {
              const mnemonic = bip39.generateMnemonic(wordlist);
              navigation.navigate('Backup Wallet', {
                mnemonic
              });
            }}></Button>
        </View>

      </View>
    </View>
  );
});

export default CreateNewWalletScreen;
