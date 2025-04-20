import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import React, { useState } from 'react';
import { fonts } from '../../utils';
import { MyInput } from '../../components';
import { colors } from '../../utils/colors';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

export default function Register({ navigation }) {
    const [data, setData] = useState({
        nik: '',
        nama_lengkap: '',
        username: '',
        ttl: '',
        status: '',
        agama: '',
        nomor_telepon: '',
        alamat: '',
        rt: '',
        rw: '',
        kelurahan_desa: '',
        kecamatan: '',
        pekerjaan: '',
        kewarganegaraan: '',
        kata_sandi: '', // Hanya menyimpan kata sandi
    });

    const [konfirmasiKataSandi, setKonfirmasiKataSandi] = useState(''); // State untuk konfirmasi kata sandi

    const handleRegister = () => {
        // Validasi apakah semua field telah diisi
        if (
            data.nik.length === '' ||
            data.nama_lengkap.length === '' ||
            data.username.length === '' ||
            data.nomor_telepon.length === '' ||
            data.alamat.length === '' ||
            data.tll.length === '' ||
            data.status.length === '' ||
            data.agama.length === '' ||
            data.rt.length === '' ||
            data.rw.length === '' ||
            data.kelurahan_desa.length === '' ||
            data.kecamatan.length === '' ||
            data.pekerjaan.length === '' ||
            data.kewarganegaraan.length === '' ||
            data.kata_sandi.length === '' ||
            konfirmasiKataSandi.length === ''
        ) {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Semua Field Harus Diisi!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10 },
                textStyle: { fontFamily: fonts.primary[600] },
            });
        } else if (data.kata_sandi !== konfirmasiKataSandi) {
            // Validasi apakah kata sandi dan konfirmasi kata sandi sama
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Kata Sandi dan Konfirmasi Kata Sandi Tidak Sama!',
                position: 'top',
                style: { borderBottomRightRadius: 10, borderBottomLeftRadius: 10 },
                textStyle: { fontFamily: fonts.primary[600] },
            });
        } else {
            console.log('Data yang dikirim: ', data);
            axios
                .post('API KEY', data)
                .then((res) => {
                    if (res.data.status === 'success') {
                        showMessage({
                            type: 'success',
                            backgroundColor: colors.success,
                            color: colors.white,
                            message: 'Selamat Anda Berhasil Mendaftar!',
                        });
                        navigation.navigate('Login');
                    } else {
                        showMessage({
                            type: 'danger',
                            backgroundColor: colors.danger,
                            color: colors.white,
                            message: 'Akun Sudah Terdaftar!',
                        });
                    }
                })
                .catch((err) => {
                    console.error('Error: ', err);
                });
        }
    };

    return (
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: colors.white }}>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 24, color: colors.black, textAlign: 'center' }}>Daftar</Text>

                        <View style={{ padding: 10 }}>
                            <View>
                                <MyInput
                                    value={data.nik}
                                    placeholder="NIK"
                                    onChangeText={(x) => setData({ ...data, nik: x })}
                                />

                            </View>

                            <View style={{
                                marginTop: -40
                            }}>

                                <View>
                                    <MyInput
                                        value={data.nama_lengkap}
                                        placeholder="Nama Lengkap"
                                        onChangeText={(x) => setData({ ...data, nama_lengkap: x })}
                                    />
                                </View>

                            </View>

                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput
                                    value={data.username}
                                    placeholder="Username"
                                    onChangeText={(x) => setData({ ...data, username: x })}
                                />
                            </View>

                            <View style={{
                                marginTop: -40
                            }}>

                                <MyInput
                                    value={data.ttl}
                                    placeholder="TTL"
                                    onChangeText={(x) => setData({ ...data, ttl: x })}
                                />
                            </View>

                            <View style={{
                                marginTop: -40
                            }}>


                                <MyInput
                                    value={data.status}
                                    placeholder="Status"
                                    onChangeText={(x) => setData({ ...data, status: x })}
                                />

                            </View>

                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput
                                    value={data.agama}
                                    placeholder="Agama"
                                    onChangeText={(x) => setData({ ...data, agama: x })}
                                />

                            </View>

                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput
                                    value={data.nomor_telepon}
                                    placeholder="Nomor Telepon"
                                    onChangeText={(x) => setData({ ...data, nomor_telepon: x })}
                                />
                            </View>


                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput
                                    value={data.alamat}
                                    placeholder="Alamat"
                                    onChangeText={(x) => setData({ ...data, alamat: x })}
                                />
                            </View>

                            <View style={{ marginTop: -40 }}>
                                <MyInput
                                    value={data.rt}
                                    placeholder="RT"
                                    onChangeText={(x) => setData({ ...data, rt: x })}
                                />

                            </View>

                            <View style={{ marginTop: -40 }}>
                                <MyInput
                                    value={data.rw}
                                    placeholder="RW"
                                    onChangeText={(x) => setData({ ...data, rw: x })}
                                />
                            </View>

                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput
                                    value={data.kelurahan_desa}
                                    placeholder="Kelurahan/Desa"
                                    onChangeText={(x) => setData({ ...data, kelurahan_desa: x })}
                                />

                            </View>

                            <View style={{ marginTop: -40 }}>
                                <MyInput
                                    value={data.kecamatan}
                                    placeholder="Kecamatan"
                                    onChangeText={(x) => setData({ ...data, kecamatan: x })}
                                />
                            </View>

                            {/* <MyInput
                                value={data.pendidikan}
                                placeholder="Pendidikan"
                                onChangeText={(x) => setData({ ...data, pendidikan: x })}
                            /> */}

                            <View style={{ marginTop: -40 }}>
                                <MyInput
                                    value={data.pekerjaan}
                                    placeholder="Pekerjaan"
                                    onChangeText={(x) => setData({ ...data, pekerjaan: x })}
                                />
                            </View>

                            <View style={{ marginTop: -40 }}>
                                <MyInput
                                    value={data.kewarganegaraan}
                                    placeholder="Kewarganegaraan"
                                    onChangeText={(x) => setData({ ...data, kewarganegaraan: x })}
                                />

                            </View>

                            <View style={{
                                marginTop: -40
                            }}>
                                <MyInput
                                    value={data.kata_sandi}
                                    placeholder="Kata Sandi"
                                    secureTextEntry={true}
                                    onChangeText={(x) => setData({ ...data, kata_sandi: x })}
                                />
                            </View>

                            <View style={{ marginTop: -40 }}>
                                <MyInput
                                    value={konfirmasiKataSandi}
                                    placeholder="Konfirmasi Kata Sandi"
                                    secureTextEntry={true}
                                    onChangeText={(x) => setKonfirmasiKataSandi(x)} // Update state konfirmasi kata sandi
                                />
                            </View>

                            <View style={{ marginTop: 50 }}>
                                <TouchableNativeFeedback onPress={handleRegister}>
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
                                        }}>Daftar</Text>
                                    </LinearGradient>
                                </TouchableNativeFeedback>

                                <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ fontFamily: fonts.primary[500], color: 'black', textAlign: 'center', marginTop: 20, fontSize: 12 }}>
                                        Sudah memiliki akun? Silakan{' '}
                                        <Text style={{ fontFamily: fonts.primary[600], color: colors.primary }}>Masuk</Text>
                                    </Text>
                                </TouchableNativeFeedback>
                            </View>


                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}