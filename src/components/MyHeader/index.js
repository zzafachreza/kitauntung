import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default function MyHeader({ onPress, color = colors.white, title, icon = false, iconname = 'search' }) {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#F6C52F", "#9D5D20"]} // Warna gradien dari kiri ke kanan
      start={{ x: 0, y: 0 }} // Mulai dari kiri
      end={{ x: 0, y: 1 }} // Berakhir di kanan
      style={{
        marginTop: 0,
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingVertical: 20,
        padding: 20,
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Icon type="ionicon" name="arrow-back-outline" size={20} color={color} />
      </TouchableOpacity>

      <Text
        style={{
          ...fonts.headline2,
          flex: 1,
          textAlign: 'center',
          marginLeft: -20,
          color: color,
        }}
      >
        {title}
      </Text>

      {icon && (
        <TouchableOpacity onPress={onPress}>
          <Icon name={iconname} size={20} color={color} />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});