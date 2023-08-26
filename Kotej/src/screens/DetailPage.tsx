import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import SvgDoors from '../icons/Doors'
import SvgGuest from '../icons/Guest'

import * as Font from 'expo-font';
import SvgLocation from '../icons/Location';
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass';
import SvgBathroom from '../icons/Bathroom';

Font.loadAsync({
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
});


const HomeDetail = () => {


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
          <View style={{ flexDirection: "row", gap: 4, marginTop: 5 }}>
            <SvgLocation style={{ width: 12, height: 20 }} />
            <Text style={styles.addressTxt}>Lerik rayonu, Hamarmeşə kəndi</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins-SemiBold" }}>Ətraflı</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
            <View style={{flexDirection:"row",gap:9,marginTop:5}}>
              <SvgDoors style={styles.doorSvgs} />
              <Text style={{ color: "white",fontSize:17 }}>4 yataq otağı</Text>
            </View>
            <View style={{flexDirection:"row",gap:5,marginTop:5}}>
              <SvgGuest style={styles.guestSvgs} />
              <Text style={{ color: "white",fontSize:17 }}>12 nəfər (max)</Text>
            </View>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",marginTop:5}}>
            <View style={{flexDirection:"row",gap:5,marginTop:5}}>
              <SvgBathroom style={styles.bathSvg} />
              <Text style={{ color: "white",fontSize:17 }}>2 hamam otağı</Text>
            </View>
            <View style={{flexDirection:"row",gap:5,marginTop:5}}>
              <SvgGuest style={styles.guestSvgs} />
              <Text style={{ color: "white",fontSize:17 }}>Villa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeDetail

const styles = StyleSheet.create({
  doorSvgs:{
    marginTop: 4
  },
  bathSvg:{
    marginTop:1
  },
  guestSvgs:{
    marginTop: 3
  },
  line: {
    width: "100%",
    height: 2,
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
    fontSize: 15,
    fontFamily: "Poppins-Regular"
  }
})