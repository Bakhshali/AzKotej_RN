import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvgChevronLeft from '../icons/ChevronLeft'
import SvgFilter from '../icons/Filter'
import SvgMap from '../icons/Map'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/stores/store'
import * as Font from 'expo-font';
import { getHome } from '../redux/slices/HomeSlices'
import SvgLocation from '../icons/Location'
import SvgHeart01 from '../icons/Heart01'

const FilterPage = ({ navigation }) => {
    const { home } = useSelector((state: StateType) => state.HomeSlice)
    const { filterName } = useSelector((state: StateType) => state.RegionSlice)
    const dispatch = useDispatch<AppDispatch>()
    const [fontsLoaded, setFontsLoaded] = useState(false);

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
    }, []);

    useEffect(() => {
        if (fontsLoaded) {
            dispatch(getHome());
        }
    }, [fontsLoaded, dispatch]);


    if (!fontsLoaded) {
        return (
            <View>
            </View>
        );
    }

    const renderHomeItems = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")}>
                <View>
                    <View style={{ marginTop: 10 }}>
                        <Image style={styles.homeImg} source={require("../assets/image/homes/1.jpg")} />
                        <TouchableOpacity style={{padding:6,borderRadius:50,backgroundColor:"#1A1A1A", position: "absolute", right: 10, top: 10,}}>
                            <SvgHeart01 style={{ stroke: "white", fill: "none", width: 29, height: 29 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainCard}>
                        <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
                            <Text style={[styles.detailhome, { color: "#BBBBBB" }]}>{item.category}</Text>
                            <Text style={styles.detailhome}>·  {item.area} m²</Text>
                            <Text style={styles.detailhome}>{item.roomCount} otaq</Text>
                            <Text style={styles.detailhome}>{item.maxGuest} nəfər</Text>
                        </View>
                        <View>
                            <Text style={styles.priceTxt}>{item.price} AZN/gün</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 3 }}>
                            <SvgLocation style={{ width: 12, height: 20 }} />
                            <Text style={styles.addressTxt}>{item.address} q.</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
            <View style={{ marginHorizontal: 15, marginTop: 60 }}>
                <View style={{ width: "100%", backgroundColor: "#4D4D4D", padding: 12, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "95%" }}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <SvgChevronLeft />
                            <Text style={styles.headerText}>{filterName}</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <SvgFilter />
                            <SvgMap />
                        </View>
                    </View>
                </View>
                <FlatList
                    data={home}
                    renderItem={renderHomeItems}
                />
            </View>
        </SafeAreaView>
    )
}

export default FilterPage

const styles = StyleSheet.create({
    addressTxt: {
        color: "#BBBBBB",
        fontSize: 14,
        fontFamily: "Poppins-Regular"
    },
    priceTxt: {
        color: "white",
        fontSize: 19,
        fontFamily: "Poppins-SemiBold",
    },
    detailhome: {
        color: "white",
        fontFamily: "Poppins-Regular",
        fontSize: 14
    },
    mainCard: {
        backgroundColor: "#353535",
        paddingHorizontal: 10,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        gap: 1,
        height: 90
    },
    homeImg: {
        width: "100%",
        height: 190,
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins-Medium"
    }
})