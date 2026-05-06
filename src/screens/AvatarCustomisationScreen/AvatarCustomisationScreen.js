import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OptionRow from './components/OptionRow';
import Avatar from '../../components/Avatar';
import { Colors } from '../../styles';
import {
  accessoriesColorOptions,
  accessoriesOptions,
  clothesColorOptions,
  clothing,
  clothingGraphicOptions,
  eyebrowOptions,
  eyeOptions,
  facialHairColorOptions,
  facialHairOptions,
  hairColorOptions,
  hatColorOptions,
  mouthOptions,
  skinColorOptions,
  topOptions,
} from '../../helpers/avatarCustomisation';

const AvatarCustomizationScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [custom, setCustom] = useState({});

  const mergedUser = {
    seed: user.name || 'guest',
    ...custom,
  };

  const update = (key, value) => {
    setCustom(prev => {
      if (prev[key] === value) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }

      return { ...prev, [key]: value };
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Customize your avatar 🎨</Text>

      <Avatar user={mergedUser} />

      <OptionRow
        label="Hair Style"
        options={topOptions}
        selected={custom.top}
        onSelect={val => update('top', val)}
      />

      <OptionRow
        label="Hair Color"
        type="color"
        options={hairColorOptions}
        selected={custom.hairColor}
        onSelect={val => update('hairColor', val)}
      />

      {custom?.top == 'hat' && (
        <OptionRow
          label="Hat Color"
          type="color"
          options={hatColorOptions}
          selected={custom.hatColor}
          onSelect={val => update('hatColor', val)}
        />
      )}

      <OptionRow
        label="Eyes"
        options={eyeOptions}
        selected={custom.eyes}
        onSelect={val => update('eyes', val)}
      />

      {/* 😄 Mouth */}
      <OptionRow
        label="Mouth"
        options={mouthOptions}
        selected={custom.mouth}
        onSelect={val => update('mouth', val)}
      />

      {/* 🤨 Eyebrows */}
      <OptionRow
        label="Eyebrows"
        options={eyebrowOptions}
        selected={custom.eyebrows}
        onSelect={val => update('eyebrows', val)}
      />

      {/* 🧴 Skin */}
      <OptionRow
        label="Skin Color"
        type="color"
        options={skinColorOptions}
        selected={custom.skinColor}
        onSelect={val => update('skinColor', val)}
      />

      {/* 🕶 Accessories */}
      <OptionRow
        label="Accessories"
        options={accessoriesOptions}
        selected={custom.accessories}
        onSelect={val => update('accessories', val)}
      />

      <OptionRow
        label="Accessories Color"
        type="color"
        options={accessoriesColorOptions}
        selected={custom.accessoriesColor}
        onSelect={val => update('accessoriesColor', val)}
      />

      {user?.gender == 'male' && (
        <OptionRow
          label="Facial Hair"
          options={facialHairOptions}
          selected={custom.facialHair}
          onSelect={val => update('facialHair', val)}
        />
      )}

      {custom?.facialHair && (
        <OptionRow
          label="Facial Hair Color"
          type="color"
          options={facialHairColorOptions}
          selected={custom.facialHairColor}
          onSelect={val => update('facialHairColor', val)}
        />
      )}

      <OptionRow
        label="Clothing"
        options={clothing}
        selected={custom.clothing}
        onSelect={val => update('clothing', val)}
      />

      <OptionRow
        label="Cloth Color"
        options={clothesColorOptions}
        selected={custom.clothesColor}
        type="color"
        onSelect={val => update('clothesColor', val)}
      />

      <OptionRow
        label="Cloth Graphics"
        options={clothingGraphicOptions}
        selected={custom.clothingGraphic}
        onSelect={val => update('clothingGraphic', val)}
      />

      {/* 🚀 CTA */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AvatarCustomizationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
    color: Colors.TEXT_PRIMARY,
  },

  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 16,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: Colors.PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonText: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 16,
  },
});
