import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from '../../components/Avatar';
import { Colors } from '../../styles';

const AvatarChoiceScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're all set 🎉</Text>
      <Text style={styles.subtitle}>
        Want to customize your avatar further?
      </Text>

      <Avatar user={user} />

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('AvatarCustomization', { user })}
      >
        <Text style={styles.primaryText}>Customize Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.secondaryText}>Do it later</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AvatarChoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.TEXT_PRIMARY,
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: Colors.TEXT_SECONDARY,
  },

  primaryBtn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 14,
    marginTop: 30,
  },

  primaryText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontWeight: '600',
  },

  secondaryBtn: {
    marginTop: 12,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.BORDER,
  },

  secondaryText: {
    textAlign: 'center',
    color: Colors.TEXT_SECONDARY,
  },
});
