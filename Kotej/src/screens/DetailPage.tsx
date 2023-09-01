import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Modal, FlatList, ScrollView, Linking } from 'react-native'
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


Font.loadAsync({
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
});


const HomeDetail = () => {

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
    console.log(location.latitude)
    const url = `https://maps.google.com/?q=${location.latitude},${location.longitude}`;
    console.log(url)

    Linking.openURL(url);
  }

  const handleCallButtonPress = () => {
    const phoneNumber = 'tel:0703044090';
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <ScrollView>
        <View>
          <Image style={{ width: "100%", height: 300, resizeMode: "cover" }} source={require("../assets/image/homes/1.jpg")} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.priceTxt}>128 AZN/gün</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: 5, gap: 8 }}>
              <Text style={styles.detailhome}>Villa</Text>
              <Text style={styles.detailhome}>106 m²</Text>
              <SvgDoors style={styles.doorSvg} />
              <Text style={styles.detailhome}>6 otaq</Text>
              <SvgGuest style={styles.guestSvg} />
              <Text style={styles.detailhome}>12 nəfər</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 4, marginTop: 7 }}>
            <SvgLocation style={{ width: 10, height: 20 }} />
            <Text style={styles.addressTxt}>Lerik rayonu, Hamarmeşə kəndi</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15, paddingVertical: 15 }}>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins-SemiBold" }}>Ətraflı</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 9, marginTop: 5, alignItems: "center" }}>
              <SvgDoors />
              <Text style={{ color: "white", fontSize: 17 }}>4 yataq otağı</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 5, marginTop: 5, alignItems: "center" }}>
              <SvgBathroom />
              <Text style={{ color: "white", fontSize: 17 }}>2 hamam otağı</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 11, marginTop: 5, alignItems: "center" }}>
              <SvgResizeSquareSvgrepoCom />
              <Text style={{ color: "white", fontSize: 17 }}>106 m²</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 5, marginTop: 5, alignItems: "center" }}>
              <SvgLandParcels />
              <Text style={{ color: "white", fontSize: 17 }}>5 sot</Text>
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
          <Text style={{ color: "white", fontSize: 16, fontFamily: "Poppins-Regular" }}>Həyətində müxtəlif meyvə ağacları var. Çox sakit yerdə yerləşir və dağın döşündə yeganə yol bu evə gəlir. Villaya əsas yoldanda gəlmək mümkündür. Villa ekoloji cəhətdən çox təmiz ərazıdə yerləşir və ev 360 dərəcə perimetri boyunca müşahidə-nəzarət kamerası ilə təchis olunub.</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15, marginTop: 15, height: 220 }}>
          <TouchableOpacity onPress={() => goMap()}>
            <MapView style={{ width: "100%", height: 120, borderRadius: 10 }}
              initialRegion={{
                latitude: 40.377195,
                longitude: 49.8513706,
                latitudeDelta: 0.050,
                longitudeDelta: 0.080,
              }}>

              <Marker
                coordinate={{
                  latitude: 40.377195,
                  longitude: 49.8513706
                }}
                // image={require("../assets/image/amenities/tv.png")}
                title="Marker Title"
                description="Marker Description"
              />
            </MapView>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.stickyContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#3FB51F", gap: 8, borderRadius: 8, width: "90%", justifyContent: "center", height: 50 }}>
          <SvgPhone />
          <TouchableOpacity onPress={handleCallButtonPress}>
            <Text style={{ color: "white", fontFamily: "Poppins-Regular", fontSize: 16 }}>Rezerv et</Text>
          </TouchableOpacity>
        </View>
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
                <SvgCloseMd onPress={toggleModal} />
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
    // backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // doorSvgs: {
  //   marginTop: 4
  // },
  // bathSvg: {
  //   marginTop: 1
  // },
  // airSvg: {
  //   marginTop: 3
  // },
  // squareSvg: {
  //   marginTop: 5
  // },
  // washSvg: {
  //   marginTop: 2
  // },
  swimSvg: {
    marginTop: 2
  },
  guestSvgs: {
    marginTop: 3
  },
  // landSvg: {
  //   marginTop: 0
  // },
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
    marginTop: 4
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