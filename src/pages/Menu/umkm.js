import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import { apiURL, webURL } from '../../utils/localStorage';
import { FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
export default function LapakUMKM({ navigation }) {
  // Data dummy untuk lapak UMKM
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const __getTransaksi = () => {
    axios.post(apiURL + 'toko').then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }
  useEffect(() => {
    if (isFocused) {
      __getTransaksi();
    }
  }, [isFocused])


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
          {data.map((item) => (
            <TouchableWithoutFeedback key={item.id}>
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
                    }} source={{
                      uri: webURL + item.gambar_toko
                    }} />
                  </View>

                  <View style={{ marginLeft: 10 }}>
                    <Text style={{
                      fontFamily: fonts.primary[600],
                      fontSize: 18,
                    }}>
                      {item.nama_toko}
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
                        {item.alamat_toko}
                      </Text>
                    </View>

                    <View style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: 'center',
                    }}>
                      <Image style={{
                        width: 11,
                        height: 15,
                      }} source={require('../../assets/iconhp.png')} />
                      <Text style={{
                        width: 200,
                        fontFamily: fonts.primary[400],
                        fontSize: 12,
                        paddingHorizontal: 10
                      }}>
                        {item.telepon_toko}
                      </Text>
                    </View>

                  </View>
                </View>

                <View style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}>
                  <TouchableOpacity onPress={() => navigation.navigate('UMKMDetial', item)}>
                    <View style={{
                      padding: 10,
                      width: 120,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.primary,
                      borderRadius: 5
                    }}>
                      <Text style={{ fontFamily: fonts.primary[500], color: colors.white, fontSize: 14 }}>Detail</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}