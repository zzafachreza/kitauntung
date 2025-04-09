import { View, Text, ScrollView, TouchableNativeFeedback, Alert } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyFileUploader, MyHeader, MyInput, MyPicker } from '../../components';
import LinearGradient from 'react-native-linear-gradient';

export default function TambahPermohonan({navigation}) {
    const jenisSuratOptions = [
        {label: "Surat Keterangan Tidak Mampu", value: "SKTM"},
        {label: "Biodata Penduduk", value: "Biodata Penduduk"},
        {label: "Keterangan Domisili", value: "Keterangan Domisili"},
      ];
    
  const [formData, setFormData] = useState({
    jenis_surat: jenisSuratOptions[0].value,
    keterangan: '',
    no_hp: '',
    syarat1: null,
    syarat2: null,
    syarat3: null
  });

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file // Store the complete file object
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.jenis_surat) {
      Alert.alert('Error', 'Pilih jenis surat terlebih dahulu');
      return;
    }

    // Prepare data for submission
    const submissionData = {
      ...formData,
      // Convert file objects to readable format for logging
      syarat1: formData.syarat1 ? formData.syarat1.name : 'Belum diunggah',
      syarat2: formData.syarat2 ? formData.syarat2.name : 'Belum diunggah',
      syarat3: formData.syarat3 ? formData.syarat3.name : 'Belum diunggah'
    };

    console.log('Data yang dikirim:', submissionData);

    navigation.navigate('SKTMPage', { 
      permohonanData: submissionData,
      ...(formData.jenis_surat === 'SKTM' && { screen: 'SKTMForm' })
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader title="Permohonan Surat Keterangan"/>

      <ScrollView>
        <View style={{ padding: 10 }}>
        <MyPicker 
            data={jenisSuratOptions}
            label="Jenis Surat yang Dimohon"
            selectedValue={formData.jenis_surat}
            onValueChange={(value) => setFormData({...formData, jenis_surat: value})}
          />
          
          <MyInput 
            label="Keterangan Tambahan"
            onChangeText={(text) => setFormData({...formData, keterangan: text})}
          />
          
          <MyInput 
            label="No HP Aktif" 
            onChangeText={(text) => setFormData({...formData, no_hp: text})}
            keyboardType="phone-pad"
          />

          <View style={{ padding: 10, marginTop: 10 }}>
            <Text style={{ fontFamily: fonts.primary[600] }}>Syarat Surat : FC KTP, FC KK, Slip Gaji</Text>
            <MyFileUploader 
              onUpload={(file) => handleFileUpload('syarat1', file)}
            />
            <MyFileUploader 
              onUpload={(file) => handleFileUpload('syarat2', file)}
            />
            <MyFileUploader
              onUpload={(file) => handleFileUpload('syarat3', file)}
            />
          </View>

          <TouchableNativeFeedback onPress={handleSubmit}>
            <LinearGradient
              colors={['#DFA92B', '#B77B25']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                padding: 15,
                borderRadius: 50,
                alignItems: 'center',
                marginTop: 10,
                height: 50
              }}
            >
              <Text style={{
                fontFamily: fonts.primary[600],
                color: colors.white,
                fontSize: 16,
              }}>
                Selanjutnya
              </Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  );
}