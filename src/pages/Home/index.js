import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';

const images = [
  { id: 1, src: require('../../assets/korosel-1.png'), label: 'Gambar 1' },
  { id: 2, src: require('../../assets/koresel-2.png'), label: 'Gambar 2' },
  { id: 3, src: require('../../assets/koresel-3.png'), label: 'Gambar 3' },
];

const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const scrollX = useRef(new Animated.Value(0)).current; // Untuk animasi scroll
  const scrollViewRef = useRef(null); // Untuk mengontrol scroll view
  const [currentIndex, setCurrentIndex] = useState(0);

  const __getUser = () => {
    getData('user').then((u) => {
      setUser(u);
    });
  };

  useEffect(() => {
    __getUser();
  }, []);


  return (
    <ImageBackground
      source={require('../../assets/bghome.png')}
      style={{
        flex: 1,
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
      }}
    >
      <ScrollView>
        <View style={{ padding: 10 }}>
         <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:"center",
          padding: 10,
         }}>
            
            <View style={{
              
            }}>
            
          <Text style={{
            fontFamily:fonts.primary[600],
            color:colors.white,
            fontSize:18
          }}>Selamat Datang</Text>


        <Text style={{
            fontFamily:fonts.primary[600],
            color:colors.white,
            fontSize:20
          }}>Nizam Syahputra</Text>
            </View>


          <View style={{
            
          }}>
            <Image style={{
              width:62,
              height:62
            }} source={require('../../assets/logo.png')}/>
          </View>
            

         </View>



         {/* MENU */}

         <View style={{padding:10, marginTop:20}}>
              <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
              }}>


              <TouchableNativeFeedback>
                <View style={{
                  padding:10,
                  borderRadius:20,
                  borderWidth:1.5,
                  borderColor:colors.primary,
                  width:150,
                  height:148,
                  alignItems:"center",
                  justifyContent:"center",
                  backgroundColor:colors.white
                }}>
                
                <Image style={{
                  width:100.94,
                  height:85.45,
                }} source={require('../../assets/menu_penduduk.png')}/>

                <Text  style={{
                  fontFamily:fonts.primary[600],
                  textAlign:"center",

                }}>Penduduk</Text>

                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback>
                <View style={{
                  padding:10,
                  borderRadius:20,
                  borderWidth:1.5,
                  borderColor:colors.primary,
                  width:150,
                  height:148,
                  alignItems:"center",
                  justifyContent:"center",
                  backgroundColor:colors.white
                }}>
                
                <Image style={{
                  width:100.94,
                  height:85.45,
                }} source={require('../../assets/menu_pembangunan.png')}/>

                <Text  style={{
                  fontFamily:fonts.primary[600],
                  textAlign:"center",

                }}>Pembangunan</Text>

                </View>
              </TouchableNativeFeedback>



              </View>
         </View>


         
         <View style={{padding:10, marginTop:10}}>
              <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
              }}>


              <TouchableNativeFeedback>
                <View style={{
                  padding:10,
                  borderRadius:20,
                  borderWidth:1.5,
                  borderColor:colors.primary,
                  width:150,
                  height:148,
                  alignItems:"center",
                  justifyContent:"center",
                  backgroundColor:colors.white
                }}>
                
                <Image style={{
                  width:100.94,
                  height:85.45,
                }} source={require('../../assets/menu_umkm.png')}/>

                <Text  style={{
                  fontFamily:fonts.primary[600],
                  textAlign:"center",

                }}>Lapak UMKM</Text>

                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback>
                <View style={{
                  padding:10,
                  borderRadius:20,
                  borderWidth:1.5,
                  borderColor:colors.primary,
                  width:150,
                  height:148,
                  alignItems:"center",
                  justifyContent:"center",
                  backgroundColor:colors.white
                }}>
                
                <Image style={{
                  width:100.94,
                  height:85.45,
                }} source={require('../../assets/menu_galeri.png')}/>

                <Text  style={{
                  fontFamily:fonts.primary[600],
                  textAlign:"center",

                }}>Galeri</Text>

                </View>
              </TouchableNativeFeedback>
              </View>
         </View>



         <View style={{padding:10, marginTop:10}}>
              <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
              }}>


              <TouchableNativeFeedback>
                <View style={{
                  padding:10,
                  borderRadius:20,
                  borderWidth:1.5,
                  borderColor:colors.primary,
                  width:150,
                  height:148,
                  alignItems:"center",
                  justifyContent:"center",
                  backgroundColor:colors.white
                }}>
                
                <Image style={{
                  width:100.94,
                  height:85.45,
                }} source={require('../../assets/menu_permohonan.png')}/>

                <Text  style={{
                  fontFamily:fonts.primary[600],
                  textAlign:"center",

                }}>Permohonan Surat Keterangan</Text>

                </View>
              </TouchableNativeFeedback>

                <View style={{
                  padding:10
                }}>

                </View>



              </View>


              
         </View>



        </View>
      </ScrollView>
    </ImageBackground>
  );
}
