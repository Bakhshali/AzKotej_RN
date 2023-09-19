import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvgCloseMd from '../icons/CloseMd'
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass'
import { regions } from '../data/region'
import SvgLocation from '../icons/Location'
import { AppDispatch, StateType } from '../redux/stores/store'
import { useDispatch, useSelector } from 'react-redux'
import * as Font from 'expo-font';
import { addFilterName, getData } from '../redux/slices/RegionSlices'

const SearchPage = ({ navigation }) => {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const dispatch = useDispatch<AppDispatch>()
    const { data, filterName } = useSelector((state: StateType) => state.RegionSlice)

    console.log(filterName);
    
    useEffect(() => {
        Font.loadAsync({
            'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
            'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
            'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
            'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
            'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        }).then(() => {
            setFontsLoaded(true);
        });
        setSelectedItemIndex(null);
    }, [navigation]);

    useEffect(() => {
        if (fontsLoaded) {
            dispatch(getData());
        }
    }, [fontsLoaded, dispatch]);

    if (!fontsLoaded) {
        return (
            <View>
            </View>
        );
    }


    const regionItems = ({ item, index }: any) => {
        const isSelected = index === selectedItemIndex;
        return (
            <View style={{ marginTop: 10 }}>
                <Pressable onPress={() => {
                    dispatch(addFilterName(item.name));
                    setSelectedItemIndex(index);
                }}>
                    <View style={{ marginTop: 12, marginBottom: 12 }}>
                        <Text style={{ color: isSelected ? "#6C7521" : "white", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.name}</Text>
                    </View>
                </Pressable>
                <View style={styles.line}></View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
            <View style={{ marginHorizontal: 15, flex: 10, marginTop: 40 }}>
                <View style={styles.headerMain}>
                    <TouchableOpacity onPress={() => navigation.navigate("Tabscmp")}>
                        <SvgCloseMd style={styles.closeIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Hara getmək istəyirsən</Text>
                </View>
                {/* <View style={{ marginTop: 20 }}>
                    <View style={{ width: "100%", backgroundColor: "#404040", borderRadius: 10, padding: 8 }}>
                        <TextInput style={{ fontFamily: "Poppins-Medium", paddingLeft: 30, color: "white" }} placeholder='Axtar' placeholderTextColor={"#B8B8B8"} />
                        <SvgSearchMagnifyingGlass style={styles.searchIcon} />
                    </View>
                </View> */}
                <View style={{ marginTop: 30, gap: 10 }}>
                    {/* <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                        <SvgLocation style={{ width: 18, height: 18 }} />
                        <Text style={{ color: "white", fontSize: 17, fontFamily: "Poppins-Regular" }}>Sizə yaxın olan yerlər</Text>
                    </View> */}
                    <View style={{ marginTop: 0, marginBottom: 8, gap: 20 }}>
                        {/* <View style={styles.line}></View> */}
                        <Text style={{ color: "#A4A4A4", fontSize: 16, fontFamily: "Poppins-Medium" }}>Ən çox gedilən</Text>
                    </View>
                </View>
                <View style={[styles.lines]}></View>
                <FlatList
                    data={data}
                    renderItem={regionItems}
                />
            </View>
            <View style={{ flex: 1, marginHorizontal: 15, flexDirection: "row", justifyContent: "flex-end" }}>
                {
                    filterName &&
                    <TouchableOpacity onPress={() => navigation.navigate("FilterScreen")} style={{ backgroundColor: "#6C7521", height: "60%", width: "25%", justifyContent: "center", alignItems: "center", borderRadius: 6 }}>
                        <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>Növbəti</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView>
    )
}

export default SearchPage

const styles = StyleSheet.create({
    lines: {
        width: "100%",
        height: 1,
        backgroundColor: "#2F2F2F",
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#3E3E3E",
        marginTop: 10
    },
    searchIcon: {
        stroke: "#B8B8B8",
        fill: "none",
        position: "absolute",
        top: 5,
        left: 5
    },
    headerText: {
        fontSize: 17,
        fontFamily: "Poppins-Medium",
        color: "white"
    },
    headerMain: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        justifyContent: "space-between",
        marginTop: 20,
        paddingBottom: 10
    },
    closeIcon: {
        width: 25,
        height: 25
    }
})