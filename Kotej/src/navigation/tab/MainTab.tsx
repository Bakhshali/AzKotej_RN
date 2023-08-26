import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SvgHeart01 from '../../icons/Heart01';
import FavoriteComp from '../../components/FavoriteComp';
import SvgSearchMagnifyingGlass from '../../icons/SearchMagnifyingGlass';
import HomeComp from '../../components/HomeComp';
import SvgUser02 from '../../icons/User02';
import ProfileComp from '../../components/ProfileComp';
import MapComp from '../../components/MapComp';
import SvgCompass from '../../icons/Compass';
import HomeDetail from '../../screens/DetailPage';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainTab = () => {

    const Tabs = () => {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false, tabBarShowLabel: false,
                tabBarStyle: {
                    // borderTopLeftRadius: 35,
                    // borderTopRightRadius: 35,
                    backgroundColor: "black"
                }
            }}>
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgSearchMagnifyingGlass style={{
                            stroke: focused ? "#E1F340" : "gray",
                            fill: focused ? "none" : "none"
                        }} />
                    )
                }} component={HomeComp} name="HomeScrn" />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgCompass style={{
                            stroke: focused ? "#E1F340" : "gray",
                            fill: focused ? "none" : "none"
                        }} />
                    )
                }} component={MapComp} name="MapScrn" />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgHeart01 style={{
                            stroke: focused ? "#E1F340" : "gray",
                            fill: focused ? "none" : "none"
                        }} />
                    )
                }} component={FavoriteComp} name="FavoriteScrn" />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgUser02 style={{
                            stroke: focused ? "#E1F340" : "gray",
                            fill: focused ? "none" : "none"
                        }} />
                    )
                }} component={ProfileComp} name="ProfileScrn" />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Tabs} name="Tabscmp" />
            <Stack.Screen component={HomeDetail} name="DetailScreen" />
        </Stack.Navigator>
    )
}

export default MainTab

const styles = StyleSheet.create({})

