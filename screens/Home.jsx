import React from 'react'
import { View, Text, Button} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

export default function Home({navigation}) {

  function test1() {
    return (
      <View>
        <Text>
          Test 1
        </Text>
      </View>
    )
  }

  function test2() {
    return (
      <View>
        <Text>
          Test 2
        </Text>
        <Button title= "Go to Orders" onPress={() => navigation.navigate("About")} />
      </View>
    )
  }

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={test1} />
      <Tab.Screen name="Test 2" component={test2} />
    </Tab.Navigator>
  )
}

