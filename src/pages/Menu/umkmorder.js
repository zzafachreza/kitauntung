import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableNativeFeedback } from 'react-native'

export default function UMKMOrder({navigation, route}) {
  // Get data from previous screen (UMKMCheckout)
  const { quantity = 1, totalHarga = 25000, hargaAsli = 25000 } = route.params || {};

  // Function to format currency
  const formatCurrency = (num) => {
    return 'Rp' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,
    }}>
      <MyHeader title="Toko Kue Ende"/>

      <ScrollView>
        <View style={{
            padding:10,
        }}>

            <View style={{
                padding:10,
                borderWidth:0.2,
                borderRadius:10,
            }}>

                <Text style={{fontFamily:fonts.primary[500], fontSize:12 }}>Nama Pemesan</Text>
                <Text style={{fontFamily:fonts.primary[700], fontSize:15, color:colors.primary }}>Nizam Syahputra</Text>
                <Text style={{fontFamily:fonts.primary[500], fontSize:12 }}>081235567525</Text>
                <Text style={{fontFamily:fonts.primary[500], fontSize:12 }}>Jl. Banda No. 30, Kota Bandung, Jawa Barat</Text>
            </View>

            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                padding:10,
                marginTop:20
            }}>
              <Text style={{fontFamily:fonts.primary[400], fontSize:15}}>Total Transaksi</Text>
              {/* Display original price per item */}
              <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>{formatCurrency(hargaAsli)}</Text>
            </View>

            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                padding:10,
                marginTop:-10
            }}>
              <Text style={{fontFamily:fonts.primary[400], fontSize:15}}>Jumlah</Text>
              {/* Display quantity from previous screen */}
              <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>{quantity} pcs</Text>
            </View>

        </View>
      </ScrollView>

      <View style={{
        padding:10,
      }}>
        <View style={{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          padding:10,
        }}>
          <Text style={{fontFamily:fonts.primary[400], fontSize:15}}>Total Pembayaran</Text>
          {/* Display total price (quantity x original price) */}
          <Text style={{fontFamily:fonts.primary[600], fontSize:15, color:colors.success}}>{formatCurrency(totalHarga)}</Text>
        </View>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#DFA92B', '#B77B25']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
                padding: 15,
                borderRadius: 50,
                alignItems: 'center',
                marginTop: 10,
                height:50
            }}
          >
            <Text style={{
                fontFamily: fonts.primary[600],
                color: colors.white,
                fontSize: 16,
            }}>Pesan</Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}