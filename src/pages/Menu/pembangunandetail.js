import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import { Image } from 'react-native'

export default function PembangunanDetail({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
            <MyHeader title="Detail"/>

            <ScrollView>
                <View style={{
                    padding:20,
                }}>

                 {/* Judul */}
                 <Text style={{
                    fontFamily:fonts.primary[600],
                    fontSize:15,
                    textAlign:"center"
                }}>
                Safari Ramadhan di Tanjung Buntung dan Sadai, Rudi Paparkan Rencana Pembangunan di Kawasan Bengkong
                </Text>

                {/* Image */}
                <Image style={{
                    width:347,
                    height:203,
                    alignSelf:"center",
                    marginTop:20,
                    
                }} source={require('../../assets/img_dummy.png')}/>
                
                {/* deks */}

                <View>
                    <Text style={{
                        padding:0,
                        fontFamily:fonts.primary[400],
                        fontSize:14,
                        textAlign:"justify",
                        marginTop:10
                    }}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        {'\n\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>

                </View>
            </ScrollView>
    </View>
  )
}