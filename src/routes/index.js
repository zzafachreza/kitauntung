import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  StatusGizi,
  Imt,
  Take,
  StatusGiziHasil,
  DataIbuHamil,
  DataPemeriksaanIbuHami,
  SubDataPemeriksaanIbuHami,
  IbuHamil,
  TrisemesterI,
  TrisemesterII1,
  TrisemesterIII1,
  TrisemesterIII2,
  TrisemesterIII3,
  IbuBersalin,
  IbuNifas,
  IbuNifasKF,
  VideoMateri,
  TanyaJawab,
  Artikel,
  Kuesioner,
  TrisemesterII2,
  InfoLayananKesehatan,
  InfoEdukasiPenyakit,
  InfoEdukasiPenyakitKanker,
  InfoEdukasiPenyakitStroke,
  InfoEdukasiPenyakitJantung,
  InfoEdukasiPenyakitGinjal,
  InfoEdukasiPenyakitDiabetes,
  InteraksiBersamaTim,
  TentangAplikasi,
  InfoEdukasiPenyakitStunting,
  PrintKainRoll,
  PrintJersey,
  CetakSample,
  CetakSampleKainRoll,
  CetakSampleHijab,
  CetakSampleJersey,
  PrintHijab,
  Riwayat,
  MulaiPage,
  Indentitas,
  HasilTekananDarah,
  SubRiwayatPemeriksaanLaboratorium,
  Gula,
  ProfilLipid,
  LainLain,
  RiwayatPemeriksaanRadiologis,
  RiwayatObat,
  EKG,
  PenilaianNyeri,
  Rekomendasi,
  KalkulatorKompos,
  Petunjuk,
  CheckHargaStock,
  BuatPenawaran,
  TambahPenawaran,
  DonwnloadBrosur,
  BuktiPengeluaran,
  TambahBuktiPengeluaran,
  HasilBuatPenawaran,
  Penduduk,
  Pembangunan,
  PembangunanDetail,
  LapakUMKM,
  UMKMDetail,
  UMKMCheckout,
  UMKMOrder,
  Galeri,
  GaleriDetail,
  SKTMPage,
  OutputSKTM,



} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import PermohonanSuratKeterangan from '../pages/Menu/SuratKeterangan';
import TambahPermohonan from '../pages/Menu/TambahPermohonan';



const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Account} />

    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Penduduk"
        component={Penduduk}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Pembangunan"
        component={Pembangunan}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="PembangunanDetail"
        component={PembangunanDetail}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="LapakUMKM"
        component={LapakUMKM}
        options={{
          headerShown: false,

        }}
      />

      
<Stack.Screen
        name="UMKMDetial"
        component={UMKMDetail}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="UMKMCheckout"
        component={UMKMCheckout}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="UMKMOrder"
        component={UMKMOrder}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Galeri"
        component={Galeri}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="GaleriDetail"
        component={GaleriDetail}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="PermohonanSuratKeterangan"
        component={PermohonanSuratKeterangan}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
        name="TambahPermohonanSuratKeterangan"
        component={TambahPermohonan}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="SKTMPage"
        component={SKTMPage}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="OuputSKTM"
        component={OutputSKTM}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="CheckHargaStock"
        component={CheckHargaStock}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="KalkulatorKompos"
        component={KalkulatorKompos}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Petunjuk"
        component={Petunjuk}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />
















    </Stack.Navigator>
  );
}
