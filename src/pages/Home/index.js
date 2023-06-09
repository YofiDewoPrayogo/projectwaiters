import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  HomeBackground,
  Promo,
  IconBox,
  IconInbox,
  Makanan,
} from '../../assets/images';

const Home = ({navigation}) => {
  return (
    <View style={styles.beranda}>
      <ImageBackground source={HomeBackground} style={styles.home}>
        <ScrollView style={styles.container}>
          <Text style={styles.dashboard}>Dashboard</Text>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay={true}
              horizontal
              height={200}
              activeDotColor="white">
              <View style={styles.slide}>
                <Image
                  source={Promo}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={Promo}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={Promo}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>
          </View>
          <Text style={styles.toko}>Pilih Pesanan</Text>
          <View style={styles.categoryContainerr}>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('KategoriPesanan');
                }}
                style={styles.categoryBtn}>
                <Image
                  source={IconBox}
                  resizeMode="contain"
                  style={{
                    width: 66,
                    height: 61,
                    marginTop: 10,
                    marginBottom: 10,
                    marginHorizontal: 0,
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.categoryBtnTxt}>Take AWay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Datameja');
                }}
                style={styles.categoryBtn}>
                <Image
                  source={IconInbox}
                  resizeMode="contain"
                  style={{
                    width: 66,
                    height: 61,
                    marginTop: 10,
                    marginBottom: 10,
                    marginHorizontal: 0,
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.categoryBtnTxt}>Dine In</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.toko}>Popular Menu</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.viewmore}>View More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={Makanan}
                style={{
                  width: 80,
                  height: 61,
                  marginTop: 15,
                  marginBottom: 10,
                  marginHorizontal: 0,
                  marginLeft: 15,
                }}
              />
              <Text style={styles.categoryFoodTxt}>Sate Spesial</Text>
              <Text style={styles.categoryTokoTxt}>Toko Harian Family</Text>
              <Text style={styles.categoryHargaTxt}>Rp 6.000</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={Makanan}
                style={{
                  width: 80,
                  height: 61,
                  marginTop: 15,
                  marginBottom: 10,
                  marginHorizontal: 0,
                  marginLeft: 15,
                }}
              />
              <Text style={styles.categoryFoodTxt}>Sate Spesial</Text>
              <Text style={styles.categoryTokoTxt}>Toko Harian Family</Text>
              <Text style={styles.categoryHargaTxt}>Rp 6.000</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  beranda: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 850,
  },
  dashboard: {
    width: 233,
    height: 41,
    fontFamily: 'BentonsSans Bold',
    fontWeight: 'bold',
    fontSize: 31,
    lineHeight: 40.62,
    color: '#09051C',
    marginTop: 85,
    marginLeft: 30,
    marginRight: 100,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainerr: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: 147,
    height: 150,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 22,
    shadowColor: '#7F5DF0',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 9,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    color: '#09051C',
  },
  categoryFoodTxt: {
    alignSelf: 'center',
    marginTop: -60,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#09051C',
    // marginRight: 105,
  },
  categoryTokoTxt: {
    alignSelf: 'center',
    fontSize: 10,
    marginTop: 0,
    fontWeight: 'bold',
    // marginRight: 100,
    color: '#09051C',
  },
  categoryHargaTxt: {
    fontFamily: 'BentonsSans Bold',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 19.65,
    color: '#FF7C32',
    marginTop: -25,
    marginLeft: 215,
  },
  toko: {
    width: 139,
    height: 31,
    fontFamily: 'BentonsSans Bold',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 19.65,
    color: '#09051C',
    marginTop: -10,
    marginLeft: 25,
    marginRight: 100,
  },
  viewmore: {
    fontFamily: 'BentonsSans Bold',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19.65,
    color: '#FF7C32',
    marginTop: -5,
    marginLeft: 265,
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 80,
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  card1: {
    height: 80,
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});
