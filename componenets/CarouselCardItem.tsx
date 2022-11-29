import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH - 28 * 2)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.img }}
                style={styles.image}
            />
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userInfo}>{`${item.location} | ${item.hobby}`}</Text>
                </View>
                <Text style={styles.userAge}>
                    { `${item.age} age` }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
        height: '100%',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4,
        elevation: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF'
    },
    userInfo: {
        fontSize: 18,
        color: '#988DA2',
    },
    userAge: {
        fontSize: 14,
        color: '#FFF',
        backgroundColor: '#FF9877',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        overflow: "hidden",
        fontWeight: 'bold'
    }
})

export default CarouselCardItem
