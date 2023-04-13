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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const History = ({navigation}) => {
  return (
    <View style={styles.beranda}>
      <ImageBackground source={HomeBackground} style={styles.home}>
        <ScrollView style={styles.container}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 46,
              paddingHorizontal: 36,
              justifyContent: 'space-between',
              //   alignItems: 'left',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: '#DA6317',
                  padding: 12,
                  backgroundColor: '#ffe4c4',
                  borderRadius: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.dashboard}>History</Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  beranda: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  home: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  dashboard: {
    width: 250,
    height: 41,
    fontFamily: 'BentonsSans Bold',
    fontWeight: 'bold',
    fontSize: 29,
    lineHeight: 40.62,
    color: '#09051C',
    marginTop: 5,
    marginLeft: 30,
    marginRight: 100,
  },
});
