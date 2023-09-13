import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories'
import CategoryItems from './CategoryItems'

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={ categories }
      keyExtractor={category => category} 
      renderItem={({ item }) => <CategoryItems category={item}/>}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex:1,
        width : "100%"
    },
})