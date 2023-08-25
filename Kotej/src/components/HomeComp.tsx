import { StyleSheet, Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native'
import SvgSearchMagnifyingGlass from '../icons/SearchMagnifyingGlass'

import * as Font from 'expo-font';
import SvgLocation from '../icons/Location';

Font.loadAsync({
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
});

const HomeComp = () => {

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Image style={{ width: 120, height: 120 }} source={require("../assets/image/logo/2.png")} />
          </View>
          <TouchableOpacity>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Hara getmək istəyirsən?</Text>
              <SvgSearchMagnifyingGlass style={{ fill: "none", stroke: "#C7C7C7", position: "absolute", top: 13, left: 20 }} />
            </View>
          </TouchableOpacity>
          <ScrollView horizontal={true}>
            <View style={{ marginTop: 30, flexDirection: "row", gap: 25 }}>
              <View>
                <Image style={styles.regionImg} source={require("../assets/image/regions/baku.jpg")} />
                <Text style={styles.regionTxt}>Bakı</Text>
              </View>
              <View>
                <Image style={styles.regionImg} source={require("../assets/image/regions/qebele.jpg")} />
                <Text style={styles.regionTxt}>Qəbələ</Text>
              </View>
              <View>
                <Image style={styles.regionImg} source={require("../assets/image/regions/lerik.jpg")} />
                <Text style={styles.regionTxt}>Lerik</Text>
              </View>
              <View>
                <Image style={styles.regionImg} source={require("../assets/image/regions/gence.jpg")} />
                <Text style={styles.regionTxt}>Gəncə</Text>
              </View>
              <View>
                <Image style={styles.regionImg} source={require("../assets/image/regions/quba.jpg")} />
                <Text style={styles.regionTxt}>Quba</Text>
              </View>
              <View>
                <Image style={styles.regionImg} source={require("../assets/image/regions/seki.jpg")} />
                <Text style={styles.regionTxt}>Şəki</Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <View style={{ marginTop: 25, marginHorizontal: 5 }}>
              <Text style={styles.firstTitle}>Ən çox bəyənilən</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row", gap: 15 }}>
                <View>
                  <View style={{ marginTop: 10 }}>
                    <Image style={styles.homeImg} source={require("../assets/image/homes/1.jpg")} />
                  </View>
                  <View style={styles.mainCard}>
                    <View style={{ flexDirection: "row", gap: 8, marginTop: 5 }}>
                      <Text style={[styles.detailhome, { color: "#BBBBBB" }]}>Villa</Text>
                      <Text style={styles.detailhome}>·  106 m²</Text>
                      <Text style={styles.detailhome}>6 otaq</Text>
                      <Text style={styles.detailhome}>12 nəfər</Text>
                    </View>
                    <View>
                      <Text style={styles.priceTxt}>128 AZN/gün</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      <SvgLocation style={{ width: 12, height: 20 }} />
                      <Text style={styles.addressTxt}>Bakı, Bilgəh q.</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{ marginTop: 10 }}>
                    <Image style={styles.homeImg} source={require("../assets/image/homes/2.jpg")} />
                  </View>
                  <View style={styles.mainCard}>
                    <View style={{ flexDirection: "row", gap: 8, marginTop: 5 }}>
                      <Text style={[styles.detailhome, { color: "#BBBBBB" }]}>Villa</Text>
                      <Text style={styles.detailhome}>·  175 m²</Text>
                      <Text style={styles.detailhome}>7 otaq</Text>
                      <Text style={styles.detailhome}>15 nəfər</Text>
                    </View>
                    <View>
                      <Text style={styles.priceTxt}>198 AZN/gün</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      <SvgLocation style={{ width: 12, height: 20 }} />
                      <Text style={styles.addressTxt}>Lerik, Hamarmeşə k.</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{ marginTop: 10 }}>
                    <Image style={styles.homeImg} source={require("../assets/image/homes/3.jpg")} />
                  </View>
                  <View style={styles.mainCard}>
                    <View style={{ flexDirection: "row", gap: 8, marginTop: 5 }}>
                      <Text style={[styles.detailhome, { color: "#BBBBBB" }]}>Villa</Text>
                      <Text style={styles.detailhome}>·  96 m²</Text>
                      <Text style={styles.detailhome}>2 otaq</Text>
                      <Text style={styles.detailhome}>4 nəfər</Text>
                    </View>
                    <View>
                      <Text style={styles.priceTxt}>215 AZN/gün</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      <SvgLocation style={{ width: 12, height: 20 }} />
                      <Text style={styles.addressTxt}>Quba, Xınalıq k.</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View>
            <View>
              <Text style={[styles.firstTitle, { marginTop: 15 }]}>Hamısı</Text>
            </View>
            <View style={styles.boxContainer} >
              <View style={styles.box} >
                <View style={{ marginTop: 10 }}>
                  <Image style={styles.homeImgAll} source={require("../assets/image/homes/3.jpg")} />
                </View>
                <View style={styles.mainCardAll}>
                  <View style={{ marginTop: 5 }}>
                    <Text style={styles.priceTxtAll}>215 AZN/gün</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <Text style={styles.detailhomeAll}>96 m²</Text>
                    <Text style={styles.detailhomeAll}>2 otaq</Text>
                    <Text style={styles.detailhomeAll}>4 nəfər</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 3, paddingBottom: 5 }}>
                    <SvgLocation style={{ width: 10, height: 18 }} />
                    <Text style={[styles.addressTxt, { fontSize: 13 }]}>Quba, Xınalıq k.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.box}>
                <View style={{ marginTop: 10 }}>
                  <Image style={styles.homeImgAll} source={require("../assets/image/homes/2.jpg")} />
                </View>
                <View style={styles.mainCardAll}>
                  <View style={{ marginTop: 5 }}>
                    <Text style={styles.priceTxtAll}>215 AZN/gün</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <Text style={styles.detailhomeAll}>96 m²</Text>
                    <Text style={styles.detailhomeAll}>2 otaq</Text>
                    <Text style={styles.detailhomeAll}>4 nəfər</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 3, paddingBottom: 5 }}>
                    <SvgLocation style={{ width: 10, height: 18 }} />
                    <Text style={[styles.addressTxt, { fontSize: 13 }]}>Quba, Xınalıq k.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.box}>
                <View style={{ marginTop: 10 }}>
                  <Image style={styles.homeImgAll} source={require("../assets/image/homes/1.jpg")} />
                </View>
                <View style={styles.mainCardAll}>
                  <View style={{ marginTop: 5 }}>
                    <Text style={styles.priceTxtAll}>215 AZN/gün</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <Text style={styles.detailhomeAll}>96 m²</Text>
                    <Text style={styles.detailhomeAll}>2 otaq</Text>
                    <Text style={styles.detailhomeAll}>4 nəfər</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 3, paddingBottom: 5 }}>
                    <SvgLocation style={{ width: 10, height: 18 }} />
                    <Text style={[styles.addressTxt, { fontSize: 13 }]}>Quba, Xınalıq k.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.box}>
                <View style={{ marginTop: 10 }}>
                  <Image style={styles.homeImgAll} source={require("../assets/image/homes/3.jpg")} />
                </View>
                <View style={styles.mainCardAll}>
                  <View style={{ marginTop: 5 }}>
                    <Text style={styles.priceTxtAll}>215 AZN/gün</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 8 }}>
                    <Text style={styles.detailhomeAll}>96 m²</Text>
                    <Text style={styles.detailhomeAll}>2 otaq</Text>
                    <Text style={styles.detailhomeAll}>4 nəfər</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 3, paddingBottom: 5 }}>
                    <SvgLocation style={{ width: 10, height: 18 }} />
                    <Text style={[styles.addressTxt, { fontSize: 13 }]}>Quba, Xınalıq k.</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeComp

const styles = StyleSheet.create({
  box: {
    width: "48%",
    marginTop: 10

  },
  boxContainer: {
    width: "100%",
    height: "85%",
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
    gap: 5
  },
  mainCardAll: {
    backgroundColor: "#353535",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    gap: 3
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
    width: 280,
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
