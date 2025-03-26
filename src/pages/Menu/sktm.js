import { View, Text, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Color, colors, fonts } from '../../utils'
import { MyCalendar, MyHeader, MyInput } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

export default function SKTMPage({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
            <MyHeader title="SKTM"/>

            <ScrollView>
                <View style={{
                    padding:10,
                }}>


                    <MyInput label="NIK"/>
                    <MyInput label="Nama"/>
                    <MyInput label="TTL"/>
                    <MyInput label="Alamat"/>
                    <MyInput label="Pekerjaan"/>
                    <MyInput label="Status"/>
                    <MyInput label="Agama"/>
                    <MyInput label="Keterangan Keperluan"/>
                    
                    <View style={{
                        padding:10,
                        marginTop:10
                    }}>

                    <Text style={{
                        fontFamily:fonts.primary[600],
                    }}>Masa Berlaku</Text>

                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center",
                        padding:0
                    }}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            justifyContent:"center",
                            marginTop:40
                        }}>Dari</Text>
                        
                    <View style={{
                        width:"80%",
                        justifyContent:"center"
                    }}>
                    <MyCalendar/>
                    </View>
                    </View>



                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center",
                        padding:0
                    }}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            justifyContent:"center",
                            marginTop:40
                        }}>Sampai</Text>
                        
                    <View style={{
                        width:"80%",
                        justifyContent:"center"
                    }}>
                    <MyCalendar/>
                    </View>
                    </View>


                    </View>

                    
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center",
                        marginTop:20
                    }}>

                    <TouchableWithoutFeedback>
                        <View style={{
                            padding:10,
                            backgroundColor:"#7A7A7A",
                            borderRadius:30,
                            width:155,
                            alignItems:"center",
                            

                        }}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:"center",
                            fontSize:15
                        }}>Batal</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                          <LinearGradient
                                colors={['#DFA92B', '#B77B25']} // Warna gradien dari file Anda
                                start={{ x: 0, y: 0 }} // Titik awal gradien
                                end={{ x: 0, y: 1 }} // Titik akhir gradien
                                style={{
                                    padding: 10,
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    width:155
                                }}
                            >
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    color: colors.white,
                                    fontSize: 15,
                                }}>Masuk</Text>
                            </LinearGradient>
                    </TouchableWithoutFeedback>

                    </View>

                </View>
            </ScrollView>
    </View>
  )
}