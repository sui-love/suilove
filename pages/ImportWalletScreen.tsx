import { observer } from "mobx-react-lite";
import * as React from "react";
import { useState, useRef } from "react";
import themeStore from "../store/ThemeStore";
import { Text, View, ImageBackground, TextInput, TouchableWithoutFeedback } from "react-native";
import { NavigationHelpers } from "@react-navigation/native";
import Button from "../componenets/Button";
import { buildColumnGap } from "../utils/layout";

const ImportWalletScreen = observer(({ navigation }: { navigation: NavigationHelpers<any> }) => {
  const [theme] = useState(() => themeStore);
  const inputRef = useRef(null);
  const [mnemonic, onChangeMnemonic] = React.useState("");
  return (
    <TouchableWithoutFeedback onPress={() => {
      inputRef.current.blur()
    }}>
      <View style={theme.currentThemeStyles.page}>
        <ImageBackground
          style={{ height: 165, width: 165, position: 'absolute', right: 0 }}
          source={require('../assets/icon-import-wallet.png')}
        />

        {buildColumnGap(205)}

        <View style={{ paddingBottom: 28, paddingHorizontal: 28, flex: 1, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 32 }}>
            Hello
          </Text>

          {buildColumnGap(12)}

          <Text style={{ fontSize: 16, color: '#988DA2' }}>
            Login to you mnemonics.
          </Text>

          {buildColumnGap(36)}

          <TextInput
            multiline
            ref={inputRef}
            disableFullscreenUI
            value={mnemonic}
            onChangeText={onChangeMnemonic}
            style={{
              height: 178,
              backgroundColor: 'rgba(255,152,119,0.2)',
              borderColor: '#FF9877',
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              fontSize: 16
            }}>
          </TextInput>

          <View style={{ flex: 1 }}></View>

          <View style={{ height: 44 }}>
            <Button
              color="#FF9877"
              type="normal"
              text="Done"
              onPress={() => {
                if(!mnemonic) {
                  return;
                }
                navigation.navigate('CreateProfile', {
                  mnemonic
                });
              }}></Button>
          </View>

          {buildColumnGap(36)}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

export default ImportWalletScreen;
