import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MyHeader } from '../../components';
import { colors, fonts } from '../../utils';

export default function UMKMCheckout({ route }) {
  const { nama, gambar, harga } = route.params;

  return (
    <View style={styles.container}>
      <MyHeader title="Checkout" />
      <View style={styles.content}>
        <Image source={gambar} style={styles.image} />
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>{harga}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  nama: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    marginTop: 10,
  },
  harga: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    marginTop: 5,
    color: colors.gray,
  },
});