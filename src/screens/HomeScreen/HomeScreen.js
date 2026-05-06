import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomDropdown from '../../components/CustomDropdown';
import { Colors } from '../../styles';
import { activityOptions, footwearBrandOptions, footwearTypeOptions, smartwatchOptions } from './helper';

const HomeScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    activities: [],
    goal: null,
    steps: null,

    footwearType: null,
    footwearBrand: null,
    customFootwear: '',

    smartwatch: 'none',
  });

  const update = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleActivity = value => {
    setForm(prev => {
      const exists = prev.activities.includes(value);
      return {
        ...prev,
        activities: exists
          ? prev.activities.filter(a => a !== value)
          : [...prev.activities, value],
      };
    });
  };

  const onContinue = () => {
    const finalBrand =
      form.footwearBrand === 'other' ? form.customFootwear : form.footwearBrand;

    navigation.navigate('GetStarted', {
      user: {
        ...form,
        footwearBrand: finalBrand,
      },
    });
  };

  const isDisabled =
    form.activities.length === 0 ||
    !form.goal ||
    !form.steps ||
    !form.footwearType;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {/* 🔥 HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Let’s Track Your Steps 👣</Text>
          <Text style={styles.subtitle}>
            Build your perfect fitness profile
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Your Activity</Text>
          <Text style={styles.helper}>Select all that apply</Text>

          <View style={styles.chipContainer}>
            {activityOptions?.map(item => {
              const selected = form.activities.includes(item.value);
              return (
                <TouchableOpacity
                  key={item.value}
                  onPress={() => toggleActivity(item.value)}
                  style={[styles.chip, selected && styles.chipSelected]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      selected && styles.chipTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionTitle}>Your Gear</Text>
          <Text style={styles.helper}>
            Helps us recommend better gear for your goals
          </Text>

          <CustomDropdown
            label="Footwear Type"
            value={form.footwearType}
            data={footwearTypeOptions}
            onChange={val => {
              update('footwearType', val);
              update('footwearBrand', null);
            }}
          />

          {form.footwearType && (
            <CustomDropdown
              label="Brand"
              value={form.footwearBrand}
              data={footwearBrandOptions}
              onChange={val => update('footwearBrand', val)}
            />
          )}

          {form.footwearBrand === 'other' && (
            <TextInput
              placeholder="Enter your footwear brand"
              placeholderTextColor={Colors.TEXT_SECONDARY}
              style={styles.input}
              value={form.customFootwear}
              onChangeText={text => update('customFootwear', text)}
            />
          )}

          {/* ⌚ SMARTWATCH */}
          <CustomDropdown
            label="Smartwatch"
            value={form.smartwatch}
            data={smartwatchOptions}
            onChange={val => update('smartwatch', val)}
          />

          {/* 🎯 GOALS */}
          <Text style={styles.sectionTitle}>Your Goals</Text>

          <CustomDropdown
            label="Goal"
            value={form.goal}
            data={[
              { label: 'Lose Weight 🔥', value: 'weight' },
              { label: 'Stay Active ⚡', value: 'active' },
              { label: 'Endurance 🏃‍♂️', value: 'endurance' },
              { label: 'Muscle Gain 💪', value: 'muscle' },
            ]}
            onChange={val => update('goal', val)}
          />

          <CustomDropdown
            label="Daily Steps"
            value={form.steps}
            data={[
              { label: '3000 Steps', value: '3000' },
              { label: '5000 Steps', value: '5000' },
              { label: '8000 Steps', value: '8000' },
              { label: '10000 Steps 🎯', value: '10000' },
            ]}
            onChange={val => update('steps', val)}
          />
        </View>
      </ScrollView>

      {/* 🚀 CTA */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={onContinue}
          disabled={isDisabled}
          style={[
            styles.button,
            isDisabled && { backgroundColor: Colors.NINE3 },
          ]}
        >
          <Text style={styles.buttonText}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
  },

  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.TEXT_PRIMARY,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
    marginTop: 6,
  },

  card: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.TEXT_SECONDARY,
    marginTop: 16,
    marginBottom: 6,
  },

  helper: {
    fontSize: 12,
    color: Colors.TEXT_SECONDARY,
    marginBottom: 10,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },

  chip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: Colors.EEE,
    marginRight: 10,
    marginBottom: 10,
  },

  chipSelected: {
    backgroundColor: Colors.PRIMARY,
  },

  chipText: {
    fontSize: 13,
    color: Colors.TEXT_PRIMARY,
    fontWeight: '500',
  },

  chipTextSelected: {
    color: Colors.WHITE,
  },

  input: {
    height: 50,
    borderRadius: 14,
    paddingHorizontal: 12,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.INPUT_BORDER,
    marginBottom: 10,
    color: Colors.TEXT_PRIMARY,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: Colors.PRIMARY_BG,
    borderTopWidth: 1,
    borderColor: Colors.BORDER,
  },

  button: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: Colors.PRIMARY,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.WHITE,
  },
});
