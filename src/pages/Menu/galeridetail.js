import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';

export default function GaleriDetail({ route }) {
  // Get data from navigation params
  const { title, mainImage, previewImages } = route.params;

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      {/* Header with dynamic title */}
      <MyHeader title={title} />

      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{
            padding: 10,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 18,
              marginBottom: 20,
              textAlign: 'center'
            }}>
              {title}
            </Text>

            {/* Main image from params */}
            <Image 
              style={{
                width: '100%',
                height: 200,
                borderRadius: 8,
                resizeMode: 'cover'
              }} 
              source={mainImage} 
            />
          </View>

          {/* Preview images */}
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop: 15,
            flexWrap: 'wrap'
          }}>
            {previewImages.map((image, index) => (
              <Image 
                key={index}
                style={{
                  width: '32%',
                  aspectRatio: 1,
                  borderRadius: 6,
                  marginBottom: 10,
                }} 
                source={image} 
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}