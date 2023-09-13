import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const CategoriesList = ({ category }) => {
  return (
    <>
        <header title={category}/>
        <view>
            <text>Categories Listo</text>
        </view>
    </>
  )
}

export default CategoriesList

const styles = StyleSheet.create({})

const Styles = StyleSheet.create({
    contairner: {
        flex: 1,
        width: '100%',
    },
})