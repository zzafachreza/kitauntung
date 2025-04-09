import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import moment from 'moment';

export default function OutputSKTM({ route }) {
  // Get data passed from SKTMPage
  const { sktmData } = route.params;

  // Format date for display
  const formatDate = (dateString) => {
    return moment(dateString).format('DD MMMM YYYY');
  };

  // Common style objects
  const rowStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  };

  const labelStyle = {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    color: colors.black,
    width: '40%'
  };

  const valueStyle = {
    fontFamily: fonts.primary[600],
    fontSize: 13,
    color: colors.black,
    flex: 1
  };

  const colonStyle = {
    fontFamily: fonts.primary[600],
    fontSize: 13,
    color: colors.black,
    marginRight: 5
  };

  const sectionTitleStyle = {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    marginVertical: 10,
    color: colors.primary
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
    <MyHeader title={sktmData.jenisSurat || sktmData.jenis_surat || 'SKTM'} />

      <ScrollView>
        <View style={{ padding: 20 }}>

     {/* Tanggal Pembuatan */}
<View style={{ marginTop: 10, marginBottom: 50 }}>
  <Text style={{ 
    fontFamily: fonts.primary[400], 
    fontSize: 12,
    textAlign: 'center',
    color: colors.gray
  }}>
    {moment(sktmData.tanggalDibuat).format('D MMMM YYYY')}
  </Text>
</View>

          {/* Section 1: Data from TambahPermohonan */}
       
          
          <View style={rowStyle}>
            <Text style={labelStyle}>Jenis Surat</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>
                {sktmData.jenis_surat === 'SKTM' ? 'SKTM' : 
                 sktmData.jenis_surat === 'Biodata Penduduk' ? 'Biodata' :
                 sktmData.jenis_surat === 'Keterangan Domisili' ? 'Domisili' : 
                 sktmData.jenis_surat}
              </Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Keterangan Tambahan</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.keterangan || 'Tidak Ada'}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>No HP Aktif</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.no_hp}</Text>
            </View>
          </View>

          <View style={{
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 15
}}>
  <View style={{
    flex: 1,
    height: 1,
    backgroundColor: colors.black,
    marginRight: 10
  }} />
  
  <Text style={{
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.black
  }}>Form</Text>
  
  <View style={{
    flex: 1,
    height: 1,
    backgroundColor: colors.black,
    marginLeft: 10
  }} />
</View>

          {/* Section 2: Data from SKTMPage */}

          <View style={rowStyle}>
            <Text style={labelStyle}>NIK</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.nik}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Nama</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.nama}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>TTL</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.ttl}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Alamat</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.alamat}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Pendidikan</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>Strata 1</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Pekerjaan</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.pekerjaan}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Status</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.status}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Agama</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.agama}</Text>
            </View>
          </View>

          <View style={rowStyle}>
            <Text style={labelStyle}>Keterangan Keperluan</Text>
            <View style={{ flexDirection: 'row', width: '60%' }}>
              <Text style={colonStyle}>:</Text>
              <Text style={valueStyle}>{sktmData.keteranganKeperluan || sktmData.keterangan}</Text>
            </View>
          </View>

         {/* Section 3: Masa Berlaku */}
<View style={rowStyle}>
  <Text style={labelStyle}>Masa Berlaku</Text>
  <View style={{ flexDirection: 'row', width: '60%' }}>
    <Text style={colonStyle}>:</Text>
    <Text style={valueStyle}>
      {formatDate(sktmData.mulai)} - {formatDate(sktmData.sampai)}
    </Text>
  </View>
</View>
        

         

        </View>
      </ScrollView>
    </View>
  );
}