import React from 'react'
import { View, Text, Button} from 'react-native'

export default function About({navigation}) {
  const sendParams = () => {
    navigation.navigate("Order", {orderId: 2, status: "completed"})
  }
  return (
    <View>
      <Text>About</Text>
      <Button title="Order" onPress={sendParams}/>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

