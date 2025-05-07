import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { colors, windowWidth } from '../../utils';
import { MyHeader } from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import { apiURL } from '../../utils/localStorage';
import { FlatList } from 'react-native';

export default function Penduduk({ navigation }) {
  // Data penduduk
  const dataPenduduk = {
    "Nama Lengkap": "Riri Indriyani",
    "NIK": "32365724329648",
    "TTL": "Bandung, 18 Maret 1990",
    "Alamat": "JL Banda No. 30",
    "RT": "001",
    "RW": "002",
    "Kelurahan/Desa": "Citarum",
    "Kecamatan": "Bandung Wetan",
    "Agama": "Islam",
    "Status": "Menikah",
    "Pekerjaan": "Karyawan Swasta",
    "Kewarganegaraan": "Indonesia"
  };
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const __getTransaksi = () => {
    axios.post(apiURL + 'penduduk').then(res => {
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
    <View style={styles.container}>
      <MyHeader title="Penduduk" />
      <FlatList data={data} renderItem={({ item, index }) => {
        return (

          <View style={styles.content}>
            {/* Card Container */}
            <View style={styles.card}>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Nama Lengkap</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.nama_lengkap}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>NIK</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.nik}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Jenis Kelamin</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.jenis_kelamin}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>TTL</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.ttl}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Alamat</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.alamat}</Text>
              </View>

              <View style={styles.row} key={index}>
                <Text style={styles.label}>RT</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.nama_rt}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>RW</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.nama_rw}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Kelurahan / Desa</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.kelurahan_desa}</Text>
              </View>

              <View style={styles.row} key={index}>
                <Text style={styles.label}>Kecamatan</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.kecamatan}</Text>
              </View>

              <View style={styles.row} key={index}>
                <Text style={styles.label}>Agama</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.agama}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Status</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.status}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Pekerjaan</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.pekerjaan}</Text>
              </View>
              <View style={styles.row} key={index}>
                <Text style={styles.label}>Kewarganegaraan</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{item.kewarganegaraan}</Text>
              </View>


            </View>
          </View>
        )
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    padding: 16
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderWidth: 0.5,
    borderColor: '#B9B9B9',
    borderRadius: 10,
    padding: 16
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start'
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
    width: windowWidth / 3, // Fixed width for consistent alignment
    lineHeight: 18
  },
  colon: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
    marginRight: 8,
    lineHeight: 18
  },
  value: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#333333',
    flex: 1, // Takes remaining space
    lineHeight: 18
  }
});