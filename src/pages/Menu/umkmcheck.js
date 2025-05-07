import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { MyHeader, MyInput } from '../../components';
import { colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { webURL } from '../../utils/localStorage';

export default function UMKMCheckout({ route, navigation }) {
  const { nama, gambar, harga, nama_toko, telepon_toko, alamat_toko, keterangan } = route.params;

  // Extract numeric value from harga string (assuming format like "Rp25.000")
  const numericHarga = parseInt(harga.replace(/\D/g, ''), 10);

  const [quantity, setQuantity] = useState(1);
  const [totalHarga, setTotalHarga] = useState(numericHarga);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateTotalHarga(newQuantity);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateTotalHarga(newQuantity);
    }
  };

  const updateTotalHarga = (qty) => {
    setTotalHarga(qty * numericHarga);
  };

  const formatCurrency = (num) => {
    return 'Rp' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  return (
    <View style={styles.container}>
      <MyHeader title="Checkout" />
      <ScrollView>
        <View style={styles.content}>
          <Image source={{
            uri: webURL + gambar
          }} style={styles.image} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
            <View>
              <Text style={styles.nama}>{nama}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
              <TouchableWithoutFeedback onPress={handleRemove}>
                <View style={{
                  borderWidth: 0.2,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  height: 45,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Icon type='ionicon' name='remove' size={20} />
                </View>
              </TouchableWithoutFeedback>
              <TextInput
                style={{
                  borderWidth: 0.2,
                  height: 45,
                  width: 40,
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: fonts.primary[600],
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                  includeFontPadding: false,
                  color: colors.black
                }}
                value={quantity.toString()}
                editable={false}
              />
              <TouchableWithoutFeedback onPress={handleAdd}>
                <View style={{
                  borderWidth: 0.2,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  height: 45,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Icon type='ionicon' name='add' size={20} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View>
            <Text style={styles.harga}>{new Intl.NumberFormat().format(harga)}</Text>
          </View>
          <View>
            <Text>{keterangan}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{
        borderWidth: 0.2,
        padding: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        top: 3
      }}>
        {/* TOTAL HARGA */}
        <View style={{ width: 185, height: 72, justifyContent: "center", alignItems: "center" }}>
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: 18,
            marginLeft: -50
          }}>
            {formatCurrency(totalHarga)}
          </Text>
        </View>

        {/* tombol check out */}
        <View style={{
          backgroundColor: colors.danger,
          width: 207,
          height: 72,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('UMKMOrder', {
            quantity: quantity,
            totalHarga: totalHarga,
            hargaAsli: numericHarga,
            nama_toko: nama_toko,
            nama: nama,
            gambar: gambar,
            telepon_toko: telepon_toko
          })}>
            <View style={{
              backgroundColor: colors.black,
              width: '100%',
              height: '100%',
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}>
              <Icon type='ionicon' name='cart' color={colors.white} size={22} />
              <Text style={{ fontFamily: fonts.primary[600], color: colors.white, paddingHorizontal: 10, top: 2 }}>Checkout</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
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
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: "center"
  },
  nama: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    marginTop: 10
  },
  harga: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    marginTop: -10,
    color: colors.success,
  },
});