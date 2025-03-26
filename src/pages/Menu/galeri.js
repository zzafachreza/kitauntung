import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { MyHeader } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const galleryData = [
  {
    id: 1,
    title: 'Kegiatan Musrembang 2025',
    image: require('../../assets/img_dummy2.png'),
    previewImages: [
      require('../../assets/img_dummy2.png'),
      require('../../assets/img_dummy2.png'),
      require('../../assets/img_dummy2.png')
    ]
  },
  // Add more gallery items as needed
];

export default function Galeri({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader title="Galeri" />
      <ScrollView>
        <View style={{ padding: 10 }}>
          {galleryData.map((item) => (
            <TouchableWithoutFeedback 
              key={item.id}
              onPress={() => navigation.navigate('GaleriDetail', {
                title: item.title,
                mainImage: item.image,
                previewImages: item.previewImages
              })}
            >
              <ImageBackground
                source={item.image}
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginBottom: 10,
                  width: "100%",
                  height: 203,
                }}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={{
                  padding: 15,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                  <Text style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Bold',
                    color: colors.white,
                    marginBottom: 5,
                    lineHeight: 22,
                  }}>
                    {item.title}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('GaleriDetail', {
                    title: item.title,
                    mainImage: item.image,
                    previewImages: item.previewImages
                  })}>
                    <Text style={{
                      fontSize: 12,
                      fontFamily: 'Poppins-SemiBold',
                      color: colors.white,
                      textAlign: 'right',
                    }}>
                      Selengkapnya
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}