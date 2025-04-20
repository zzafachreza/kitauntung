import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyInput } from '../../components'
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { apiURL, storeData, webURL } from '../../utils/localStorage';

export default function Login({ navigation }) {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleLogin = () => {
        if (data.username.length == '' || data.password.length == '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Semua Field Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }
            });
        } else if (data.username.length == '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Username Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10, },
                textStyle: { fontFamily: fonts.primary[600] }

            });
        } else if (data.password.length == '') {
            showMessage({
                type: 'danger',
                backgroundColor: colors.white,
                color: colors.danger,
                message: 'Password Harus Diisi!',
            });
        } else {
            console.log('Data yang dikirim: ', data);

            axios
                .post(apiURL + 'login', data)
                .then((res) => {
                    console.log(res.data.data)
                    if (res.data.status == 200) {

                        storeData('user', res.data.data);
                        navigation.replace('MainApp')

                    } else {
                        showMessage({
                            type: 'danger',
                            backgroundColor: colors.white,
                            color: colors.danger,
                            message: res.data.message
                        });
                    }
                    // if (res.data.status == 'success') {
                    //     showMessage({
                    //         type: 'success',
                    //         backgroundColor: colors.white,
                    //         color: colors.success,
                    //         message: res.data.message
                    //     });
                    //     navigation.navigate('Home');
                    // } else {
                    //     showMessage({
                    //         type: 'danger',
                    //         backgroundColor: colors.white,
                    //         color: colors.danger,
                    //         message: res.data.message
                    //     });
                    // }

                })
                .catch((err) => {
                    console.error('Error: ', err);
                })
        }
    };


    return (
        <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: colors.white,

        }}>
            <ScrollView>
                <View style={{
                    padding: 10,
                }}>

                    <View style={{
                        alignItems: "center",
                        padding: 10,
                        marginTop: 50
                    }}>
                        <Image style={{
                            width: 200,
                            height: 242,
                            alignSelf: "center"
                        }} source={require('../../assets/logologin.png')} />

                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 25,
                            marginTop: 40
                        }}>Masuk</Text>
                    </View>



                    <View style={{
                        padding: 10
                    }}>

                        <View style={{
                            padding: 10,
                            marginTop: -30
                        }}>
                            <MyInput value={data.username}

                                placeholder="Username"
                                onChangeText={(x) => setData({ ...data, 'username': x })}
                            />

                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput

                                    placeholder="Kata Sandi"
                                    secureTextEntry={true}
                                    value={data.password}
                                    onChangeText={(x) => setData({ ...data, 'password': x })}
                                />
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: "flex-end"
                            }}>
                                <TouchableNativeFeedback>
                                    <View style={{
                                        marginTop: 10,
                                    }}>
                                        <Text style={{
                                            fontFamily: fonts.primary[600],
                                            color: 'white',
                                            fontSize: 12
                                        }}>Lupa Kata Sandi</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>


                            <View>
                                <TouchableNativeFeedback onPress={handleLogin}>
                                    <LinearGradient
                                        colors={['#DFA92B', '#B77B25']} // Warna gradien dari file Anda
                                        start={{ x: 0, y: 0 }} // Titik awal gradien
                                        end={{ x: 0, y: 1 }} // Titik akhir gradien
                                        style={{
                                            padding: 15,
                                            borderRadius: 50,
                                            alignItems: 'center',
                                            marginTop: -10,
                                            height: 50
                                        }}
                                    >
                                        <Text style={{
                                            fontFamily: fonts.primary[600],
                                            color: colors.white,
                                            fontSize: 16,
                                        }}>Masuk</Text>
                                    </LinearGradient>
                                </TouchableNativeFeedback>

                                <TouchableNativeFeedback onPress={() => navigation.navigate('ShowWeb', {
                                    judul: 'Daftar',
                                    link: webURL + 'pengguna/add'
                                })}>
                                    <Text style={{
                                        fontFamily: fonts.primary[500],
                                        color: 'black',
                                        textAlign: 'center',
                                        marginTop: 10,
                                        fontSize: 12,
                                    }}>Belum memiliki akun? Silakan <Text style={{
                                        fontFamily: fonts.primary[600],
                                        color: colors.primary
                                    }}>Daftar</Text></Text>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}