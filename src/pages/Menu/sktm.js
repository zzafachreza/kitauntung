import { View, Text, ScrollView, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Color, colors, fonts } from '../../utils'
import { MyCalendar, MyHeader, MyInput } from '../../components'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'

export default function SKTMPage({navigation, route}) {

    // NANTI DATA DARI NIK SAMPAI AGAMA AMBIL DARI DATA PROFILE YA
  // Dummy profile data
  const dummyProfile = {
    nik: '3236273457326889',
    nama: 'Nizam Syahputra',
    ttl: 'Bandung, 12 Maret 1996',
    alamat: 'Jl. Banda No. 30',
    pekerjaan: 'Pegawai Swasta',
    status: 'Indonesia',
    agama: 'Islam'
  };

  // State for form data initialized with dummy data
  const [formData, setFormData] = useState({
    nik: dummyProfile.nik,
    nama: dummyProfile.nama,
    ttl: dummyProfile.ttl,
    alamat: dummyProfile.alamat,
    pekerjaan: dummyProfile.pekerjaan,
    status: dummyProfile.status,
    agama: dummyProfile.agama,
    keterangan: '',
    mulai: moment().format('YYYY-MM-DD'),
    sampai: moment().add(1, 'month').format('YYYY-MM-DD')
  });

  // Data from TambahPermohonan
  const [permohonanData, setPermohonanData] = useState(null);
  const [headerTitle, setHeaderTitle] = useState('SKTM');

  useEffect(() => {
    if (route.params?.permohonanData) {
      console.log('Data dari TambahPermohonan:', route.params.permohonanData);
      setPermohonanData(route.params.permohonanData);
      
      if (route.params.permohonanData.jenis_surat) {
        setHeaderTitle(route.params.permohonanData.jenis_surat);
      }
    }
  }, [route.params]);

  const handleDateChange = (field, date) => {
    setFormData({
      ...formData,
      [field]: date
    });
  };

  const validateForm = () => {
    const requiredFields = ['nik', 'nama', 'ttl', 'alamat', 'pekerjaan', 'status', 'agama', 'keterangan'];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      Alert.alert('Error', 'Harap isi semua field yang wajib diisi');
      return false;
    }

    if (moment(formData.sampai).isBefore(formData.mulai)) {
      Alert.alert('Error', 'Tanggal Sampai tidak boleh sebelum Tanggal Mulai');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    
    const completeData = {
      ...permohonanData,
      ...formData,
      tanggalDibuat: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    console.log('Complete Data:', completeData);
    
    navigation.navigate('OuputSKTM', { 
      sktmData: completeData 
    });
  };

  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
      <MyHeader title={headerTitle}/>

      <ScrollView>
        <View style={{ padding:10 }}>
          <MyInput 
            label="NIK" 
            value={formData.nik} 
            onChangeText={(text) => setFormData({...formData, nik: text})}
            keyboardType='numeric'
            required
          />
          
          <MyInput 
            label="Nama" 
            value={formData.nama} 
            onChangeText={(text) => setFormData({...formData, nama: text})}
            required
          />
          
          <MyInput 
            label="TTL" 
            value={formData.ttl} 
            onChangeText={(text) => setFormData({...formData, ttl: text})}
            required
          />
          
          <MyInput 
            label="Alamat" 
            value={formData.alamat} 
            onChangeText={(text) => setFormData({...formData, alamat: text})}
            required
            multiline
          />
          
          <MyInput 
            label="Pekerjaan" 
            value={formData.pekerjaan} 
            onChangeText={(text) => setFormData({...formData, pekerjaan: text})}
            required
          />
          
          <MyInput 
            label="Status" 
            value={formData.status} 
            onChangeText={(text) => setFormData({...formData, status: text})}
            required
          />
          
          <MyInput 
            label="Agama" 
            value={formData.agama} 
            onChangeText={(text) => setFormData({...formData, agama: text})}
            required
          />
          
          <MyInput 
            label="Keterangan Keperluan" 
            value={formData.keterangan} 
            onChangeText={(text) => setFormData({...formData, keterangan: text})}
            required
            multiline
          />
          
          <View style={{ padding:10, marginTop:10 }}>
            <Text style={{ fontFamily:fonts.primary[600] }}>Masa Berlaku</Text>

            <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:0 }}>
              <Text style={{ fontFamily:fonts.primary[600], marginTop:20 }}>Dari</Text>
              <View style={{ width:"80%", justifyContent:"center" }}>
                <MyCalendar 
                  value={formData.mulai}
                  onDateChange={(date) => handleDateChange('mulai', date)}
                />
              </View>
            </View>

            <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:0 }}>
              <Text style={{ fontFamily:fonts.primary[600], marginTop:20 }}>Sampai</Text>
              <View style={{ width:"80%", justifyContent:"center" }}>
                <MyCalendar 
                  value={formData.sampai}
                  onDateChange={(date) => handleDateChange('sampai', date)}
                  minDate={formData.mulai}
                />
              </View>
            </View>
          </View>

          <View style={{ flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:20 }}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
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

            <TouchableWithoutFeedback onPress={handleSubmit}>
              <LinearGradient
                colors={['#DFA92B', '#B77B25']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
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
                }}>Kirim</Text>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}