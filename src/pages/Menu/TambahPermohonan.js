import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyFileUploader, MyHeader, MyInput, MyPicker } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

export default function TambahPermohonan() {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,

    }}>
        <MyHeader title="Permohonan Suarat Keterangan"/>

        <ScrollView>
            <View style={{
                padding:10,
            }}> 


                <MyPicker  label="Jenis Surat yang Dimohon"/>
                <MyInput label="Keterangan Tambahan"/>
                <MyInput label="No HP Aktif" />

                <View style={{
                    padding:10,
                    marginTop:10
                }}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Syarat Surat</Text>
                    <MyFileUploader/>
                    <MyFileUploader/>
                    <MyFileUploader/>
                </View>

                    <TouchableNativeFeedback >
                    <LinearGradient
                        colors={['#DFA92B', '#B77B25']} // Warna gradien dari file Anda
                        start={{ x: 0, y: 0 }} // Titik awal gradien
                        end={{ x: 0, y: 1 }} // Titik akhir gradien
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
                        }}>Selanjutnya</Text>
                    </LinearGradient>
                </TouchableNativeFeedback>


            </View>
        </ScrollView>
    </View>
  )
}