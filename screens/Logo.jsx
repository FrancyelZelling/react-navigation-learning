import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text>This is an Logo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2f93ef",
    flex:1,
    height: 50
  }
})

