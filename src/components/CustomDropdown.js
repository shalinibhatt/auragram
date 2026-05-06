import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from '../styles';

const CustomDropdown = ({ label, data, value, onChange, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        itemTextStyle={styles.itemText}
        activeColor={Colors.PRIMARY_LIGHT}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder || 'Select'}
        value={value}
        onChange={item => onChange(item.value)}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    color: Colors.TEXT_PRIMARY,
  },
  dropdown: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.INPUT_BORDER,
  },
  dropdownContainer: {
    borderRadius: 12,
  },
  placeholder: {
    color: Colors.TEXT_SECONDARY,
  },
  selectedText: {
    color: Colors.TEXT_PRIMARY,
  },
  itemText: {
    color: Colors.TEXT_PRIMARY,
  },
});
