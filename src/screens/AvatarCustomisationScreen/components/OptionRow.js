import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import { Colors } from '../../../styles';

const OptionRow = ({ label, options, selected, onSelect, type = 'text' }) => {
  const renderItem = ({ item }) => {
    const isSelected = selected === item;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onSelect(item)}
        style={[styles.option, isSelected && styles.selectedOption]}
      >
        {type === 'color' ? (
          <View
            style={[
              styles.colorCircle,
              { backgroundColor: `#${item}` },
              isSelected && styles.selectedColorCircle,
            ]}
          />
        ) : (
          <Text style={[styles.optionText, isSelected && styles.selectedText]}>
            {item}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <FlatList
        data={options}
        horizontal
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};

export default OptionRow;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.TEXT_PRIMARY,
    marginBottom: 8,
  },

  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.SECONDARY_BG,
    marginRight: 10,
  },

  selectedOption: {
    backgroundColor: Colors.PRIMARY,
    transform: [{ scale: 1.05 }],
  },

  optionText: {
    color: Colors.TEXT_PRIMARY,
    fontWeight: '500',
  },

  selectedText: {
    color: Colors.WHITE,
    fontWeight: '700',
  },

  /* 🎨 Color styles */
  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  selectedColorCircle: {
    borderColor: Colors.PRIMARY,
    transform: [{ scale: 1.1 }],
  },
});
