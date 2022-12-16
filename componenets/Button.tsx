import {TouchableOpacity, View, Text} from "react-native";

interface ButtonProps {
    type: string,
    onPress: () => void,
    text: string,
    color: string,
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={.5} style={{
            borderRadius: 16,
            flex: 1,
            height: 48,
            borderColor: props.color,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }} onPress={props.onPress}>
            <View>
                <Text style={{fontSize: 16, color: props.color, fontWeight: 'bold'}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;
