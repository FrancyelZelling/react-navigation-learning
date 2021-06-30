import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator}from "@react-navigation/stack"

import Home from "./screens/Home"
import Logo from "./screens/Logo"
import About from "./screens/About"
import Order from "./screens/Order"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "#2f93ef",
          },
          headerTitleAlign: "center",
        }} >  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} options={{headerTitle: props => <Logo />}}/>
        <Stack.Screen name="Order" component={Order} options={({navigation, route}) => ({
          headerRight: props => <Button title="Hello" onPress={() => navigation.navigate("Home")} />
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
