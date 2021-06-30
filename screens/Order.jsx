import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Order({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text>Order Details</Text>
      <Text>Order Id: {JSON.stringify(route.params.orderId)}</Text>
      <Text>Order Status: {JSON.stringify(route.params.status)}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

