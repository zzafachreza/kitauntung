import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyHeader } from '../../components'
import { Image } from 'react-native'
import { webURL } from '../../utils/localStorage'
import moment from 'moment'
import RenderHTML from 'react-native-render-html'

export default function PembangunanDetail({ navigation, route }) {

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
                        uri: webURL + item.gambar
                    }} />

                    {/* deks */}
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 12,
                    }}>{moment(item.tanggal).format('DD MMMM YYYY')}</Text>
                    <View>
                        <RenderHTML

                            tagsStyles={{
                                p: {
                                    fontFamily: fonts.secondary[400],
                                    textAlign: 'justify',
                                    lineHeight: 26,
                                    fontSize: 12,
                                },
                            }}
                            systemFonts={systemFonts}
                            contentWidth={windowWidth}
                            source={{
                                html: item.deskripsi
                            }}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}