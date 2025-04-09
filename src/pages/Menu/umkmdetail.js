import { View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import { Icon } from 'react-native-elements';

export default function UMKMDetail({ navigation }) {
  // Data dummy untuk produk UMKM
  const produkUMKM = [
    {
      id: 1,
      nama: 'Permen Warna Warni',
      gambar: require('../../assets/permen_1.png'),
      harga: 'Rp25.000',
    },
    {
      id: 2,
      nama: 'Kue Lebaran',
      gambar: require('../../assets/kuelebaran.png'),
      harga: 'Rp30.000',
    },
    {
      id: 3,
      nama: 'Serundeng Pisang',
      gambar: require('../../assets/serundeng.png'),
      harga: 'Rp15.000',
    },
    {
      id: 4,
      nama: 'Sari Aren',
      gambar: require('../../assets/sarieren.png'),
      harga: 'Rp20.000',
    },
    {
      id: 5,
      nama: 'Squash Jeruk',
      gambar: require('../../assets/squash.png'),
      harga: 'Rp25.000',
    },
    {
      id: 6,
      nama: 'Sari Buah',
      gambar: require('../../assets/saribuah.png'),
      harga: 'Rp10.000',
    },
    // Tambahkan data lain sesuai kebutuhan
  ];

  // Fungsi untuk menangani klik tombol keranjang
  const handleCartPress = (item) => {
    navigation.navigate('UMKMCheckout', {
      nama: item.nama,
      gambar: item.gambar,
      harga: item.harga,
    });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title="Toko Kue Ende" />

      <ScrollView>
        <View style={{
          padding: 10,
        }}>

          <View style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            flexWrap: "wrap"
          }}>

            {/* Perulangan menggunakan map */}
            {produkUMKM.map((item) => (
              <View key={item.id} style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: colors.primary,
                width: 167,
                marginBottom: 10, // Jarak antar item
              }}>

                <Image style={{
                  width: 163,
                  height: 182,
                  alignSelf: "center",
                  marginTop: -10
                }} source={item.gambar} />

                <Text style={{
                  fontFamily: fonts.primary[600],
                  fontSize: 12,
                  marginTop: 10,
                  textAlign: "left"
                }}>
                  {item.nama}
                </Text>

                <Text style={{
                  fontFamily: fonts.primary[600],
                  fontSize: 12,
                  marginTop: 10,
                  textAlign: "left",
                  color:"#2DAE00"
                }}>
                  {item.harga}
                </Text>

                <View style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}>

                  <TouchableNativeFeedback onPress={() => handleCartPress(item)}>
                    <View style={{ marginTop: 10 }}>
                      <Icon type='ionicon' name='cart-outline' size={20} color={colors.primary} />
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