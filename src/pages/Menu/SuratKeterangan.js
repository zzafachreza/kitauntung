import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { MyHeader } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function PermohonanSuratKeterangan() {
  return (
    <View style={styles.container}>
      <MyHeader title={`Permohonan Surat Keterangan`}/>
      
      <ScrollView>
        <View style={styles.card}>
          {/* Baris 1: Jenis Surat */}
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Surat</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>SKTM</Text>
          </View>
          
          {/* Baris 2: Keterangan Tambahan */}
          <View style={styles.row}>
            <Text style={styles.label}>Keterangan Tambahan</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>Tidak ada</Text>
          </View>
          
          {/* Baris 3: No HP Aktif */}
          <View style={styles.row}>
            <Text style={styles.label}>No HP Aktif</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.value}>089767867586657</Text>
          </View>
          
          {/* Footer: Tanggal & Status */}
          <View style={styles.footer}>
            <Text style={styles.date}>1 Maret 2025</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Proses</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{
        padding:20,
        flexDirection:"row",
        justifyContent:"flex-end",


      }}>

      <TouchableWithoutFeedback>
           <LinearGradient
                colors={['#DFA92B', '#B77B25']} // Warna gradien dari file Anda
                start={{ x: 0, y: 0 }} // Titik awal gradien
                end={{ x: 0, y: 1 }} // Titik akhir gradien
                style={{
                    padding: 10,
                    borderRadius: 50,
                    alignItems: 'center',
                    marginTop: -10,
                    height:60,
                    width:60,
                    justifyContent:"center",
                    borderWidth:1,
                }}
            >
                <Icon type='ionicon' name='add' color={colors.white} size={25}/>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6C6C6C',
    width: 120, // Fixed width for labels
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