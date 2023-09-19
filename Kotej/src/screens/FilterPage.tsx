import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Modal, TextInput, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvgChevronLeft from '../icons/ChevronLeft'
import SvgFilter from '../icons/Filter'
import SvgMap from '../icons/Map'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/stores/store'
import * as Font from 'expo-font';
import { addToFavorite, getHome } from '../redux/slices/HomeSlices'
import SvgLocation from '../icons/Location'
import SvgHeart01 from '../icons/Heart01'
import { deleteFilterName } from '../redux/slices/RegionSlices'
import SvgCloseMd from '../icons/CloseMd'
import { decrement, increment } from '../redux/slices/RoomSlices'
import { setMaxPrice, setMinPrice } from '../redux/slices/PriceSlices'
import SvgDoors from '../icons/Doors'
import SvgMinus from '../icons/Minus'
import SvgPlus from '../icons/Plus'
import { rents } from '../data/rent'
import { addRentName } from '../redux/slices/RentSlices'
import SvgCheck from '../icons/Check'


const FilterPage = ({ navigation }) => {
    const { home, favorites } = useSelector((state: StateType) => state.HomeSlice)
    const { rentName } = useSelector((state: StateType) => state.RentSlice)
    const { filterName } = useSelector((state: StateType) => state.RegionSlice)
    const dispatch = useDispatch<AppDispatch>()
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const { count } = useSelector((state: StateType) => state.RoomSlice)
    const { minPrice, maxPrice } = useSelector((state: StateType) => state.PriceSlice)
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const handleMinPriceChange = (text: any) => {
        const price = text === "" ? 0 : parseFloat(text);
        dispatch(setMinPrice(price));
    };



    const handleMaxPriceChange = (text: any) => {
        const price = text === "" ? 0 : parseFloat(text);
        dispatch(setMaxPrice(price));
    };

    const dataFind = home.filter((c: any) => c.region == filterName)
    const filterData = count === 0 ? dataFind : dataFind.filter((c: any) => c.roomCount === count);


    const filteredProducts = filterData.filter((item: any) => {
        if (minPrice === 0 && maxPrice === 0) {
            return true;
        } else if (minPrice === 0) {
            return item.price <= maxPrice;
        } else if (maxPrice === 0) {
            return item.price >= minPrice;
        } else {
            return item.price >= minPrice && item.price <= maxPrice;
        }
    });

    const allFilteredData = rentName == "" ? filteredProducts : filteredProducts.filter((c: any) => c.rent == rentName)




    const handleClick = () => {
        dispatch(deleteFilterName())
        navigation.navigate("SearchScreen")
    }

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


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
            dispatch(getHome());
        }
    }, [fontsLoaded, dispatch]);



    const renderHomeItems = ({ item }: any) => {
        const isItemInFavorites = favorites.some((favoriteItem: any) => favoriteItem._id === item._id);
        return (
            <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")}>
                <View>
                    <View style={{ marginTop: 15 }}>
                        <Image style={styles.homeImg} source={{ uri: item.photos }} />
                        <TouchableOpacity onPress={() => dispatch(addToFavorite(item))} style={{ padding: 6, borderRadius: 50, backgroundColor: "#1A1A1A", position: "absolute", right: 10, top: 10 }}>
                            <SvgHeart01 style={{ stroke: isItemInFavorites ? "red" : "white", fill: isItemInFavorites ? "red" : "none", width: 29, height: 29 }} />
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
                            <Text style={styles.priceTxt}>{item.price} AZN/ {item.rent}</Text>
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

    const renderRentItem = ({ item, index }: any) => {
        const isSelected = index === selectedItemIndex;


        return (
            <View>
                <Pressable onPress={() => {
                    dispatch(addRentName(item.type));
                    setSelectedItemIndex(index);
                }}>
                    <View style={{ flexDirection: "row", gap: 10, marginTop: 10, alignItems: "center" }}>
                        {
                            isSelected ?
                                <View style={{ width: 30, height: 30, backgroundColor: "#8314E6", borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <SvgCheck />
                                </View>
                                :
                                <View style={{ width: 30, height: 30, borderWidth: 2, borderColor: "#838383", borderRadius: 5 }}></View>

                        }
                        <Text style={{ color: "white", fontSize: 18 }}>{item.name}</Text>
                    </View>
                </Pressable>
            </View>
        )
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
            <View style={{ marginHorizontal: 15, marginTop: 60 }}>
                <View style={{ width: "100%", backgroundColor: "#4D4D4D", padding: 12, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "95%" }}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <TouchableOpacity
                                onPress={() => handleClick()}>
                                <SvgChevronLeft style={{ marginTop: 2 }} />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>{filterName}</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <SvgFilter />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* <View style={{ marginTop: 20, marginHorizontal: 3, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                        <View style={{ width: 130, height: 35, borderRadius: 8, borderColor: "white", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={handleSortUcuzClick}>
                                <Text style={{ color: "white", fontSize: 14, fontFamily: "Poppins-Regular" }}>
                                    Əvvəlcə ucuz
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 130, height: 35, borderRadius: 8, borderColor: "white", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={handleSortBahaliClick}>
                                <Text style={{ color: "white", fontSize: 14, fontFamily: "Poppins-Regular" }}>
                                    Əvvəlcə bahalı
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ color: "white", fontSize: 16, fontFamily: "Poppins-SemiBold" }}>{allFilteredData.length} <Text style={{ color: "#A9A9A9" }}>elan</Text></Text>
                </View> */}
                <FlatList
                    data={allFilteredData}
                    renderItem={renderHomeItems}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={{ marginHorizontal: 15 }}>
                        <View style={{ marginTop: 10 }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <SvgCloseMd style={{ width: 27, height: 27 }} onPress={toggleModal} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: "white", fontSize: 30, fontFamily: "Poppins-SemiBold" }}>Filter</Text>
                        </View>
                        <View style={[styles.lines, { marginTop: 10 }]}></View>
                        <View style={{ marginHorizontal: 5 }}>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ color: "#8B8B8B", fontSize: 16, fontFamily: "Poppins-Medium" }}>
                                    Qiymət
                                </Text>
                            </View>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                                <View style={{ width: "48%", borderWidth: 1, borderColor: "white", padding: 5, borderRadius: 7 }}>
                                    <TextInput
                                        onChangeText={handleMinPriceChange}
                                        value={minPrice.toString()}
                                        keyboardType="numeric"
                                        style={{ color: "white", fontSize: 18, paddingLeft: 8 }}
                                    />
                                </View>
                                <View style={{ width: "48%", borderWidth: 1, borderColor: "white", padding: 5, borderRadius: 7 }}>
                                    <TextInput
                                        onChangeText={handleMaxPriceChange}
                                        value={maxPrice.toString()}
                                        keyboardType="numeric"
                                        style={{ color: "white", fontSize: 18, paddingLeft: 8 }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.lines, { marginTop: 30 }]}></View>
                        <View style={{ marginTop: 10 }}>
                            <View>
                                <Text style={{ color: "#8B8B8B", fontSize: 16, fontFamily: "Poppins-Medium" }}>
                                    Kirayə müddəti
                                </Text>
                            </View>
                            <FlatList
                                data={rents}
                                renderItem={renderRentItem}
                            />
                        </View>
                        <View style={[styles.lines, { marginTop: 30 }]}></View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, justifyContent: "space-between", marginHorizontal: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                <TouchableOpacity>
                                    <SvgDoors style={{
                                        width: 18,
                                        height: 18
                                    }} />
                                </TouchableOpacity>

                                <Text style={{ color: "white", fontSize: 18, fontFamily: "Poppins-Medium", marginTop: 3 }}>Otaq sayı</Text>

                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "32%", justifyContent: "space-between" }}>
                                <View style={{ width: 37, height: 37, borderWidth: 1, borderColor: count >= 1 ? "#8314E6" : "#838383", borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => dispatch(decrement
                                        ())}>
                                        <SvgMinus style={{
                                            stroke: count >= 1 ? "#8314E6" : "#838383", fill: count >= 1 ? "#8314E6" : "#838383"
                                        }} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: "white", fontSize: 18, fontFamily: "Poppins-Regular" }}>{count}</Text>
                                </View>
                                <View style={{ width: 37, height: 37, borderWidth: 1, borderColor: "#8314E6", borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => dispatch(increment
                                        ())}>
                                        <SvgPlus style={{
                                            stroke: "#8314E6", fill: "#8314E6"
                                        }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.lines, { marginTop: 15 }]}></View>

                    </View>
                </SafeAreaView>
            </Modal>

        </SafeAreaView>
    )
}

export default FilterPage

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lines: {
        width: "100%",
        height: 1,
        backgroundColor: "#2F2F2F",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#141414',
        marginTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
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