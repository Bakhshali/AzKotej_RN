import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import SvgDoors from '../icons/Doors'
import SvgGuest from '../icons/Guest'

import * as Font from 'expo-font';
import SvgLocation from '../icons/Location';
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass';
import SvgBathroom from '../icons/Bathroom';
import SvgResizeSquareSvgrepoCom from '../icons/ResizeSquareSvgrepoCom';
import SvgLandParcels from '../icons/LandParcels';
import SvgSwimming from '../icons/Swimming';
import SvgWifiHigh from '../icons/WifiHigh';
import SvgWashing from '../icons/Washing';
import SvgTv from '../icons/Tv';
import SvgPhone from '../icons/Phone';

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

  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <View>
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
            <View style={{ width: "50%", flexDirection: "row", gap: 9, marginTop: 5 }}>
              <SvgDoors style={styles.doorSvgs} />
              <Text style={{ color: "white", fontSize: 17 }}>4 yataq otağı</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 5, marginTop: 5 }}>
              <SvgBathroom style={styles.bathSvg} />
              <Text style={{ color: "white", fontSize: 17 }}>2 hamam otağı</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 11, marginTop: 5 }}>
              <SvgResizeSquareSvgrepoCom style={styles.squareSvg} />
              <Text style={{ color: "white", fontSize: 17 }}>106 m²</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 5, marginTop: 5 }}>
              <SvgLandParcels style={styles.landSvg} />
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
            <View style={{ width: "50%", flexDirection: "row", gap: 6, marginTop: 5 }}>
              <SvgBathroom style={styles.bathSvg} />
              <Text style={{ color: "white", fontSize: 17 }}>Kondisaner</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 5 }}>
            <View style={{ width: "50%", flexDirection: "row", gap: 11, marginTop: 5 }}>
              <SvgWashing style={styles.washSvg} />
              <Text style={{ color: "white", fontSize: 17 }}>Paltaryuyan</Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", gap: 8, marginTop: 5 }}>
              <SvgTv style={styles.tvsvg} />
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
      </View>
      <View style={styles.stickyContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#3FB51F", gap: 8, borderRadius: 8, width: "90%", justifyContent: "center", height: 50 }}>
          <SvgPhone />
          <Text style={{ color: "white", fontFamily: "Poppins-Regular", fontSize: 16 }}>Rezerv et</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          {/* Modal içeriği */}
          <Text>Modal Content</Text>
        </View>
      </Modal>
    </View>
  )
}

export default HomeDetail

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Modal arkaplan rengi
  },
  stickyContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doorSvgs: {
    marginTop: 4
  },
  bathSvg: {
    marginTop: 1
  },
  squareSvg: {
    marginTop: 5
  },
  washSvg: {
    marginTop: 2
  },
  swimSvg: {
    marginTop: 2
  },
  guestSvgs: {
    marginTop: 3
  },
  landSvg: {
    marginTop: 0
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