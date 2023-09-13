import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import CategoryItems from '../components/CategoryItems'


const Home = () => {
    return (
        <>
        <Header title={'Facu Loria'}/>
        <Categories />
        </>

  )
}

export default Home

const styles = StyleSheet.create({})