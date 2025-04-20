import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { MyHeader } from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import { apiURL, webURL } from '../../utils/localStorage';
import { FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
export default function Pembangunan({ navigation }) {



  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const __getTransaksi = () => {
    axios.post(apiURL + 'pembangunan').then(res => {
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
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title="Pembangunan" />
      <View style={{
        flex: 1,
        padding: 10,
      }}>
        <FlatList data={data} renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('PembangunanDetail', item)}>
              <View style={{
                width: '100%',
                maxWidth: 600,
                borderRadius: 16,
                overflow: 'hidden',
                alignSelf: 'center',
                marginVertical: 10,
                elevation: 4,
                backgroundColor: '#000'
              }}>
                <ImageBackground
                  source={{ uri: webURL + item.gambar }}
                  style={{ width: '100%', height: 200, justifyContent: 'flex-end' }}
                  imageStyle={{ borderRadius: 16 }}
                >
                  <LinearGradient
                    colors={['rgba(0,0,0,0.7)', 'transparent']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{
                      padding: 16,
                      justifyContent: 'flex-end',
                      height: '100%',
                    }}
                  >
                    <Text style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 4,
                    }}>
                      {item.judul}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>{moment(item.tanggal).format('DD MMMM YYYY')}</Text>

                      <Text style={{ color: 'white', fontSize: 12 }}>Selengkapnya ➔</Text>

                    </View>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )
        }}

        />

      </View>
    </View>
  );
}