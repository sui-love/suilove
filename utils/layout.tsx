import {View} from "react-native";

export function buildRowGap(gap: number) {
    return <View style={{width: gap}}></View>
}

export function buildColumnGap(gap: number) {
    return <View style={{height: gap}}></View>
}

export function buildEmptyView() {
    return <View></View>
}
