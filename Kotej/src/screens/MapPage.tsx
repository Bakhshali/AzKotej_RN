import { StyleSheet, Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList, Linking } from 'react-native'
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass'
import SvgLocation from '../icons/Location';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../redux/stores/store';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { getHome } from '../redux/slices/HomeSlices';
import { deleteFilterName, getData } from '../redux/slices/RegionSlices';
import SvgChevronLeft from '../icons/ChevronLeft';
import MapView from 'react-native-maps';

const MapPage = ({ navigation }) => {

  const dispatch = useDispatch<AppDispatch>()
  const { home } = useSelector((state: StateType) => state.HomeSlice)

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  console.log(home);
  

  const goMap = () => {
    const location = {
      longitude: 49.8513706,
      latitude: 40.377195
    };
    const url = `https://maps.google.com/?q=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  }




  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginHorizontal: 15, marginTop: 15, height: 220 }}>
        <TouchableOpacity onPress={() => goMap()}>
          {/* <MapView style={{ width: "100%", height: 120, borderRadius: 10 }}
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
          </MapView> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default MapPage;

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
