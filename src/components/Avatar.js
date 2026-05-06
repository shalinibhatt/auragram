import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { buildAvatarUrl } from '../utils/avatarBuilder';

const Avatar = ({ user }) => {
  const uri = buildAvatarUrl(user);  

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.avatar} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
});
