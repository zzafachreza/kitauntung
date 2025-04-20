import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { colors, fonts, windowWidth } from '../../utils';
import { MyHeader } from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import { apiURL, getData, MYAPP, webURL } from '../../utils/localStorage';
import { FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Alert } from 'react-native';
import { showMessage } from 'react-native-flash-message';

export default function PermohonanSuratKeterangan({ navigation }) {

  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});
  const __getTransaksi = () => {
    getData('user').then(u => {
      setUser(u);
      axios.post(apiURL + 'surat', {
        fid_pengguna: u.id_pengguna
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    })
  }
  useEffect(() => {
    if (isFocused) {
      __getTransaksi();
    }
  }, [isFocused])


  return (
    <View style={styles.container}>
      <MyHeader title={`Permohonan Surat Keterangan`} />

      <View style={{
        flex: 1,
        padding: 10,
      }}>
        <FlatList data={data} renderItem={({ item, index }) => {
          return (

            <View style={styles.card}>
              {/* Baris 1: Jenis Surat */}
              <View style={styles.row}>
                <Text style={styles.label}>Jenis Surat</Text>

                <Text style={styles.value}>{item.jenis}</Text>
              </View>

              {/* Baris 2: Keterangan Tambahan */}
              <View style={styles.row}>
                <Text style={styles.label}>Keterangan Tambahan</Text>

                <Text style={styles.value}>{item.keterangan_tambahan}</Text>
              </View>

              {/* Baris 3: No HP Aktif */}
              <View style={styles.row}>
                <Text style={styles.label}>No HP Aktif</Text>

                <Text style={styles.value}>{item.nomor_aktif}</Text>
              </View>

              {/* Footer: Tanggal & Status */}
              <View style={styles.footer}>
                <Text style={styles.date}>{moment(item.tanggal).format('DD MMMM YYYY')}</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{item.status_surat}</Text>
                </View>
              </View>

              <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'flex-end'
              }}>
                <TouchableOpacity onPress={() => navigation.navigate('ShowWeb', {
                  judul: 'Permohonan Surat Keterangan',
                  link: webURL + 'surat/print/' + item.id_surat,
                  cetak: 1,
                })} style={{
                  padding: 10,
                  flex: 1,
                  backgroundColor: colors.white,
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                  }}>Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ShowWeb', {
                  judul: 'Permohonan Surat Keterangan',
                  link: webURL + 'surat/edit2/' + item.id_surat
                })} style={{
                  padding: 10,
                  flex: 1,
                  backgroundColor: colors.primary,
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                  }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert(MYAPP, 'Apakah kamu mau hapus ini ?', [
                  {
                    text: 'Tidak'
                  }, {
                    text: 'Ya, Hapus',
                    onPress: () => {
                      axios.post(apiURL + 'delete_data', {
                        modul: 'surat',
                        id: item.id_surat
                      }).then(res => {
                        if (res.data.status == 200) {
                          __getTransaksi();
                          showMessage({
                            type: 'success',
                            message: 'Data berhasil dihapus !'
                          })
                        }
                      })
                    }
                  }
                ])} style={{
                  padding: 10,
                  flex: 1,
                  backgroundColor: colors.danger,
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: 'white'
                  }}>Hapus</Text>
                </TouchableOpacity>
              </View>
            </View>

          )
        }} />
      </View>

      <View style={{
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-end",


      }}>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('ShowWeb', {
          judul: 'Permohonan Surat Keterangan',
          link: webURL + 'surat/add2/' + user.id_pengguna
        })}>
          <LinearGradient
            colors={['#DFA92B', '#B77B25']} // Warna gradien dari file Anda
            start={{ x: 0, y: 0 }} // Titik awal gradien
            end={{ x: 0, y: 1 }} // Titik akhir gradien
            style={{
              padding: 10,
              borderRadius: 50,
              alignItems: 'center',
              marginTop: -10,
              height: 60,
              width: 60,
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Icon type='ionicon' name='add' color={colors.white} size={25} />
          </LinearGradient>
        </TouchableWithoutFeedback>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderWidth: 0.5,
    borderColor: '#B9B9B9',
    borderRadius: 10,
    padding: 15,
    margin: 16
  },
  row: {
    marginBottom: 16,
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6C6C6C',

  },
  colon: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#333333',
    marginHorizontal: 4
  },
  value: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#333333',
    flex: 1 // Takes remaining space
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#B9B9B9',
    paddingTop: 12,
    marginTop: 8
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6C6C6C'
  },
  statusBadge: {
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#856404'
  }
});