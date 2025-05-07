import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { Color, colors, fonts, windowWidth } from '../../utils'
import { MyGap, MyHeader } from '../../components'
import { webURL } from '../../utils/localStorage'
import moment from 'moment'
import YoutubePlayer from "react-native-youtube-iframe"

export default function GaleriDetail({ navigation, route }) {
  const item = route.params;
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
    setVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader title="Detail" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: 15,
            textAlign: "center"
          }}>
            {item.judul}
          </Text>
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[400],
            color: Color.blueGray[400],
            textAlign: 'center',
            fontSize: 12,
          }}>{moment(item.tanggal).format('DD MMMM YYYY')}</Text>

          {/* Image Cover */}
          <TouchableOpacity onPress={() => openImage(webURL + item.cover)}>
            <Image style={{
              width: '100%',
              height: 200,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 20,
            }} source={{ uri: webURL + item.cover }} />
          </TouchableOpacity>

          {/* Galeri Gambar */}
          <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {[item.gambar1, item.gambar2, item.gambar3].map((img, i) => (
              <TouchableOpacity key={i} onPress={() => openImage(webURL + img)}>
                <Image style={{
                  marginHorizontal: 4,
                  width: windowWidth / 3.5,
                  height: windowWidth / 3.5,
                  borderRadius: 10,
                }} source={{ uri: webURL + img }} />
              </TouchableOpacity>
            ))}
          </View>

          <MyGap jarak={10} />

          {/* Youtube */}
          <YoutubePlayer
            height={220}
            videoId={route.params.youtube}
            webViewProps={{
              injectedJavaScript: `
                var element = document.getElementsByClassName('container')[0];
                element.style.position = 'unset';
                element.style.paddingBottom = 'unset';
                true;
              `,
            }}
          />
        </View>
      </ScrollView>

      {/* Modal Gambar Besar */}
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.9)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 40, right: 20, zIndex: 1 }}
            onPress={() => setVisible(false)}
          >
            <Text style={{ color: 'white', fontSize: 30 }}>✕</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: '90%', height: '70%', resizeMode: 'contain' }}
          />
        </View>
      </Modal>
    </View>
  )
}
