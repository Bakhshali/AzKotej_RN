import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Modal, FlatList, ScrollView, Linking, Animated } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';
import { amenity } from '../data/amenities';
// Svgs
import SvgGuest from '../icons/Guest'
import SvgDoors from '../icons/Doors'
import SvgLocation from '../icons/Location';
import SvgBathroom from '../icons/Bathroom';
import SvgResizeSquareSvgrepoCom from '../icons/ResizeSquareSvgrepoCom';
import SvgLandParcels from '../icons/LandParcels';
import SvgWifiHigh from '../icons/WifiHigh';
import SvgWashing from '../icons/Washing';
import SvgTv from '../icons/Tv';
import SvgPhone from '../icons/Phone';
import SvgCloseMd from '../icons/CloseMd';
import SvgConditioner from '../icons/Conditioner';
import MapView, { Marker } from 'react-native-maps';
import SvgChevronLeft from '../icons/ChevronLeft';
import SvgHeart01 from '../icons/Heart01';
import SvgShareIOsExport from '../icons/ShareIOsExport';
import { addToFavorite } from '../redux/slices/HomeSlices';


Font.loadAsync({
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
});



const HomeDetail = ({ navigation, route }) => {

  const item = route.params;


  let AnimatedHeaderValue = new Animated.Value(0)
  const headerMaxHeight = 150
  const headerMinHeight = 50

  const animateHeaderHeigth = AnimatedHeaderValue.interpolate({
    inputRange: [0, headerMaxHeight - headerMinHeight],
    outputRange: [headerMaxHeight, headerMinHeight],
    extrapolate: "clamp"
  })

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const amenityItems = ({ item }: any) => {
    return (
      <View>
        <View style={{ flexDirection: "row", gap: 8, marginTop: 12, marginBottom: 12 }}>
          <Image style={{ width: 16, height: 16, marginTop: 2 }} source={item.image} />
          <Text style={{ color: "white", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.name}</Text>
        </View>
        <View style={styles.lines}></View>
      </View>
    )
  }

  const goMap = () => {
    const location = {
      longitude: 49.8513706,
      latitude: 40.377195
    };
    const url = `https://maps.google.com/?q=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  }



  const handleCallButtonPress = () => {
    const phoneNumber = 'tel:0703044090';
    Linking.openURL(phoneNumber);
  };

  // const dispatch = useDispatch<AppDispatch>()
  // const { favorites } = useSelector((state: StateType) => state.HomeSlice)

  // console.log(favorites);

  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <ScrollView scrollEventThrottle={16} onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
        { useNativeDriver: false }
      )}>
        <View>
          <Image style={styles.imageMain} source={{ uri: item.photos }} />
          <Animated.View style={{ position: "absolute", top: 50, left: 20, flexDirection: "row", justifyContent: "space-between", width: "90%", height: animateHeaderHeigth }}>
            <View>
              <TouchableOpacity style={{}} onPress={() => navigation.navigate("HomeScrn")}>
                <View style={{ backgroundColor: "#2F2F2F", borderRadius: 50, width: 38, height: 38, flexDirection: "row", justifyContent: "center", alignItems: "center" }}><SvgChevronLeft /></View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              {/* <View>
                <TouchableOpacity style={{}} onPress={() => dispatch(addToFavorite(item))}>
                  <View style={{ backgroundColor: "#2F2F2F", borderRadius: 50, width:38,height:38,flexDirection:"row",justifyContent:"center",alignItems:"center"}}><SvgHeart01 style={{
                     fill: favorites.find((c: any) => c.id == item.id) ? "#DF1717" : "none",
                     stroke: favorites.find((c: any) => c.id == item.id) ? "#DF1717" : "white",
                    width: 26,
                    height: 26
                  }} /></View>
                </TouchableOpacity>
              </View> */}
              <View>
                {/* <TouchableOpacity>
                  <View style={{ backgroundColor: "#2F2F2F", borderRadius: 50, width:38,height:38,flexDirection:"row",justifyContent:"center",alignItems:"center"}}><SvgShareIOsExport /></View>
                </TouchableOpacity> */}
              </View>
            </View>
          </Animated.View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.priceTxt}>{item.price} AZN/gün</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: 5, gap: 8 }}>
              <Text style={styles.detailhome}>Villa</Text>
              <Text style={styles.detailhome}>{item.area} m²</Text>
              <SvgDoors style={styles.doorSvg} />
              <Text style={styles.detailhome}>{item.roomCount} otaq</Text>
              <SvgGuest style={styles.guestSvg} />
              <Text style={styles.detailhome}>{item.maxGuest} nəfər</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 4, marginTop: 7 }}>
            <SvgLocation style={{ width: 10, height: 20 }} />
            <Text style={styles.addressTxt}>{item.region}, {item.address}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15, paddingVertical: 15 }}>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins-SemiBold" }}>Ətraflı</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 9, marginTop: 5, alignItems: "center" }}>
              <SvgDoors style={{
                width: 13,
                height: 13
              }} />
              <Text style={{ color: "white", fontSize: 17 }}>{item.bedRoom} yataq otağı</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 5, marginTop: 5, alignItems: "center" }}>
              <SvgBathroom />
              <Text style={{ color: "white", fontSize: 17 }}>{item.bathRoom} hamam otağı</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 11, marginTop: 5, alignItems: "center" }}>
              <SvgResizeSquareSvgrepoCom />
              <Text style={{ color: "white", fontSize: 17 }}>{item.area} m²</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 5, marginTop: 5, alignItems: "center" }}>
              <SvgLandParcels />
              <Text style={{ color: "white", fontSize: 17 }}>{item.land} sot</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15, paddingTop: 15, paddingBottom: 5 }}>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins-SemiBold" }}>Avadanlıqlar</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 9, marginTop: 5 }}>
              <SvgWifiHigh />
              <Text style={{ color: "white", fontSize: 17 }}>Wifi</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 8, marginTop: 5, alignItems: "center" }}>
              <SvgConditioner />
              <Text style={{ color: "white", fontSize: 17 }}>Kondisaner</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 11, marginTop: 5, alignItems: "center" }}>
              <SvgWashing />
              <Text style={{ color: "white", fontSize: 17 }}>Paltaryuyan</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 9, marginTop: 5, alignItems: "center" }}>
              <SvgTv />
              <Text style={{ color: "white", fontSize: 17 }}>TV</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={{ color: "#2559BA", fontSize: 17, fontFamily: "Poppins-Regular" }}>Daha ətraflı</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Text style={{ color: "white", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.description}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15, marginTop: 15, height: 220 }}>
          <TouchableOpacity onPress={() => goMap()}>
            <MapView style={{ width: "100%", height: 120, borderRadius: 10 }}
              initialRegion={{
                latitude: item.latitude,
                longitude: item.longtitude,
                latitudeDelta: 0.050,
                longitudeDelta: 0.080,
              }}>

              <Marker
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longtitude
                }}
                title="Marker Title"
                description="Marker Description"
              />
            </MapView>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleCallButtonPress} style={styles.stickyContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#3FB51F", gap: 8, borderRadius: 8, width: "90%", justifyContent: "center", height: 50 }}>
          <SvgPhone />
          <Text style={{ color: "white", fontFamily: "Poppins-Regular", fontSize: 16 }}>Rezerv et</Text>
        </View>
      </TouchableOpacity>
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
              <Text style={{ color: "white", fontSize: 30, fontFamily: "Poppins-SemiBold" }}>Avadanlıqlar</Text>
            </View>
            <View style={[styles.lines, { marginTop: 10 }]}></View>
            <FlatList
              data={amenity}
              renderItem={amenityItems}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </SafeAreaView>
      </Modal>

    </View>
  )
}

export default HomeDetail

const styles = StyleSheet.create({
  heartIcon: {

  },
  imageMain: {
    width: "100%",
    height: 300,
    resizeMode: "cover"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#141414',
    marginTop: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  stickyContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swimSvg: {
    marginTop: 2
  },
  guestSvgs: {
    marginTop: 3
  },
  tvsvg: {
    marginTop: 2
  },
  line: {
    width: "100%",
    height: 5,
    backgroundColor: "#3E3E3E",
    marginTop: 10
  },

  lines: {
    width: "100%",
    height: 1,
    backgroundColor: "#2F2F2F",
  },

  priceTxt: {
    color: "white",
    fontSize: 25,
    fontFamily: "Poppins-SemiBold",
    marginTop: 10
  },

  doorSvg: {
    marginTop: 4,
    width: 13,
    height: 13

  },
  guestSvg: {
    marginTop: 3
  },
  container: {
    marginHorizontal: 15
  },
  detailhome: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 15
  },
  addressTxt: {
    color: "#BBBBBB",
    fontSize: 14,
    fontFamily: "Poppins-Regular"
  }
})