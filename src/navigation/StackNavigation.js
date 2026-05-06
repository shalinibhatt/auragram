import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserOnBoardingScreen from '../screens/UserOnBoardingScreen/UserOnBoardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarChoiceScreen from '../screens/AvatarChoiceScreen/AvatarChoiceScreen';
import AvatarCustomizationScreen from '../screens/AvatarCustomisationScreen/AvatarCustomisationScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import GetStartedScreen from '../screens/GetStartedScreen/GetStartedScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />

        <Stack.Screen
          name="UserOnBoardingScreen"
          component={UserOnBoardingScreen}
        />
        <Stack.Screen name="AvatarChoice" component={AvatarChoiceScreen} />
        <Stack.Screen
          name="AvatarCustomization"
          component={AvatarCustomizationScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="GetStarted" component={GetStartedScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
