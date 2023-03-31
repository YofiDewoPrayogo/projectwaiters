import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { HomeBackground, Promo } from '../../assets'

const {height,width} = Dimensions.get('window')

const images = [
    {Promo},{Promo}
]

const Home = () => {
    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {

    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView 
                    onScroll={({nativeEvent}) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                        images.map((e, index) => 
                            <Image 
                                key={e}
                                resizeMode= 'stretch'
                                style={styles.wrap}
                                source={e} 
                            />
                        )
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrap: {
        width: width,
        height: height * 0.25
    },
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
    garuda: {
        textAlign: 'center',
        letterSpacing: 0.02,
        fontSize:25,
        fontFamily: 'Viga',
        lineHeight: 33.6,
        fontWeight: 'bold',
        color: '#FA0000',
    },
    footer:{
        textAlign: 'center',
        letterSpacing: 0.05,
        fontSize: 10,
        fontFamily: 'Viga',
        fontWeight: '400',
        lineHeight: 13.44,
        color: '#373333',
        marginTop: 290,
        marginBottom: 20
    }
})