import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
const Header = ({ title }) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
    fontSize: 30,
}
})