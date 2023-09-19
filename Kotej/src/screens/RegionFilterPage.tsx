import { StyleSheet, Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass'
import SvgLocation from '../icons/Location';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../redux/stores/store';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { getHome } from '../redux/slices/HomeSlices';
import { deleteFilterName, getData } from '../redux/slices/RegionSlices';
import SvgChevronLeft from '../icons/ChevronLeft';

const RegionFilterPage = ({ navigation }) => {

  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: StateType) => state.RegionSlice)
  const { home } = useSelector((state: StateType) => state.HomeSlice)
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { filterName } = useSelector((state: StateType) => state.RegionSlice)

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);


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

  const filterRegion = home.filter((c: any) => c.region == filterName)

  useEffect(() => {
    if (fontsLoaded) {
      dispatch(getHome());
      dispatch(getData())
    }
  }, [fontsLoaded, dispatch]);


  // if (!fontsLoaded) {
  //   return (
  //     <View>
  //     </View>
  //   );
  // }

  const handleDelete = () => {
    dispatch(deleteFilterName())
    navigation.navigate("Tabscmp")
  }


  const [sortedData, setSortedData] = useState(filterRegion);

  const [ascendingOrderUcuz, setAscendingOrderUcuz] = useState(false);
  const [ascendingOrderBahali, setAscendingOrderBahali] = useState(false);


  const handleSortUcuzClick = () => {
    const sorted = filterRegion.slice().sort((a: any, b: any) => a.price - b.price)
    setSortedData(sorted);
    setAscendingOrderUcuz(!ascendingOrderUcuz);
  };

  const handleSortBahaliClick = () => {
    const sorted = filterRegion.slice().sort((a: any, b: any) => b.price - a.price);

    setSortedData(sorted);
    setAscendingOrderBahali(!ascendingOrderBahali);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: "100%", backgroundColor: "#4D4D4D", padding: 12, borderRadius: 10, marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "95%" }}>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <TouchableOpacity onPress={handleDelete}>
                  <SvgChevronLeft style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{filterName}</Text>
              </View>
            </View>

          </View>
          <View style={{ marginTop: 20, marginHorizontal: 3, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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
          </View>
          <View>
            <View style={styles.boxContainer} >
              {
                sortedData.map((item: any, index: any) => (
                  <TouchableOpacity onPress={()=>navigation.navigate("DetailScreen",item)} key={index} style={styles.box} >
                    <View style={{ marginTop: 10 }}>
                      <Image style={styles.homeImgAll} source={{ uri: item.photos }} />
                    </View>

                    <View style={styles.mainCardAll}>
                      <View style={{ marginTop: 5 }}>
                        <Text style={styles.priceTxtAll}>{item.price} AZN/gün</Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 8 }}>
                        <Text style={styles.detailhomeAll}>{item.area} m²</Text>
                        <Text style={styles.detailhomeAll}>{item.roomCount} otaq</Text>
                        <Text style={styles.detailhomeAll}>{item.maxGuest} nəfər</Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 3, paddingBottom: 5 }}>
                        <SvgLocation style={{ width: 10, height: 18 }} />
                        <Text style={[styles.addressTxt, { fontSize: 13 }]}>{item.region}, {item.address} k.</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegionFilterPage;

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-Medium"
  },
  box: {
    width: "48%",
    marginTop: 10
  },
  boxContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  addressTxt: {
    color: "#BBBBBB",
    fontSize: 14,
    fontFamily: "Poppins-Regular"
  },
  priceTxt: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  priceTxtAll: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
  },
  mainCard: {
    backgroundColor: "#353535",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    gap: 1,
    height: 90
  },
  mainCardAll: {
    backgroundColor: "#353535",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    gap: 2
  },
  detailhome: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 13
  },
  detailhomeAll: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 12
  },
  homeImg: {
    width: 300,
    height: 170,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  homeImgAll: {
    width: "100%",
    height: 130,
    resizeMode: "cover",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  firstTitle: {
    color: "white",
    fontSize: 17,
    fontFamily: "Poppins-Medium"
  },
  regionTxt: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
    fontFamily: "Poppins-Medium"
  },
  regionImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: 12,
    marginTop: 40
  },
  inputText: {
    fontFamily: "Poppins-Medium",
    fontSize: 19,
    color: "#C7C7C7",
    paddingLeft: 10
  },
  inputView: {
    backgroundColor: "#393939",
    borderRadius: 7,
    padding: 12,
    justifyContent: "center",
    flexDirection: "row"
  }
});
