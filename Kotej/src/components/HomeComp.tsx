import { StyleSheet, Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass'
import SvgLocation from '../icons/Location';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../redux/stores/store';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { getHome } from '../redux/slices/HomeSlices';
import { addFilterName, getData } from '../redux/slices/RegionSlices';

const HomeComp = ({ navigation }) => {

  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: StateType) => state.RegionSlice)
  const { home } = useSelector((state: StateType) => state.HomeSlice)
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
      dispatch(getData())
    }
  }, [fontsLoaded, dispatch]);


  if (!fontsLoaded) {
    return (
      <View>
      </View>
    );
  }



  const renderItemHome = ({ item }: any) => {

    return (
      <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", item)}>
        <View>
          <View style={{ marginTop: 10 }}>
            <Image style={styles.homeImg} source={{ uri: item.photos }} />
          </View>
          <View style={styles.mainCard}>
            <View style={{ flexDirection: "row", gap: 8, marginTop: 5 }}>
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
              <Text style={styles.addressTxt}>{item.region}, {item.address}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const regionItem = ({ item }: any) => {
    const handleRegion = () => {
      dispatch(addFilterName(item.name));
      navigation.navigate("RegionScreen")
    }
    return (
      <TouchableOpacity onPress={handleRegion}>
        <Image style={styles.regionImg} source={{ uri: item.image }} />
        <Text style={styles.regionTxt}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Image style={{ width: 120, height: 120 }} source={require("../assets/image/logo/2.png")} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Hara getmək istəyirsən?</Text>
              <SvgSearchMagnifyingGlass style={{ fill: "none", stroke: "#C7C7C7", position: "absolute", top: 13, left: 20 }} />
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <FlatList
              data={data}
              horizontal
              renderItem={regionItem}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            />
          </View>
          <View>
            <View style={{ marginTop: 25, marginHorizontal: 5 }}>
              <Text style={styles.firstTitle}>Ən çox bəyənilən</Text>
            </View>
            <View>
              <FlatList
                horizontal
                data={home}
                renderItem={renderItemHome}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={[styles.firstTitle, { marginTop: 15 }]}>Hamısı</Text>
            </View>
            <View style={styles.boxContainer} >
              {
                home.map((item: any, index: any) => (
                  <View key={index} style={styles.box} >
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
                  </View>
                ))
              }
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeComp;

const styles = StyleSheet.create({
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
    marginHorizontal: 12
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
