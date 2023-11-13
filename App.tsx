/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Tayisiya } from './src/constants/test-data';
import { activeColor, boyColor, girlColor, inactiveColor } from './src/constants/constants';
import Facts from './src/components/Facts/Facts';
import Notifications from './src/components/Notifications/Notifications';
import Calendar from './src/components/Calendar/Calendar';
import { NavBabyIcon } from './src/images/nav-baby-icon';
import { NavInfoIcon } from './src/images/nav-info';
import { NavNotificationsIcon } from './src/images/nav-notifications';
import { NavCalendarIcon } from './src/images/nav-calendar-icon';
import { createStackNavigator } from '@react-navigation/stack';
import DiarySleep from './src/components/Home/Diary-sleep/DiarySleep';
import DiaryGrowth from './src/components/Home/Diary-growth/DiaryGrowth';
import DiaryTakingMedications from './src/components/Home/Diary-taking-medications/DiaryTakingMedications';
import DiaryMumsEat from './src/components/Home/Diary-mums-eat/DairyMumsEat';
import DiaryChildsEat from './src/components/Home/Diary-childs-eat/DiaryChildsEat';
import Doctors from './src/components/Home/Doctors/Doctors';
import Vaccinations from './src/components/Home/Vaccinations/Vaccinations';
import HomeStackScreen from './src/components/StackScreen/HomeStackScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: activeColor,
            tabBarInactiveTintColor: inactiveColor(Tayisiya.isGirl),
            tabBarStyle: {
              backgroundColor: Tayisiya.isGirl ? girlColor : boyColor,
            },
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({color, focused}) => (
                <NavBabyIcon fill={color || focused} />
              ),
            }}>
            {() => <HomeStackScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="Facts"
            component={Facts}
            options={{
              tabBarIcon: ({color, focused}) => (
                <NavInfoIcon
                  fill={color || focused}
                  stroke={color || focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarIcon: ({color, focused}) => (
                <NavNotificationsIcon
                  fill={color || focused}
                  stroke={color || focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarIcon: ({color, focused}) => (
                <NavCalendarIcon
                  fill={color || focused}
                  stroke={color || focused}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <View>
      </View>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
