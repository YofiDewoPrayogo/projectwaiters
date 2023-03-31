import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { HomeBackground, Promo } from '../../assets'

const {height,width} = Dimensions.get('window')

const Home = () => {
    const [data, SetData] = useState([1,1,1,1]);
    const [currentIndex, setCurrentIndex]=useState(0);
    return (
        <View style={styles.beranda}>
            <ScrollView>
            <ImageBackground source={HomeBackground} style={styles.home}>
            <Text style={styles.dashboard}>Dashboard</Text>
            <View style={{height: height/2}}>
                <FlatList 
                    data={data} 
                    showsHorizontalScrollIndicator={false} 
                    pagingEnabled
                    onScroll={e=>{
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                    horizontal 
                    renderItem={({item, index}) => {
                    return(
                        <View style={{width:width,height:height / 2, justifyContent: 'center', alignContent: 'center'}}> 
                            <TouchableOpacity 
                            disabled={true}
                            style={{
                                width: 325,
                                height: 150,
                                borderRadius: 10,
                                marginLeft: 30, 
                                marginBottom: 70,
                                // backgroundColor: 'green'
                            }}>
                                <Image source={Promo}/>
                                <View style={{
                                    flexDirection: 'row',
                                    width: width,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    marginLeft: -30
                                }}>
                                    {
                                        data.map((item, index) => {
                                            return(
                                                <View style={{
                                                    width: currentIndex == index ? 30 : 8,
                                                    height: currentIndex == index ? 10 : 8,
                                                    borderRadius: 4,
                                                    backgroundColor: currentIndex==index? 'white' : 'gray',
                                                    marginTop: -20,
                                                    marginLeft: 5,
                                                    marginRight: 10
                                                    }}>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }} />
            </View>
            <View>
                <Text style={styles.toko}>Pilih Pesanan</Text>
            </View>

            </ImageBackground>
            </ScrollView>
        </View>
        // <ImageBackground source={HomeBackground} style={styles.home}>
        // <Text style={styles.dashboard}>Dashboard</Text>
        // <Image source={Promo} style={styles.promo} />

        /* <Image source={Logo} style={styles.logo} />
        <Text style={styles.garuda}>Garuda Kasir</Text>
        <View>
            <Text style={styles.footer}>Powered By Garuda Cyber Indonesia</Text>
        </View> */
    /* </ImageBackground> */
    )
}

export default Home

const styles = StyleSheet.create({
    beranda:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 850
    },
    dashboard: {
        width: 233,
        height: 41,
        fontFamily: 'BentonsSans Bold',
        fontWeight: 'bold',
        fontSize: 31,
        lineHeight: 40.62,
        color: '#09051C',
        marginTop: -250,
        marginBottom: -30,
        marginLeft: 10,
        marginRight: 100

    },
    promo: {
        width: 325,
        height: 150,
        marginBottom: 360
    },
    logo: {
        width: 178,
        height: 178,
        marginTop: 200
    },
    toko: {
        width: 139,
        height: 31,
        fontFamily: 'BentonsSans Bold',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 19.65,
        color: '#09051C',
        marginTop: -135,
        marginLeft: -90,
        marginRight: 100
    }
})