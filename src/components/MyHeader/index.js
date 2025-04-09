import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default function MyHeader({ 
  onPress, 
  color = colors.white, 
  title, 
  icon = false, 
  iconname = 'search',
  showBackButton = true 
}) {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#F6C52F", "#9D5D20"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradientContainer}
    >
      <View style={styles.headerContent}>
        {showBackButton && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon 
              type="ionicon" 
              name="arrow-back-outline" 
              size={20} 
              color={color} 
            />
          </TouchableOpacity>
        )}

        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.titleText,
              { color: color },
              !showBackButton && { marginLeft: 0 }
            ]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>

        {icon && (
          <TouchableOpacity 
            onPress={onPress}
            style={styles.iconButton}
          >
            <Icon 
              name={iconname} 
              size={20} 
              color={color} 
            />
          </TouchableOpacity>
        )}

        {/* Empty view untuk balance layout jika tidak ada icon */}
        {!icon && <View style={styles.emptyView} />}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    ...fonts.headline2,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24,
    paddingHorizontal: 5,
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  emptyView: {
    width: 30, // Sama dengan lebar tombol back untuk balance layout
  }
});