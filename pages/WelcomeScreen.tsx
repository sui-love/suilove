import { Linking, View } from "react-native";
import * as React from "react";
import { NavigationHelpers } from "@react-navigation/native";
import { useState } from "react";
import themeStore from "../store/ThemeStore";
import { observer } from "mobx-react-lite";
import Button from "../componenets/Button";
import { buildColumnGap, buildRowGap } from "../utils/layout";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { ITEM_WIDTH, SLIDER_WIDTH } from "../componenets/CarouselCardItem";

const userCardData = [
    {
        hobby: 'travel',
        name: 'Alex',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F6f%2Ff2%2Ff4b40bbe4839d68fb868849a3b15b3dd.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=835defa233b02273e015f4c3a0085de0',
        star: false
    },
    {
        hobby: 'read',
        name: 'Fay',
        age: '25',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F795f5fa7ce5e194e0adf1e6af208d220ff29bfb8.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=f500e0f8cef794d317717397532e723c',
        star: true
    },
    {
        hobby: 'ride',
        name: 'Fair',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F1110200Z938%2F2011100Z938-2-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=45a14d5c42ebf1adbff2405205fa70c2',
        star: false
    },
    {
        hobby: 'all',
        name: 'Alice',
        age: '22',
        location: 'JP',
        img:
            'https://pics5.baidu.com/feed/0b55b319ebc4b7458cd9fad9075df01f888215de.jpeg?token=ccf0d4ee285578a3b44f251836e956ef',
        star: true
    },
    {
        hobby: 'dance',
        name: 'Sara',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2Fsj01%2F20121R10U14154-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=e7cbfeee00033ea67cf7cb72bc4bf6b3',
        star: false
    },
    {
        hobby: 'play',
        name: 'Eva',
        age: '22',
        location: 'JP',
        img:
            'https://img2.baidu.com/it/u=2490939159,251868101&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750',
        star: false
    },
    {
        hobby: 'other',
        name: 'Angel',
        age: '22',
        location: 'JP',
        img:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F2%2F19%2Fcd979c8c90.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670249526&t=f50c030aff665058e6200acf15b93753',
        star: false
    }
];

const WelcomeScreen = observer(({ navigation }: { navigation: NavigationHelpers<any> }) => {
    const [theme] = useState(() => themeStore);

    return (
        <View style={theme.currentThemeStyles.page}>
            <View style={{
                flex: 1
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 28,
                }}>
                    <Button color="#FFD25F" type="normal" text="Twitter" onPress={() => {
                        Linking.openURL('https://twitter.com/suii_driveweb3');
                    }}></Button>
                    {buildRowGap(30)}
                    <Button color="#738BD8" type="normal" text="Discord" onPress={() => {
                        Linking.openURL('https://twitter.com/suii_driveweb3');
                    }}></Button>
                </View>

                {buildColumnGap(20)}

                <Carousel
                    layout="stack"
                    data={userCardData}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    useScrollView={true}
                    firstItem={0}
                    vertical={false} />

                {buildColumnGap(20)}

                <View style={{
                    height: 68,
                    paddingHorizontal: 28,
                }}>
                    <Button color="#FF9877" type="normal" text="Start use" onPress={() => {
                        navigation.navigate('CreateWallet')
                    }}></Button>
                </View>

                {buildColumnGap(28)}
            </View>
        </View>
    );
});

export default WelcomeScreen;
