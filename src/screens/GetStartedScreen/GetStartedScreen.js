import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  initialize,
  requestPermission,
  readRecords,
} from 'react-native-health-connect';

const GetStartedScreen = ({ route }) => {
  console.log('route: ', route?.params);

  const readSampleData = async () => {
    try {
      // ✅ initialize
      const isInitialized = await initialize();
      console.log('Initialized:', isInitialized);

      // ✅ request permission
      const grantedPermissions = await requestPermission([
        { accessType: 'read', recordType: 'ActiveCaloriesBurned' },
      ]);

      console.log('Permissions:', grantedPermissions);

      // ✅ read data
      const { records } = await readRecords('ActiveCaloriesBurned', {
        timeRangeFilter: {
          operator: 'between',
          startTime: '2023-01-09T12:00:00.405Z',
          endTime: '2023-01-09T23:53:15.405Z',
        },
      });

      console.log('records:', records);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  // ✅ correct place for useEffect
  useEffect(() => {
    readSampleData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Get Started 🚀</Text>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
