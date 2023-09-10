import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import SvgCloseMd from '../icons/CloseMd'
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass'
import SvgTv from '../icons/Tv'
import { regions } from '../data/region'

const SearchPage = ({ navigation }) => {




    const regionItems = ({ item }: any) => {
        return (
            <View>
                <View style={{ flexDirection: "row", gap: 8, marginTop: 12, marginBottom: 12 }}>
                    <Text style={{ color: "white", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.name}</Text>
                </View>
                <View style={styles.line}></View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
            <View style={{ marginHorizontal: 15 }}>
                <View style={styles.headerMain}>
                    <TouchableOpacity onPress={() => navigation.navigate("Tabscmp")}>
                        <SvgCloseMd style={styles.closeIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Hara getmək istəyirsən</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ width: "100%", backgroundColor: "#404040", borderRadius: 10, padding: 8 }}>
                        <TextInput style={{ fontFamily: "Poppins-Medium", paddingLeft: 30 }} placeholder='Axtar' placeholderTextColor={"#B8B8B8"} />
                        <SvgSearchMagnifyingGlass style={styles.searchIcon} />
                    </View>
                </View>
                <View style={[styles.lines, { marginTop: 10 }]}></View>
                <FlatList
                    data={regions}
                    renderItem={regionItems}
                    keyExtractor={(item) => item.id.toString()}
                />
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
        height: 5,
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
        marginTop: 20
    },
    closeIcon: {
        width: 25,
        height: 25
    }
})