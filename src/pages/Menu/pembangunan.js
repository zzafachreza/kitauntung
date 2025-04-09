import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { MyHeader } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Pembangunan({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title="Pembangunan" />
      <ScrollView>
        <View style={{
          padding: 10
        }}>

          <TouchableWithoutFeedback>
            <ImageBackground
              source={require('../../assets/img_dummy.png')} // Ganti dengan path gambar latar belakang Anda
              style={{
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 10,
                width: "100%",
                height: 203,
              }}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={{
                padding: 15,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay semi-transparan
                flex: 1,
                justifyContent: 'flex-end', // Teks di bagian bawah
              }}>
                <Text style={{
                  fontSize: 16, // Ukuran font lebih kecil
                  fontFamily: 'Poppins-Bold',
                  color: colors.white,
                  marginBottom: 5, // Jarak antara judul dan tombol
                  lineHeight: 22, // Tinggi baris untuk teks
                }}>
                  Safari Ramadhan di Tanjung Buntung dan Sadai, Rudi Paparkan Rencana...
                </Text>

                <View style={{
                  flexDirection:"row",
                  justifyContent:"space-between",
                  alignItems:"center",
                }}>

                {/* TANGGAL */}

                <Text style={{
                  fontSize:12,
                  color:colors.white,
                  fontFamily:'Poppins-Regular',
                }}>9 April 2025</Text>
                  
                {/* SELENGKAPNYA */}
                <TouchableOpacity onPress={() => navigation.navigate('PembangunanDetail')}>
                  <Text style={{
                    fontSize: 12, // Ukuran font lebih kecil
                    fontFamily: 'Poppins-SemiBold',
                    color: colors.white,
                    textAlign: 'right',
                  }}>
                    Selengkapnya
                  </Text>
                </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>

        </View>
      </ScrollView>
    </View>
  );
}