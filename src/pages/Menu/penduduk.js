import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { MyHeader } from '../../components';

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

  return (
    <View style={styles.container}>
      <MyHeader title="Penduduk" />
      <ScrollView>
        <View style={styles.content}>
          {/* Card Container */}
          <View style={styles.card}>
            {Object.entries(dataPenduduk).map(([label, value]) => (
              <View style={styles.row} key={label}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    width: 120, // Fixed width for consistent alignment
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