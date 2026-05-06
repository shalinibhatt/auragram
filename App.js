import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from './src/styles';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StackNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
