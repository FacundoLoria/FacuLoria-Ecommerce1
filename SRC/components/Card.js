import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={[style.container, style]}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    continer : {
        backgroundColor: 'green',
        shadowColor: '#000',
        shadowOffset: {height: 5, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})