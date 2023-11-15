import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home/Home'
import { Tayisiya } from '../../constants/test-data'
import DiaryChildsEat from '../Home/Diary-childs-eat/DiaryChildsEat'
import { screens } from '../../constants/Screens'

const HomeStackScreen = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home'>
            {() => <Home child={Tayisiya}/>}
        </Stack.Screen>
        {screens.map(component => <Stack.Screen key={component.name} name={component.name} component={component.component}/>)}
    </Stack.Navigator>
  )
}

export default HomeStackScreen

const styles = StyleSheet.create({})