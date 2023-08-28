import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainTab from './src/navigation/tab/MainTab'

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})