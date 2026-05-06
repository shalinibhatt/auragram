import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Avatar from '../../components/Avatar';
import { Colors } from '../../styles';
import { skinColorOptions } from '../../helpers/avatarCustomisation';

const UserOnBoardingScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    gender: '',
    skinColor: 'f2d3b1',
  });

  const updateUser = (key, value) => {
    setUser(prev => ({ ...prev, [key]: value }));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your avatar 👋</Text>
      <Text style={styles.subtitle}>
        This helps us personalize your experience
      </Text>
      <Avatar user={user} />

      <TextInput
        placeholder="Enter your name"
        placeholderTextColor={Colors.NINE3}
        style={styles.input}
        value={user.name}
        onChangeText={text => updateUser('name', text)}
      />

      <Text style={styles.label}>Select Gender</Text>
      <View style={styles.row}>
        {['male', 'female'].map(g => (
          <TouchableOpacity
            key={g}
            onPress={() => updateUser('gender', g)}
            style={[
              styles.genderBtn,
              user.gender === g && styles.genderSelected,
            ]}
          >
            <Text
              style={{
                color: user.gender === g ? Colors.WHITE : Colors.TEXT,
              }}
            >
              {g}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Choose Avatar Style</Text>
      <View style={styles.row}>
        {skinColorOptions.map(tone => (
          <TouchableOpacity
            key={tone}
            onPress={() => updateUser('skinColor', tone)}
            style={[
              styles.skinCircle,
              {
                backgroundColor: `#${tone}`,
                borderWidth: user.skinColor === tone ? 2 : 1,
                borderColor:
                  user.skinColor === tone ? Colors.PRIMARY : Colors.BORDER,
              },
            ]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AvatarChoice', { user })}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserOnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
    padding: 20,
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
    backgroundColor: Colors.WHITE,
  },

  label: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
    color: Colors.TEXT,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  genderBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.EEE,
    marginRight: 10,
  },

  genderSelected: {
    backgroundColor: Colors.PRIMARY,
  },

  skinCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.TEXT_PRIMARY,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 14,
    marginTop: 40,
  },

  buttonText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontWeight: '600',
  },
});
