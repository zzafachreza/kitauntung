import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyGap, MyHeader } from '../../components'
import { Image } from 'react-native'
import { webURL } from '../../utils/localStorage'
import moment from 'moment'
import RenderHTML from 'react-native-render-html'
import YoutubePlayer from "react-native-youtube-iframe";

export default function GaleriDetail({ navigation, route }) {

  const item = route.params
  const systemFonts = [fonts.body3.fontFamily, fonts.headline4.fontFamily];
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title="Detail" />

      <ScrollView>
        <View style={{
          padding: 20,
        }}>

          {/* Judul */}
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: 15,
            textAlign: "center"
          }}>
            {item.judul}
          </Text>

          {/* Image */}
          <Image style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 20,

          }} source={{
            uri: webURL + item.cover
          }} />

          {/* deks */}
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[400],
            fontSize: 12,
          }}>{moment(item.tanggal).format('DD MMMM YYYY')}</Text>
          <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image style={{
              marginHorizontal: 4,
              width: windowWidth / 3.5,
              height: windowWidth / 3.5,
              borderRadius: 10,


            }} source={{
              uri: webURL + item.gambar1
            }} />
            <Image style={{
              marginHorizontal: 4,
              width: windowWidth / 3.5,
              height: windowWidth / 3.5,
              borderRadius: 10,


            }} source={{
              uri: webURL + item.gambar2
            }} />
            <Image style={{
              marginHorizontal: 4,
              width: windowWidth / 3.5,
              height: windowWidth / 3.5,
              borderRadius: 10,


            }} source={{
              uri: webURL + item.gambar3
            }} />
          </View>
          <MyGap jarak={10} />
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
    </View>
  )
}