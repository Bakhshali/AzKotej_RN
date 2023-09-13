import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgChevronLeft from '../icons/ChevronLeft'
import SvgFilter from '../icons/Filter'
import SvgMap from '../icons/Map'

const FilterPage = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <View style={{ width: "100%", backgroundColor: "#4D4D4D", padding: 12, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between",width:"95%" }}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <SvgChevronLeft />
                            <Text style={styles.headerText}>Lerik</Text>
                        </View>
                        <View style={{flexDirection:"row",gap:10}}>
                            <SvgFilter/>
                            <SvgMap/>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FilterPage

const styles = StyleSheet.create({
    headerText: {
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins-Medium"
    }
})