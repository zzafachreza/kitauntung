import { View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import React, { useEffect } from 'react';
import { Color, colors, fonts, windowWidth } from '../../utils';
import { MyHeader } from '../../components';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { apiURL, webURL } from '../../utils/localStorage';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import 'intl';
import 'intl/locale-data/jsonp/id'; // <-- untuk Indonesia
export default function UMKMDetail({ navigation, route }) {
  const toko = route.params;
  // Data dummy untuk produk UMKM
  const [data, setData] = useState([]);

  const isFocused = useIsFocused();
  const __getTransaksi = () => {
    axios.post(apiURL + 'umkm', {
      fid_toko: toko.id_toko
    }).then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }
  useEffect(() => {
    if (isFocused) {
      __getTransaksi();
    }
  }, [isFocused])
  // Fungsi untuk menangani klik tombol keranjang
  const handleCartPress = (item) => {
    navigation.navigate('UMKMCheckout', {
      nama_toko: toko.nama_toko,
      telepon_toko: toko.telepon_toko,
      nama: item.produk,
      gambar: item.gambar,
      harga: item.harga,
    });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title={toko.nama_toko} />
      <View style={{
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.blueGray[300],
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image style={{
          width: 80,
          height: 80,
        }} source={{
          uri: webURL + toko.gambar_toko
        }} />
        <View style={{
          flex: 1,
          padding: 10,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[800],
            color: colors.black,
            fontSize: 15
          }}>{toko.nama_toko}</Text>
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.black,
            fontSize: 12
          }}>{toko.alamat_toko}</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            color: colors.black,
            fontSize: 13
          }}>{toko.telepon_toko}</Text>
        </View>
      </View>

      <ScrollView>
        <View style={{
          marginTop: 10,
          padding: 10,
        }}>

          <View style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            flexWrap: "wrap"
          }}>

            {/* Perulangan menggunakan map */}
            {data.map((item) => (
              <View key={item.id_umkm} style={{
                padding: 10,
                borderWidth: 2,
                overflow: 'hidden',
                borderRadius: 10,
                borderColor: colors.primary,
                width: windowWidth / 2.2,
                marginBottom: 10, // Jarak antar item
              }}>

                <Image style={{
                  width: windowWidth / 2.2,
                  height: 182,
                  alignSelf: "center",
                  marginTop: -10
                }} source={{
                  uri: webURL + item.gambar
                }} />

                <Text style={{
                  fontFamily: fonts.primary[600],
                  fontSize: 12,
                  marginTop: 10,
                  textAlign: "left"
                }}>
                  {item.produk}
                </Text>

                <Text style={{
                  fontFamily: fonts.primary[600],
                  fontSize: 12,
                  marginTop: 10,
                  textAlign: "left",
                  color: "#2DAE00"
                }}>
                  {new Intl.NumberFormat().format(item.harga)}
                </Text>

                <View style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}>

                  <TouchableNativeFeedback onPress={() => handleCartPress(item)}>
                    <View style={{ marginTop: 10 }}>
                      <Icon type='ionicon' name='cart-outline' size={30} color={colors.primary} />
                    </View>
                  </TouchableNativeFeedback>

                </View>

              </View>
            ))}

          </View>

        </View>
      </ScrollView>
    </View>
  );
}