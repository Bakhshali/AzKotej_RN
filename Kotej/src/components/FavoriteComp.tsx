import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvgChevronLeft from '../icons/ChevronLeft'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/stores/store'
import * as Font from 'expo-font';
import { addToFavorite, getHome } from '../redux/slices/HomeSlices'
import SvgHeart01 from '../icons/Heart01'
import SvgLocation from '../icons/Location'

const FavoriteComp = ({ navigation }) => {

  const { favorites } = useSelector((state: StateType) => state.HomeSlice)
  const dispatch = useDispatch<AppDispatch>()
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
    const isItemInFavorites = favorites.some((favoriteItem: any) => favoriteItem._id === item._id);
    return (
      <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")}>
        <View>
          <View style={{ marginTop: 15 }}>
            <Image style={styles.homeImg} source={{ uri: item.photos }} />
            <TouchableOpacity onPress={() => dispatch(addToFavorite(item))} style={{ padding: 6, borderRadius: 50, backgroundColor: "#1A1A1A", position: "absolute", right: 10, top: 10 }}>
              <SvgHeart01 style={{ stroke: isItemInFavorites ? "red" : "white", fill: isItemInFavorites ? "red" : "white", width: 29, height: 29 }} />
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




  return (
    <View style={{ flex: 1, backgroundColor: "#141414" }}>
      <View style={{ marginTop: 60, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "65%" }}>
          <SvgChevronLeft />
          <Text style={{ marginTop: 3, color: "white", fontSize: 19, fontFamily: "Poppins-Medium", textAlign: "center" }}>
            Seçilmişlər
          </Text>
        </View>
        <View>
          {
            favorites.length >= 1 ?
              <FlatList
                data={favorites}
                renderItem={renderHomeItems}
              />
              :
              <View>
                <Text></Text>
              </View>
          }
        </View>
      </View>
    </View>
  )
}

export default FavoriteComp

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "#353535",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    gap: 1,
    height: 90
  },
  priceTxt: {
    color: "white",
    fontSize: 19,
    fontFamily: "Poppins-SemiBold",
  },
  addressTxt: {
    color: "#BBBBBB",
    fontSize: 14,
    fontFamily: "Poppins-Regular"
  },
  detailhome: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 14
  },
  homeImg: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
})