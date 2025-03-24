import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import { Icon } from 'react-native-elements';

export default function LapakUMKM({ navigation }) {
  // Data dummy untuk lapak UMKM
  const lapakUMKM = [
    {
      id: 1,
      nama: 'Toko Kue Ende',
      lokasi: 'Lempuing, Ratu Agung, Bengkulu City, Bengkulu',
      gambar: require('../../assets/dummy-img2.png'),
    },
  
    // Tambahkan data lain sesuai kebutuhan
  ];

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title="Lapak UMKM" />

      <ScrollView>
        <View style={{
          padding: 10,
        }}>
          {/* Perulangan menggunakan map */}
          {lapakUMKM.map((item) => (
            <TouchableNativeFeedback key={item.id}>
              <View style={{
                padding: 10,
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 10,
                marginBottom: 10, // Jarak antar item
              }}>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}>
                  <View>
                    <Image style={{
                      width: 106,
                      height: 106,
                    }} source={item.gambar} />
                  </View>

                  <View style={{ marginLeft: 10 }}>
                    <Text style={{
                      fontFamily: fonts.primary[600],
                      fontSize: 18,
                    }}>
                      {item.nama}
                    </Text>

                    <View style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: 'center',
                    }}>
                      <Image style={{
                        width: 11,
                        height: 15,
                      }} source={require('../../assets/maps.png')} />
                      <Text style={{
                        width: 200,
                        fontFamily: fonts.primary[400],
                        fontSize: 12,
                        paddingHorizontal: 10
                      }}>
                        {item.lokasi}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}>
                  <TouchableNativeFeedback onPress={() => navigation.navigate('DetailLapak', { id: item.id })}>
                    <View style={{
                      padding: 10,
                      backgroundColor: colors.primary,
                      borderRadius: 5
                    }}>
                      <Text style={{ fontFamily: fonts.primary[500], color: colors.white, fontSize: 12 }}>Detail</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}