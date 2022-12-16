import { observer } from "mobx-react-lite";
import * as React from "react";
import { useState } from "react";
import themeStore from "../store/ThemeStore";
import { Text, View, ImageBackground, TextInput } from "react-native";
import { NavigationHelpers } from "@react-navigation/native";
import Button from "../componenets/Button";
import { buildColumnGap } from "../utils/layout";

const BackupWalletScreen = observer(({ navigation, route }: { navigation: NavigationHelpers<any>, route: any }) => {
  const mnemonic = route?.params?.mnemonic;
  const [theme] = useState(() => themeStore);
  return (
    <View style={theme.currentThemeStyles.page}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ height: '100%', width: '100%' }}
          source={require('../assets/icon-backup-wallet.png')}
        />
      </View>

      <View style={{ paddingBottom: 28, paddingHorizontal: 28 }}>
        {buildColumnGap(20)}
        <Text style={{ fontSize: 32 }}>
          Wallet Successfully Created
        </Text>
        {buildColumnGap(20)}
        <Text style={{ fontSize: 16, color: '#988DA2' }}>
          Backup Recovery Passphrase.
        </Text>

        {buildColumnGap(12)}

        <TextInput
          multiline
          value={mnemonic}
          editable={false}
          textAlignVertical="top"
          style={{
            height: 108,
            backgroundColor: 'rgba(255,152,119,0.2)',
            borderColor: '#FF9877',
            borderWidth: 1,
            borderRadius: 8,
            padding: 8,
            fontSize: 16
          }}>
        </TextInput>

        {buildColumnGap(42)}

        <View style={{ height: 44 }}>
          <Button
            color="#FF9877"
            type="normal"
            text="Done"
            onPress={() => {
              if (mnemonic) {
                navigation.navigate('CreateProfile', { mnemonic });
              }
            }}></Button>
        </View>
      </View>
    </View>
  );
});

export default BackupWalletScreen;
