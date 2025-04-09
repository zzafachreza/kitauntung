import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';
import { Color, colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

export default function MyFileUploader({
  label,
  iconname = 'upload',
  onUpload, // Changed from onFileChange to onUpload to match parent
  borderColor = Color.blueGray[300],
  value, // Add value prop to handle external state
}) {
  const [fileName, setFileName] = useState(value?.name || '');

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      
      if (result && result[0]) {
        const file = {
          name: result[0].name,
          uri: result[0].uri,
          type: result[0].type,
          size: result[0].size
        };
        
        setFileName(file.name);
        
        if (typeof onUpload === 'function') {
          onUpload(file); // Send complete file object
        }
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User canceled the picker');
      } else {
        console.error('Error picking file:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickFile} style={[styles.button, { borderColor }]}>
  
        <Text style={styles.fileNameText} numberOfLines={1} ellipsizeMode="middle">
          {fileName || 'Pilih File'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    ...fonts.subheadline3,
    color: colors.primary,
    marginBottom: 0,
  },
  button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  fileNameText: {
    ...fonts.body3,
    flex: 1,
    marginLeft: 10,
    color: Color.blueGray[900],
  },
});